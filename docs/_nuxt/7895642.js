(window.webpackJsonp=window.webpackJsonp||[]).push([[45,30,35,116],{281:function(_,e,n){"use strict";n.r(e),n.d(e,"CustomMarked",(function(){return o}));var o=n(566),l=new o.Renderer;l.table=function(header,body){return'\n  <div class="table_wrap">\n    <table>\n      <thead>'.concat(header,"</thead>\n      <tbody>").concat(body,"</tbody>\n    </table>\n  </div>")},o.setOptions({renderer:l,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1})},287:function(_,e,n){"use strict";e.a='| Name                                          | Description                                                                                                                                                                                                                                        | Default                   |\n|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|\n| `sp_summary`                                  | 手数や結果の表示                                                                                                                                                                                                                                   | "is_summary_on"           |\n| `sp_slider`                                   | スライダー表示                                                                                                                                                                                                                                     | "is_slider_off"           |\n| `sp_setting`                                  | 設定ボタンの表示                                                                                                                                                                                                                                   | "is_setting_off"          |\n| `sp_controller`                               | コントローラー表示                                                                                                                                                                                                                                 | "is_controller_off"       |\n| `sp_viewpoint`                                | 視点                                                                                                                                                                                                                                               | "black"                   |\n| `sp_turn_slider_focus`                        | mountedしたらスライダーにフォーカスする？                                                                                                                                                                                                          | "is_turn_slider_focus_on" |\n| `sp_op_disabled`                              | 全体の操作を無効化                                                                                                                                                                                                                                 | false                     |\n| `sp_hidden_if_piece_stand_blank`              | 駒がないときは駒台側を非表示                                                                                                                                                                                                                       | false                     |\n| `sp_flip_if_white`                            | 最初に表示した局面が△なら反転                                                                                                                                                                                                                     | false                     |\n| `sp_key_event_capture_enabled`                | スライダーにフォーカスしていなくても左右キーで手数を動かす                                                                                                                                                                                         | false                     |\n| `sp_shift_key_mag`                            | キーで左右するとき shift を押したときの倍率                                                                                                                                                                                                        |                        10 |\n| `sp_system_key_mag`                           | キーで左右するとき command などを押したときの倍率                                                                                                                                                                                                  |                        50 |\n| `sp_board_dimension_w`                        | 盤のセル数(W)                                                                                                                                                                                                                                      |                         9 |\n| `sp_board_dimension_h`                        | 盤のセル数(H)                                                                                                                                                                                                                                      |                         9 |\n| `sp_layout`                                   | レイアウト is_(vertical\\|horizontal)                                                                                                                                                                                                               | "is_vertical"             |\n| `sp_hpos`                                     | DEPRECATE                                                                                                                                                                                                                                          | "is_hcentered"            |\n| `sp_vpos`                                     | DEPRECATE                                                                                                                                                                                                                                          | "is_vcentered"            |\n| `sp_fullheight`                               | DEPRECATE                                                                                                                                                                                                                                          | "is_fullheight_off"       |\n| `sp_balloon`                                  | 対局者名の下に駒数スタイルと同じ背景色を置く                                                                                                                                                                                                       | "is_balloon_on"           |\n| `sp_layer`                                    | レイヤー確認(デバッグ用)                                                                                                                                                                                                                           | "is_layer_off"            |\n| `sp_board_shadow`                             | 盤の影適用方法 is_board_shadow_(drop\\|box\\|none)                                                                                                                                                                                                   | "is_board_shadow_drop"    |\n| `sp_blink`                                    | 最終手の表現方法 is_blink_(on\\|off)                                                                                                                                                                                                                | "is_blink_off"            |\n| `sp_pi_variant`                               | 駒の種類                                                                                                                                                                                                                                           | "is_pi_variant_a1by"      |\n| `sp_bg_variant`                               | 盤の種類                                                                                                                                                                                                                                           | "is_bg_variant_none"      |\n| `sp_mobile_fit`                               | DEPRECATE                                                                                                                                                                                                                                          | "is_mobile_fit_on"        |\n| `sp_mobile_vertical`                          | モバイル時に自動的に縦配置に切り替える                                                                                                                                                                                                             | "is_mobile_vertical_on"   |\n| `sp_location_behavior`                        | ☗☖をタップしたとき視点を切り替える                                                                                                                                                                                                               | "is_location_flip_on"     |\n| `sp_debug_mode`                               | デバッグモード                                                                                                                                                                                                                                     | "is_debug_mode_off"       |\n| `sp_sfen_show`                                | SFENを下に表示する                                                                                                                                                                                                                                 | "is_sfen_show_off"        |\n| `sp_overlay_nav`                              | view_mode のとき盤の左右で手数変更(falseなら駒を動かせる)                                                                                                                                                                                          | "is_overlay_nav_off"      |\n| `sp_turn`                                     | 局面(手数)                                                                                                                                                                                                                                         |                        -1 |\n| `sp_run_mode`                                 | モード                                                                                                                                                                                                                                             | "view_mode"               |\n| `sp_body`                                     | 棋譜 KIF or SFEN                                                                                                                                                                                                                                   | null                      |\n| `sp_player_info`                              | 対局者名と時間                                                                                                                                                                                                                                     | null                      |\n| `sp_comment`                                  | KIFのコメントを表示する                                                                                                                                                                                                                            | "is_comment_on"           |\n| `sp_player_click_handle`                      | 名前(時間を含む)をタップしたときに実行する                                                                                                                                                                                                         | null                      |\n| `sp_location_click_handle`                    | ☗☖をタップしたときに実行する                                                                                                                                                                                                                     | null                      |\n| `sp_board_click_handle`                       | 盤をタップしたときに実行する(駒よりも優先)                                                                                                                                                                                                         | null                      |\n| `sp_board_piece_back_user_style`              | セルのスタイルを決める処理                                                                                                                                                                                                                         | null                      |\n| `sp_board_piece_back_user_class`              | セルのクラスを決める処理                                                                                                                                                                                                                           | null                      |\n| `sp_board_cell_left_click_user_handle`        | セルタップ時の処理(クリック後に呼ぶ)                                                                                                                                                                                                               | null                      |\n| `sp_board_cell_pointerdown_user_handle`       | セルタップ時の処理(クリックした瞬間に呼ぶ)                                                                                                                                                                                                         | null                      |\n| `sp_human_side`                               | 含まれる側だけ操作できるようにする                                                                                                                                                                                                                 | "both"                    |\n| `sp_device`                                   | デバイス is_device_(touch\\|desktop) 自動判別するので明示的に設定しなくてよい                                                                                                                                                                       | null                      |\n| `sp_sound_enabled`                            | サウンド                                                                                                                                                                                                                                           | false                     |\n| `sp_sound_body_changed`                       | sp_body をあとから変更して内容が変わったときに音を出すか？                                                                                                                                                                                         | true                      |\n| `sp_sound_volume`                             | ボリューム                                                                                                                                                                                                                                         |                       0.5 |\n| `sp_play_mode_legal_move_only`                | play_mode で合法手のみに絞る                                                                                                                                                                                                                       | true                      |\n| `sp_play_mode_legal_jump_only`                | play_mode で飛角香は駒を跨げない (角ワープ禁止)                                                                                                                                                                                                    | true                      |\n| `sp_play_mode_legal_pawn_drop`               | play_mode で二歩禁止                                                                                                                                                                                                                               | true                      |\n| `sp_play_mode_auto_promote`                   | play_mode で死に駒になるときは自動的に成る                                                                                                                                                                                                         | true                      |\n| `sp_play_mode_not_put_if_death_soldier`       | play_mode で死に駒になるときは置けないようにする                                                                                                                                                                                                   | true                      |\n| `sp_play_mode_only_own_piece_to_move`         | play_mode では自分手番とき自分の駒しか動かせないようにする                                                                                                                                                                                         | true                      |\n| `sp_play_mode_can_not_kill_same_team_soldier` | play_mode では自分の駒で同じ仲間の駒を取れないようにする                                                                                                                                                                                           | true                      |\n| `sp_edit_mode_double_click_time_ms`           | edit_mode で駒を反転するときのダブルクリックと認識する時間(ms)                                                                                                                                                                                     |                       350 |\n| `sp_play_effect_type`                         | 指したときのエフェクトの種類 fw_type_3                                                                                                                                                                                                             | null                      |\n| `sp_move_cancel`                              | is_move_cancel_standard: (死に駒セルを除き)移動できないセルに移動したとき持った状態をキャンセルする。is_move_cancel_reality: (盤上の駒に限り)キャンセルは元の位置をタップ。is_move_cancel_rehold: (盤上の駒に限り)キャンセルと同時に盤上の駒を持つ | "is_move_cancel_standard" |\n| `sp_view_mode_soldier_movable`                | view_mode でも駒を動かせる(ただし本筋は破壊しない)                                                                                                                                                                                                 | true                      |\n'}}]);