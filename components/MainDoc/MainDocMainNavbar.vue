<template lang="pug">
b-navbar.MainDocMainNavbar(v-bind="navbar_attrs" v-on="$listeners")
  template(slot="brand")
    slot(name="brand")
  template(slot="start")
    slot(name="start")
  template(slot="end")
    slot(name="end")
</template>

<script>
export default {
  name: "MainDocMainNavbar",
  computed: {
    navbar_attrs() {
      return {
        "type": "is-primary",
        "mobile-burger": false,
        "wrapper-class": "container",
        "spaced": true,
        ...this.$attrs,
      }
    },
  },
}
</script>

<style lang="sass">
@import "../styleSheets/display_size.scss"
.navbar.MainDocMainNavbar
  +my_mobile
    // さらにモバイル時はさらに上下の隙間がもったいないので is-spaced の上下を無効にする
    padding-top: 0
    padding-bottom: 0
    // モバイルだと左右隙間が開きすぎているように見えるのでもっと端に寄せる
    // 微調整ではなく0にしたい
    padding-left: 12px
    padding-right: 12px
</style>
