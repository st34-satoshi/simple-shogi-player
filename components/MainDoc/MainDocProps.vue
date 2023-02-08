<template lang="pug">
.MainDocProps
  .section
    .container
      MainDocMd(:body="props")
</template>

<script>
import props from "./props.md"

export default {
  name: "MainDocProps",
  data() {
    return {
      props,
    }
  },
}
</script>

<style lang="sass">
@import "./support.sass"
.MainDocProps
</style>
