(window.webpackJsonp=window.webpackJsonp||[]).push([[17,22,68],{281:function(_,n,e){"use strict";e.d(n,"a",(function(){return o}));var o=e(789),r=new o.Renderer;r.table=function(header,body){return'\n  <div class="table_wrap">\n    <table>\n      <thead>'.concat(header,"</thead>\n      <tbody>").concat(body,"</tbody>\n    </table>\n  </div>")},o.setOptions({renderer:r,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1})},285:function(_,n,e){"use strict";n.a="| 変数                                         | 初期値                                 | 意味                                                                  |\n|----------------------------------------------|----------------------------------------|-----------------------------------------------------------------------|\n| `--sp_promote_select_modal_bg_color`         | hsla(0, 0%, 0%, 0.85)                  | 成り不成り選択画面の背景色                                            |\n| `--sp_promote_select_modal_hover_color`      | hsla(0, 0%, 100%, 0.5)                 | 成り不成り選択でhoverした駒の背景色                                   |\n| `--sp_promote_select_modal_z`                | $promote_select_modal_z                | 成り不成り選択モーダルの z-index                                      |\n| `--sp_piece_blur`                            |                                      0 | 駒ぼかし                                                              |\n| `--sp_piece_grayscale`                       |                                      0 | 駒グレースケール                                                      |\n| `--sp_piece_contrast`                        |                                    1.0 | 駒コントラスト                                                        |\n| `--sp_piece_invert`                          |                                      0 | 駒色反転                                                              |\n| `--sp_piece_opacity`                         |                                    1.0 | 駒不透明度                                                            |\n| `--sp_piece_hue`                             |                                    1.0 | 駒色相                                                                |\n| `--sp_piece_saturate`                        |                                    1.0 | 駒彩度                                                                |\n| `--sp_piece_brightness`                      |                                    1.0 | 駒輝度                                                                |\n| `--sp_piece_sepia`                           |                                      0 | 駒色セピア度                                                          |\n| `--sp_piece_blend`                           | normal                                 | 駒の mix-blend-mode の値                                              |\n| `--sp_board_piece_rate`                      | 90%                                    | 盤のセル内の駒占有率                                                  |\n| `--sp_board_piece_position`                  | center                                 | 駒を選択できる範囲内の駒の縦位置                                      |\n| `--sp_piece_blink_color0`                    | hsla(0, 0%, 0%, 0.25)                  | 最後に動かした駒の背景色1(点滅:0%)                                    |\n| `--sp_piece_blink_color1`                    | hsla(0, 0%, 0%, 0.10)                  | 最後に動かした駒の背景色2(点滅:100%)                                  |\n| `--sp_piece_origin_color`                    | hsla(0, 0%, 0%, 0.1)                   | 最後に動かした駒の元の位置の背景色                                    |\n| `--sp_piece_selectable_color`                | hsla(0, 0%, 0%, 0.1)                   | 持ち上げれる駒の背景色                                                |\n| `--sp_lifted_origin_bg_color_desktop`        | hsla(0, 0%, 0%, 0.1)                   | 持ち上げた駒の背景色(desktop)                                         |\n| `--sp_lifted_origin_opacity_desktop`         |                                    0.0 | 持ち上げた駒の元のセルの非透明度(desktop)                             |\n| `--sp_lifted_origin_bg_color_touch`          | #{change_color($primary, $alpha: 0.3)} | 持ち上げた駒の背景色(touch)                                           |\n| `--sp_lifted_origin_opacity_touch`           |                                    1.0 | 持ち上げた駒の元のセルの非透明度(touch)                               |\n| `--sp_stand_piece_w`                         | 47px                                   | 駒台のセル(W)                                                         |\n| `--sp_stand_piece_h`                         | 50px                                   | 駒台のセル(H)                                                         |\n| `--sp_stand_piece_rate`                      | 80%                                    | 駒台のセル内の駒占有率                                                |\n| `--sp_piece_box_piece_w`                     | 47px                                   | 駒箱のセル(W)                                                         |\n| `--sp_piece_box_piece_h`                     | 50px                                   | 駒箱のセル(H)                                                         |\n| `--sp_piece_box_piece_rate`                  | 80%                                    | 駒箱のセル内の駒占有率                                                |\n| `--sp_body_width`                            | 100%                                   | 盤(駒台を含む)の幅         FIXME: とる                                |\n| `--sp_body_max_width`                        | none                                   | 盤(駒台を含む)の最大幅     FIXME: とる                                |\n| `--sp_ground_color`                          | transparent                            | グラウンド背景色                                                      |\n| `--sp_ground_image`                          | none                                   | グラウンド背景画像                                                    |\n| `--sp_ground_blur`                           |                                      0 | ぼかし                                                                |\n| `--sp_ground_grayscale`                      |                                      0 | グレースケール                                                        |\n| `--sp_ground_contrast`                       |                                    1.0 | 駒コントラスト                                                        |\n| `--sp_ground_invert`                         |                                      0 | 駒色反転                                                              |\n| `--sp_ground_hue`                            |                                    1.0 | 色相                                                                  |\n| `--sp_ground_saturate`                       |                                    1.0 | 彩度                                                                  |\n| `--sp_ground_brightness`                     |                                    1.0 | 輝度                                                                  |\n| `--sp_ground_sepia`                          |                                      0 | セピア                                                                |\n| `--sp_piece_box_color`                       | rgba(0, 0, 0, 0.2)                     | 駒箱背景                                                              |\n| `--sp_common_gap`                            | 12px                                   | 共通の隙間                                                            |\n| `--sp_turn_slider_block_margin_top`          | 0.75rem                                | 手数スライダーの上マージン                                            |\n| `--sp_board_color`                           | rgba(0, 0, 0, 0.2)                     | 盤の色                                                                |\n| `--sp_board_image`                           | none                                   | 盤画像                                                                |\n| `--sp_board_blur`                            |                                      0 | 盤ぼかし                                                              |\n| `--sp_board_grayscale`                       | 0%                                     | 盤グレースケール                                                      |\n| `--sp_board_contrast`                        |                                    1.0 | 盤コントラスト                                                        |\n| `--sp_board_invert`                          |                                      0 | 盤色反転                                                              |\n| `--sp_board_hue`                             |                                    1.0 | 盤色相                                                                |\n| `--sp_board_saturate`                        |                                    1.0 | 盤彩度                                                                |\n| `--sp_board_brightness`                      |                                    1.0 | 盤輝度                                                                |\n| `--sp_board_sepia`                           |                                      0 | 盤セピア                                                              |\n| `--sp_board_blend`                           | normal                                 | 盤の mix-blend-mode の値                                              |\n| `--sp_board_opacity`                         |                                    1.0 | 非半透明度                                                            |\n| `--sp_board_padding`                         |                                    1.5 | 盤の隅の隙間                                                          |\n| `--sp_board_radius`                          |                                      5 | 盤の隅の丸め度合い                                                    |\n| `--sp_grid_outer_stroke`                     |                                      0 | グリッドの外枠の太さ(紙面風のとき)                                    |\n| `--sp_grid_outer_color`                      | rgba(0, 0, 0, 0.5)                     | グリッド外枠色                                                        |\n| `--sp_grid_color`                            | rgba(0, 0, 0, 0.5)                     | グリッド色                                                            |\n| `--sp_grid_stroke`                           |                                      1 | グリッド太さ                                                          |\n| `--sp_grid_outer_texture_edge_stroke`        |                                      0 | 盤背景の縁取りの太さ(影の影響あり)                                    |\n| `--sp_grid_star_size`                        | 10%                                    | 星の大きさ                                                            |\n| `--sp_grid_star_z_index`                     |                                      0 | 星の z-index (符号の鬼ではタップの邪魔にならないよう -1 にする)       |\n| `--sp_board_dimension_w`                     |                                      9 | 盤のセル数(w) CSS内では未使用                                         |\n| `--sp_board_dimension_h`                     |                                      9 | 盤のセル数(h) TDの縦幅を決めるのに必要                                |\n| `--sp_controller_width`                      |                                    0.5 | コントローラー横幅                                                    |\n| `--sp_controller_width_mobile`               |                                    0.8 | コントローラー横幅(モバイル時)                                        |\n| `--sp_piece_count_gap_right`                 | 62%                                    | 駒数の駒右端からのオフセット(横配置時)                                |\n| `--sp_piece_count_gap_bottom`                | 32%                                    | 駒数の駒底辺からのオフセット(縦配置時)                                |\n| `--sp_piece_count_font_size`                 | 0.75rem                                | 駒数の文字サイズ                                                      |\n| `--sp_piece_count_font_color`                | rgba(0, 0, 0, 0.75)                    | 駒数の文字色                                                          |\n| `--sp_piece_count_bg_color`                  | rgba(255, 255, 255, 0.75)              | 駒数の文字色背景                                                      |\n| `--sp_piece_count_padding`                   | 3px                                    | 駒数のパディング                                                      |\n| `--sp_board_aspect_ratio`                    |                                  1.097 | 盤の横を1.0としたときの縦の比率                                       |\n| `--sp_location_mark_inactive_rate`           |                                    0.5 | 手番ではないときの☗サイズの倍率                                      |\n| `--sp_stand_hover_border_color`              | rgba(0, 0, 0, 0.2)                     | 駒を持って駒箱の上にいるときのボーダー色                              |\n| `--sp_stand_hover_border_stroke`             | 2px                                    | 駒を持って駒箱の上にいるときのボーダーの太さ                          |\n| `--sp_stand_horizontal_hoverable_min_height` |                                      3 | edit_mode + 縦配置 + 駒台に置ける のときの駒台の最低限の高さ(駒N個分) |\n| `--sp_stand_bg_color`                        | hsla(0, 0%, 0%, 0)                     | 駒台の背景色                                                          |\n| `--sp_invisible_dimension`                   |                                      9 | 天王山の付近を求めるための盤の縦辺のセル数                            |\n| `--sp_shadow_offset`                         |                                      2 | 影の右下方法への長さ                                                  |\n| `--sp_shadow_blur`                           |                                      3 | 影の範囲                                                              |\n| `--sp_shadow_color`                          | rgba(0, 0, 0, 0.4)                     | 影の色                                                                |\n"}}]);