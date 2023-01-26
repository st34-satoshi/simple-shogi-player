import _ from "lodash"
import { Location } from "./models/location.js"
import isMobile from 'ismobilejs'

const FOCUS_FUNCTION = false

export const app_focus = {
  props: {},
  beforeMount() {
    if (this.debug_p) {
      console.log(`sp_mobile_p: ${this.sp_mobile_p}`)
      console.log(`devise_info.key: ${this.devise_info.key}`)
      console.log(`focus_disable_p: ${this.focus_disable_p}`)
    }
  },
  mounted() {},
  methods: {
    // テキストフィールドまたはテキストエリアにフォーカスしているか？
    focus_on_input_tag_p() {
      const dom = document.activeElement
      if (dom.tagName === "TEXTAREA" || dom.tagName === "INPUT") {
        return true
      }
    },
  },
  computed: {
    focus_enable_p() {
      return !this.focus_disable_p
    },
    // モバイル端末または実際タッチできる端末であればキーボードはないと見なしてスライダーにフォーカスしない
    focus_disable_p() {
      return this.sp_mobile_p || this.devise_info.key === "is_device_touch"
    },
    sp_mobile_p() {  // mobile_p にするとグローバルで定義したものと干渉する
      return isMobile(window.navigator).any
    },
  },
}
