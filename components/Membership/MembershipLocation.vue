<template lang="pug">
.MembershipLocation
  .PlayerName(v-html="player_name" v-if="player_name")
</template>

<script>
import { support } from "../support.js"

export default {
  name: "MembershipLocation",
  mixins: [support],
  props: {
    location: { required: true },
  },
  methods: {
    player_attr_of(key) {
      if (this.one_side_info) {
        return this.one_side_info[key]
      }
    },
  },
  computed: {
    one_side_info() {
      if (this.TheSp.sp_player_info) {
        return this.TheSp.sp_player_info[this.location.key]
      }
    },
    player_name()  { return this.player_attr_of("name")  },
  }
}
</script>

<style lang="sass">
@import "../support.sass"
.ShogiPlayerGround
  &.is_layer_on
    .MembershipLocation
      +is_layer_border
.ShogiPlayerGround
  +defvar(sp_board_aspect_ratio, 1.097) // 盤の横を1.0としたときの縦の比率
  .MembershipLocation
    width: 20%
    aspect-ratio: 2 / var(--sp_board_aspect_ratio); // width / height.
.PlayerName
  overflow: hidden
  word-break: break-all
  max-height: 100%
</style>
