<template lang="pug">
.hero.is-primary.is-medium.MainDocHero
  .hero-head
    b-navbar(:mobile-burger="false" wrapper-class="container")

  .hero-body
    .container.has-text-centered
      h1.title
        | shogi-player

  .hero-foot
    nav.tabs
      .container
        ul
          li: a(href="#summary") 概要
          li: a(href="#examples") デモ
          li: nuxt-link(:to="{name: 'props'}") コンポーネント引数一覧
          li: nuxt-link(:to="{name: 'options'}") 引数とイベントチェック
          li: nuxt-link(:to="{name: 'api'}") API
          li: nuxt-link(:to="{name: 'css-customize'}") CSS変数一覧
          li: nuxt-link(:to="{name: 'editor'}") スタイルエディタ
          li: nuxt-link(:to="{name: 'credit'}") クレジット
          template(v-if="development_p")
            li: nuxt-link(:to="{name: 'test-sp_device'}") sp_device テスト
            li: nuxt-link(:to="{name: 'test-test_foul'}") 反則判定
            li: nuxt-link(:to="{name: 'test-test_sound_timing'}") 音タイミング
</template>

<script>
export default {
  name: "MainDocHero",
  data() {
    return {
    }
  },
}
</script>

<style lang="sass">
@import "./support.sass"
.MainDocHero
  .hero-foot
    li:not(:first-child)
      margin-left: 0.25rem
</style>
