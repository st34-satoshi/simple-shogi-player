<template lang="pug">
.MembershipLocation
  MembershipLocationMark(:location="location")
</template>

<script>
import { support } from "../support.js"
import MembershipLocationMark from "./MembershipLocationMark.vue"

export default {
  name: "MembershipLocation",
  mixins: [support],
  props: {
    location: { required: true },
  },
  components: {
    MembershipLocationMark,
  },
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
</style>
