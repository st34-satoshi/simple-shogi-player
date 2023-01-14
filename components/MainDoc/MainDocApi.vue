<template lang="pug">
.MainDocApi
  MainDocMainNavbar
    template(slot="brand")
      MainDocNavbarItemHome
      b-navbar-item(tag="div").has-text-weight-bold API
  .section
    .container
      .columns
        .column
          ShogiPlayer(
            ref="api_sp"
            sp_summary="is_summary_off"
            :sp_board_cell_pointerdown_user_handle="sp_board_cell_pointerdown_user_handle"
            :sp_board_cell_left_click_user_handle="sp_board_cell_left_click_user_handle"
            sp_debug_mode="is_debug_mode_off"
          )
      .columns
        .column
          .buttons.is-centered
            b-button(label="盤面をクリア" @click="run_api_board_clear")
            b-button(label="初期配置" @click="run_api_board_turn_set")
            b-button(label="7五角配置" @click="run_put_75_kaku")
            b-button(label="後手3四竜配置" @click="run_put_34_ryu")
            b-button(label="反転" @click="run_api_flip_toggle")
      .columns
        .column
          MainDocMd(:body="api_md")
</template>

<script>
import api_md from "./api.md"
import { Soldier } from "../models/soldier.js"
import { Place } from "../models/place.js"
import { Location } from "../models/location.js"
import { Piece } from "../models/piece.js"

export default {
  name: "MainDocApi",
  data() {
    return {
      api_md,

    }
  },

  methods: {
    sp_board_cell_left_click_user_handle(place, event) {
      this.$buefy.toast.open({message: `${place.kanji_human}のセルをクリック`, queue: false})
      return true
    },
    sp_board_cell_pointerdown_user_handle(place, event) {
      this.$buefy.toast.open({message: `${place.kanji_human}のセルをクリック(押した瞬間)`, queue: false})
      return true
    },

    run_api_board_clear()   { this.$refs.api_sp.api_board_clear()   },
    run_api_board_turn_set()   { this.$refs.api_sp.api_board_turn_set(0)   },
    run_api_flip_toggle()   { this.$refs.api_sp.api_flip_toggle();console.log('flip')   },
    run_put_75_kaku(){
      const soldier = new Soldier({
        place: new Place([9-7, 5-1]),
        piece: Piece.fetch("B"),
        promoted: false,
        location: Location.fetch("black")
      })
      this.$refs.api_sp.api_place_on(soldier)
    },
    run_put_34_ryu(){
      const soldier = new Soldier({
        place: new Place([9-3, 4-1]),
        piece: Piece.fetch("R"),
        promoted: true,
        location: Location.fetch("white")
      })
      this.$refs.api_sp.api_place_on(soldier)
    },

  },
}
</script>

<style lang="sass">
@import "./support.sass"
.MainDocApi
</style>
