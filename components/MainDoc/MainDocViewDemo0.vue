<template lang="pug">
.MainDocViewDemo0.column
  b-message(type="is-info")
    | 将棋盤表示
  ShogiPlayer(
    :sp_body="kifu_book_info.sp_body"
    :sp_turn="4"
    :sp_player_info="sp_player_info"
    sp_bg_variant="is_bg_variant_a"
    sp_pi_variant="is_pi_variant_d"
  )
</template>

<script>
export default {
  name: "MainDocViewDemo0",
  data() {
    return {
      kifu_book_info: "",
      sp_player_info: {
        black: { name: "先手" },
        white: { name: "後手" },
      },
    }
  },
}
</script>

<style lang="sass">
</style>
