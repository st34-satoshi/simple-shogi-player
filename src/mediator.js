import _ from "lodash"
import Vue from "vue"

import Board from "./board"
import Place from "./place"
import Piece from "./piece"
import Soldier from "./soldier"
import SfenParser from "./sfen_parser"
import SfenSerializer from "./sfen_serializer"
import PresetInfo from "./preset_info"

export default class Mediator {
  constructor() {
    const data_source = new SfenParser()
    data_source.kifu_body = "position startpos"
    data_source.parse()

    this.data_source = data_source
    this.current_turn = 0
    this.board = null
    this.hold_pieces = null
    this.last_hand = null
    this.piece_box = {}

    this.env = process.env.NODE_ENV
  }

  run() {
    this.board = this.data_source.board
    this.hold_pieces = this.data_source.hold_pieces
    this.last_hand = null

    const move_infos = this.data_source.move_infos

    const num = this.real_turn - this.turn_min
    _(num).times((i) => { this.execute_one(move_infos[i]) })
  }

  execute_one(m) {
    this.last_hand = m
    if (m.drop_piece) {
      const soldier = new Soldier({
        piece: m.drop_piece,
        place: m.place,
        promoted: m.promoted,
        location: m.location,
      })
      this.hold_pieces_add(m.location, soldier.piece, -1)
      this.board.place_on(soldier)
    } else {
      {
        const soldier = this.board.lookup(m.place)
        if (soldier) {
          this.hold_pieces_add(m.location, soldier.piece, 1)
        }
      }
      const soldier = this.board.lookup(m.origin_place)
      if (m.promoted_trigger) {
        soldier.promoted = true
      }
      soldier.place = m.place
      this.board.delete_at(m.origin_place)
      this.board.place_on(soldier)
    }
  }

  hold_pieces_count(location, piece) {
    return this.hold_pieces[location.key][piece.key] || 0
  }

  hold_pieces_add(location, piece, plus = 1) {
    const count = this.hold_pieces_count(location, piece) + plus
    const counts_hash = this.hold_pieces[location.key]
    if (count >= 1) {
      Vue.set(counts_hash, piece.key, count)
    } else {
      Vue.delete(counts_hash, piece.key)
    }
  }

  // location の piece を count 減らしたいとき本当に減らせる数を返す
  hold_pieces_can_be_reduced_count(location, piece, count) {
    const max = this.hold_pieces_count(location, piece)
    if (count > max) {
      count = max
    }
    return count
  }

  board_safe_delete_on(place) {
    this.board.delete_at(place)
  }

  board_piece_fore_class(xy) {
    const place = Place.fetch(xy)
    const soldier = this.board.lookup(place)

    if (soldier) {
      return soldier.to_class_list
    }

    return []
  }

  cell_piece_class(xy) {
    const place = Place.fetch(xy)
    const soldier = this.board.lookup(place)
    let list = []
    if (soldier) {
      list.push(`location_${soldier.location.key}`)
    }
    return list
  }

  cell_view(xy) {
    const place = Place.fetch(xy)
    const soldier = this.board.lookup(place)
    let str = ""
    if (soldier) {
      str = soldier.name
    }
    return str
  }

  get dimension() {
    return Board.dimension
  }

  // ruby style array index access
  get real_turn() {
    let index = Number(this.current_turn)
    if (index < 0) {
      index += this.turn_max + 1
    }
    return this.turn_clamp(index)
  }

  turn_clamp(index) {
    return _.clamp(Number(index), this.turn_min, this.turn_max)
  }

  get previous_location() {
    return this.data_source.location_by_offset(this.real_turn - 1)
  }

  get current_location() {
    return this.data_source.location_by_offset(this.real_turn)
  }

  get current_comments() {
    if (this.data_source.comments_pack) {
      return this.data_source.comments_pack[this.real_turn]
    }
  }

  get turn_min() {
    return this.data_source.turn_min
  }

  get turn_max() {
    return this.data_source.turn_max
  }

  get display_base_turn() {
    return this.data_source.display_base_turn
  }

  current_turn_label(final_label) {
    if (this.real_turn === this.turn_max) {
      if (final_label) {
        return `まで${this.real_turn}手で${final_label}`
      } else {
        return `まで${this.real_turn}手で${this.previous_location.name}の勝ち`
      }
    } else {
      return `${this.real_turn}手`
    }
  }

  realized_hold_pieces_of(location_key) {
    const list = Object.entries(this.hold_pieces[location_key])
    return _(list)
      .filter(([key, count]) => count >= 1)
      .map(([key, count]) => [Piece.fetch(key), count])
      .sortBy(([key, count]) => key.code)
      .value()
  }

  // -------------------------------------------------------------------------------- serialize

  // 重いのでキャッシュしておく
  get to_sfen() {
    return this.cached("to_sfen", () => this.sfen_serializer.to_s)
  }

  get to_sfen_without_turn() {
    return this.cached("to_sfen_without_turn", () => this.sfen_serializer.to_s_without_turn)
  }

  get to_position_sfen() {
    return `position sfen ${this.to_sfen}`
  }

  get sfen_serializer() {
    return new SfenSerializer(this)
  }

  // -------------------------------------------------------------------------------- piece_box

  piece_box_count(piece) {
    return this.piece_box[piece.key] || 0
  }

  piece_box_add(piece, plus = 1) {
    const count = this.piece_box_count(piece) + plus
    if (count >= 1) {
      Vue.set(this.piece_box, piece.key, count)
    } else {
      Vue.delete(this.piece_box, piece.key)
    }
  }

  // piece を count 減らしたいとき本当に減らせる数を返す
  piece_box_can_be_reduced_count(piece, count) {
    const max = this.piece_box_count(piece)
    if (count > max) {
      count = max
    }
    return count
  }

  piece_box_realize() {
    const list = Object.entries(this.piece_box) // {a: 1} => [['a', 1]]
    return _(list)
      .filter(([key, count]) => count >= 1)
      .map(([key, count]) => [Piece.fetch(key), count])
      .sortBy(([key, count]) => key.code)
      .value()
  }

  // -------------------------------------------------------------------------------- Utilities

  // location の駒台の駒をすべて駒箱に移動する
  hold_pieces_to_piece_box(location) {
    _.forIn(this.hold_pieces[location.key], (count, piece_key) => {
      const piece = Piece.fetch(piece_key)
      this.hold_pieces_add(location, piece, -count)
      this.piece_box_add(piece, count)
    })
  }

  // 駒箱の駒をすべて location の駒台に移動する
  piece_box_to_hold_pieces(location) {
    _.forIn(this.piece_box, (count, piece_key) => {
      const piece = Piece.fetch(piece_key)
      this.piece_box_add(piece, -count)
      this.hold_pieces_add(location, piece, count)
    })
  }

  // プリセットに対応するように駒箱をセットする
  piece_box_reset_by_preset(preset_info) {
    this.piece_box_clear()

    const info = PresetInfo.fetch(preset_info)
    if (info.piece_box) {
      info.piece_box.forEach(([e, c]) => {
        this.piece_box_add(Piece.fetch(e), c)
      })
    }
  }

  piece_box_clear() {
    this.piece_box = {}
  }

  // -------------------------------------------------------------------------------- private

  cached(key, func) {
    const name = `__cached_${key}`
    if (typeof this[name] !== "undefined") {
      // alert(`cached: ${key}`)
      return this[name]
    }
    // alert(`run: ${key}`)
    this[name] = func()
    return this[name]
  }
}
