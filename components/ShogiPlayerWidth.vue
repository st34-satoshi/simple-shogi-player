<template lang="pug">
.ShogiPlayerWidth
  PromoteSelectModal( v-if="TheSp.dialog_soldier")
  OpDisabledBlock()
  .ShogiPlayerTransformBlock
    ShogiPlayerBody( ref="ShogiPlayerBody")
</template>

<script>
import ShogiPlayerBody from "./ShogiPlayerBody.vue"
import OpDisabledBlock from "./OpDisabledBlock.vue"
import PromoteSelectModal from "./PromoteSelectModal.vue"

import { support } from "./support.js"

export default {
  name: "ShogiPlayerWidth",
  mixins: [support],
  components: {
    ShogiPlayerBody,
    OpDisabledBlock,
    PromoteSelectModal,
  },
}
</script>

<style lang="sass">
@import "./support.sass"
.ShogiPlayerGround
  +defvar(sp_body_width, 100%)      // 盤(駒台を含む)の幅         FIXME: とる

  .ShogiPlayerWidth
    // これがないと OpDisabledBlock の 100% は画面幅になってしまう
    position: relative

  .ShogiPlayerWidth
    width: var(--sp_body_width)

  +my_mobile
    &.is_mobile_fit_on
      .ShogiPlayerWidth
        width: 100%
        max-width: none

  &.is_layer_on
    .ShogiPlayerWidth
      +is_layer_border

.ShogiPlayer
  &.is_debug_mode_on
    .ShogiPlayerWidth
      &:after
        +my_mobile
          content: "(mobile)"
        +my_tablet
          content: "(tablet)"
        +my_desktop
          content: "(desktop)"
        +my_widescreen
          content: "(widescreen)"
        +my_fullhd
          content: "(fullhd)"
</style>
