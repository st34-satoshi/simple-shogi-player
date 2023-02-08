<template lang="pug">
.MainDocCssVariable
  .section
    .container
      MainDocMd(:body="css_variable")
</template>

<script>
import css_variable from "./css_variable.md"

export default {
  name: "MainDocCssVariable",
  data() {
    return {
      css_variable,
    }
  },
}
</script>

<style lang="sass">
@import "./support.sass"
.MainDocCssVariable
</style>
