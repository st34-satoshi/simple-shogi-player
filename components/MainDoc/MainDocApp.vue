<template lang="pug">
.MainDocApp
  MainDocHero
  MainDocSummary
  MainDocDemo
  //- MainDocApi
  //- MainDocCredit
</template>

<script>
export default {
  name: "MainDocApp",
}
</script>

<style lang="sass">
@import "../styleSheets/display_size.scss"
.MainDocApp
  +my_mobile
    font-size: 15px

  .content
    word-break: break-all

  .section
    +my_mobile
      margin: 2em 0em 1rem
      padding: 0

  .is_book_like
    --sp_grid_outer_stroke: 2
    --sp_board_padding: 0
    --sp_board_color: transparent
    .BoardField
      border: none
</style>
