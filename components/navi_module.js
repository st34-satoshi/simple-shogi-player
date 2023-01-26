import _ from "lodash"
import { Location } from "./models/location.js"

const FOCUS_FUNCTION = false

export const navi_module = {
  props: {
    sp_summary:                     { type: String,  default: "is_summary_off",    }, // 手数や結果の表示
    sp_slider:                      { type: String,  default: "is_slider_off",     }, // スライダー表示
    sp_setting:                     { type: String,  default: "is_setting_off",    }, // 設定ボタンの表示
    sp_controller:                  { type: String,  default: "is_controller_off", }, // コントローラー表示
    sp_viewpoint:                   { type: String,  default: "black",             }, // 視点

    sp_op_disabled:                 { type: Boolean, default: false,               }, // 全体の操作を無効化
    sp_hidden_if_piece_stand_blank: { type: Boolean, default: false,               }, // 駒がないときは駒台側を非表示
    sp_flip_if_white:               { type: Boolean, default: false,               }, // 最初に表示した局面が△なら反転

    sp_key_event_capture_enabled:   { type: Boolean, default: false,               }, // スライダーにフォーカスしていなくても左右キーで手数を動かす
    sp_shift_key_mag:               { type: Number,  default: 10,                  }, // キーで左右するとき shift を押したときの倍率
    sp_system_key_mag:              { type: Number,  default: 50,                  }, // キーで左右するとき command などを押したときの倍率
  },

  data() {
    return {
      new_viewpoint: null,
    }
  },

  mounted() {
    window.addEventListener("keydown", this.keydown_hook, false)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.keydown_hook)
  },

  created() {
    this.new_viewpoint = this.sp_viewpoint
  },

  watch: {
    sp_viewpoint(v)  { this.new_viewpoint = v               }, // 外 -> 中
    new_viewpoint(v) { this.$emit("update:sp_viewpoint", v) }, // 中 -> 外
  },

  methods: {
    keydown_hook(e) {
      if (this.debug_p && false) {
        this.log(document.activeElement)
        this.log(e.shiftKey, e.ctrlKey, e.altKey, e.metaKey)
        this.log("e", e)
        this.log("key", e.key)
        this.log("code", e.code)
        this.log("repeat", e.repeat)
      }

      if (this.sp_op_disabled) {
        return
      }

      if (this.focus_on_input_tag_p()) {
        return
      }

      if (this.shortcut_hook(e)) {
        return
      }

      if (this.sp_key_event_capture_enabled && (this.view_p || this.play_p)) {
        const dom = document.activeElement

        if (e.code === "Backspace" || e.code === "ArrowUp" || e.code === "ArrowLeft" || e.key === "k" || e.key === "p" || e.key === "b") {
          this.relative_move(-1, e)
          e.preventDefault()
        }

        if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowDown" || e.code === "ArrowRight" || e.key === "j" || e.key === "n" || e.key === "f") {
          this.relative_move(1, e)
          e.preventDefault()
        }
      }
    },

    navi_relative_move(v, event) {
      this.relative_move(v, event)
    },

    relative_move(v, event = null) {
      if (event) {
        if (event.shiftKey) {
          if (this.sp_shift_key_mag) {
            v *= this.sp_shift_key_mag
          }
        }
        if (event.ctrlKey || event.altKey || event.metaKey) {
          if (this.sp_system_key_mag) {
            v *= this.sp_system_key_mag
          }
        }
      }

      this.current_turn_add(v, event)
    },

    move_to_first(event = null) {
      this.current_turn_set(this.turn_offset_min, event)
    },

    move_to_last(event = null) {
      this.current_turn_set(this.turn_offset_max, event)
    },

    current_turn_add(v, event = null) {
      this.current_turn_set(this.xcontainer.turn_offset + v, event)
    },

    current_turn_set(v, event) {
      const new_val = this.xcontainer.turn_clamp(v)
      const updated = this.turn_offset !== new_val

      if (updated) {
        this.state_reset() // 駒を持った状態でコントローラーを操作したとき駒を持ち上げた状態が残るのを防ぐ

        if (this.view_p) {
          this.view_mode_xcontainer_update(new_val)
        }
        if (this.play_p) {
          this.play_mode_xcontainer_seek_to(new_val)
        }
        this.$emit("update:sp_turn", this.turn_offset)

        if (event) {
          this.log("局面を人が故意に変更")
          this.$emit("user_turn_change", this.turn_offset) // b-slider で変更
        }
      }
    },

    // by_user = true:ユーザーが離したときに呼ばれた
    current_turn_set_by_slider(v, by_user) {
      if (by_user) {
        this.log(`スライダーをユーザーが動かした : ${v}`)
      } else {
        this.log(`スライダーは勝手に動いた : ${v}`)
      }
      this.current_turn_set(v, by_user)
    },

    viewpoint_flip_handle() {
      this.viewpoint_flip()
      this.$emit("user_viewpoint_flip")
    },

    viewpoint_flip() {
      this.new_viewpoint = Location.fetch(this.new_viewpoint).flip.key
    },
  },
  computed: {
    fliped() { return this.new_viewpoint === "white"  },
  },
}
