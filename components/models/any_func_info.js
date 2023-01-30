import MemoryRecord from "js-memory-record"
import { Location } from "./location"

export class AnyFuncInfo extends MemoryRecord {
  static get define() {
    return [

      { key: "指将棋用玉配置",     func: e => { e.xcontainer.king_formation_auto_set()   }, },
      { key: "指将棋用玉回収",     func: e => { e.xcontainer.king_formation_auto_unset() }, },
      { key: "視点切り替え",       func: e => { e.TheSp.api_flip_toggle() }, },

      // { key: "盤面をシャッフル",   func: e => { e.xcontainer.shuffle_apply(4) }, },
      { key: "盤面シャッフル",     func: e => { e.shuffle_dialog_open() }, },
      { key: "上ローテイト",       func: e => { e.xcontainer.slide_xy(0, -1) }, },
      { key: "下ローテイト",       func: e => { e.xcontainer.slide_xy(0, 1)  }, },
      { key: "左ローテイト",       func: e => { e.xcontainer.slide_xy(-1, 0) }, },
      { key: "右ローテイト",       func: e => { e.xcontainer.slide_xy(1, 0)  }, },
      // { key: "指将棋用玉配置(左)", func: e => { e.xcontainer.king_formation_set("bottom_left") }, },
      // { key: "指将棋用玉回収(左)", func: e => { e.xcontainer.king_formation_unset("bottom_left") }, },
      // { key: "指将棋用玉配置(右)", func: e => { e.xcontainer.king_formation_set("bottom_right") }, },
      // { key: "指将棋用玉回収(右)", func: e => { e.xcontainer.king_formation_unset("bottom_right") }, },

    ]
  }
}
