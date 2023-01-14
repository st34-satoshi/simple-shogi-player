import { Soldier } from "./models/soldier.js"
import { Xcontainer } from "./models/xcontainer.js"

export const api_module = {
  methods: {
    // 盤を消してランダムに駒を配置する
    api_random_puton() {
      const soldier = Soldier.random()
      this.xcontainer.board.clear()
      this.xcontainer.board.place_on(soldier)
      return soldier
    },

    // 駒を置く
    api_place_on(soldier) {
      this.xcontainer.board.place_on(soldier)
    },

    // 駒を削除する
    api_delete_on(place) {
      this.xcontainer.board.delete_at(place)
    },

    // 盤面クリア
    api_board_clear() {
      this.xcontainer.board.clear()
    },

    // 指定手数の局面に設定
    api_board_turn_set(turn) {
      this.xcontainer_setup(turn)
    },

    // 指定手数の局面に設定(play_mode専用・音が出ない)
    api_play_mode_xcontainer_seek_to(turn) {
      this.play_mode_xcontainer_seek_to(turn)
    },

    // 反転状態の設定
    api_flip_set(flag) {
      this.new_viewpoint = flag ? "white" : "black"
    },
    api_viewpoint_set(viewpoint) {
      this.new_viewpoint = viewpoint
    },

    // 反転
    api_flip_toggle() {
      this.viewpoint_flip()
    },

    // 待った
    api_retract_a_move() {
      let turn = this.turn_offset - 2
      if (turn < 0) {
        turn = 0
      }
      this.api_board_turn_set(turn)
    },

    // 棋譜の反映
    api_sfen_or_kif_set(sfen_or_kif, options = {}) {
      this.xcontainer = new Xcontainer()
      this.xcontainer.data_source = this.data_source_by(sfen_or_kif)
      this.xcontainer.current_turn = options.turn || 0
      this.xcontainer.run()
    },

    // slider にフォーカスする
    api_turn_slider_focus() {
      this.turn_slider_focus()
    },
  },
}
