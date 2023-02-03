import XRegExp from "xregexp"
import Vue from "vue"
import _ from "lodash"

import { Board      } from "./board.js"
import { ParserBase } from "./parser_base.js"
import { Piece      } from "./piece.js"
import { Place      } from "./place.js"
import { Soldier    } from "./soldier.js"
import { Location   } from "./location.js"
import { MoveHash   } from "./move_hash.js"

export class SfenParser extends ParserBase {
  reset() {
    super.reset()
    this.attributes = {}
  }

  parse() {
    this.raw_body = this.raw_body.replace(/startpos/, "sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1")
    const regex = XRegExp("sfen\\s+(?<board>\\S+)\\s+(?<b_or_w>\\S+)\\s+(?<hold_pieces>\\S+)\\s+(?<turn_counter_next>\\d+)(\\s+moves\\s+(?<moves>.*))?")
    this.attributes = XRegExp.exec(this.raw_body, regex)
    if (process.env.NODE_ENV === "deveopment") {
      console.log(this.attributes)
    }
  }

  get board() {
    const board = new Board()
    this.attributes["board"].split("/").forEach((e, y) => {
      let x = 0
      XRegExp.forEach(e, XRegExp("(?<promoted>\\+?)(?<piece>\\S)"), (m, i) => {
        if (/\d+/.test(m.piece)) {
          x += Number(m.piece)
        } else {
          const soldier = new Soldier({
            place: new Place([x, y]),
            piece: Piece.fetch(m.piece),
            promoted: (m.promoted === "+"),
            location: this.__location_by_upper_or_lower_case(m.piece),
          })
          board.place_on(soldier)
          x++
        }
      })
    })
    return board
  }

  get base_location() {
    let key = null
    if (this.attributes["b_or_w"] === "b") {
      key = "black"
    } else {
      key = "white"
    }
    return Location.fetch(key)
  }

  get hold_pieces() {
    const hash = this.hold_pieces_empty_hash()
    if (this.attributes["hold_pieces"] !== "-") {
      XRegExp.forEach(this.attributes["hold_pieces"], XRegExp("(?<count>\\d+)?(?<piece_char>\\S)"), (md, i) => {
        const piece = Piece.fetch(md.piece_char)
        let count = Number(md.count || 1)
        const location = this.__location_by_upper_or_lower_case(md.piece_char)
        count += hash[location.key][piece.key] || 0
        Vue.set(hash[location.key], piece.key, count)
      })
    }
    return hash
  }

  // sfen_serializer 用
  get turn_base() {
    return Number(this.attributes["turn_counter_next"]) - 1
  }

  // FIXME: move_hashes が正しい
  get move_infos() {
    // this.moves.map((e, i) => { としたかったが break できないため lodash の forEach に変更。lodash のは false で break できる
    const ary = []
    _.forEach(this.moves, (e, i) => {
      const move_hash = MoveHash.parse(e)
      if (!move_hash) {
        return false  // break
      }
      move_hash["location"] = this.location_by_offset(i) // これいるのか？ → いる
      ary.push(move_hash)
    })
    return ary
  }

  get moves() {
    if (!this.moves_exist_p) {
      return []
    }
    return this.attributes["moves"].split(/\s+/)
  }

  get moves_exist_p() {
    return (this.attributes["moves"] || "") !== ""
  }

  // 最初の局面(1から始まる)
  //
  //   以下のようにしてもよい
  //   const sfen_parser = new SfenParser()
  //   sfen_parser.raw_body = "position sfen 7nl/7k1/9/7pp/6N2/9/9/9/9 b GS2r2b3g3s2n3l16p 2"
  //   sfen_parser.parse()
  //   sfen_parser.attributes.turn_counter_next = 1
  //   expect(sfen_parser.init_sfen).toEqual('position sfen 7nl/7k1/9/7pp/6N2/9/9/9/9 b GS2r2b3g3s2n3l16p 1')
  //
  get init_sfen_from_one() {
    const parts = []
    parts.push("position")
    parts.push("sfen")
    parts.push(this.attributes["board"])
    parts.push(this.attributes["b_or_w"])
    parts.push(this.attributes["hold_pieces"])
    parts.push(1)
    return parts.join(" ")
  }

  // 最初の局面
  get init_sfen() {
    const parts = []
    parts.push("position")
    parts.push("sfen")
    parts.push(this.init_sfen_strip)
    return parts.join(" ")
  }

  // 最初の局面(position sfenなし)
  get init_sfen_strip() {
    const parts = []
    parts.push(this.attributes["board"])
    parts.push(this.attributes["b_or_w"])
    parts.push(this.attributes["hold_pieces"])
    parts.push(this.attributes["turn_counter_next"])
    return parts.join(" ")
  }

  // 元の状態で返す
  // このとき attributes を更新していれば違う形で返せる
  get to_sfen() {
    const parts = []
    parts.push("position")
    parts.push("sfen")
    parts.push(this.attributes["board"])
    parts.push(this.attributes["b_or_w"])
    parts.push(this.attributes["hold_pieces"])
    parts.push(this.attributes["turn_counter_next"])
    if (this.moves_exist_p) {
      parts.push("moves")
      parts.push(this.attributes["moves"])
    }
    return parts.join(" ")
  }

  __location_by_upper_or_lower_case(v) {
    let key = null
    if (/[A-Z]/.test(v)) {
      key = "black"
    } else {
      key = "white"
    }
    return Location.fetch(key)
  }
}

if (process.argv[1] === __filename) {
  let sfen_parser

  sfen_parser = SfenParser.parse("position sfen +lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b S2s 1 moves 7i6h S*2d")
  console.log(sfen_parser)

  sfen_parser = SfenParser.parse("position sfen +lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b S2s 1 moves 7i6h S*2d")
  console.log(sfen_parser)
}
