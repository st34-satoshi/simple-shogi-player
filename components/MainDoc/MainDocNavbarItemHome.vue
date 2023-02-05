<template lang="pug">
a.navbar-item(tag="nuxt-link" href="/")
  b-icon(:icon="icon")
</template>

<script>
export default {
  name: "MainDocNavbarItemHome",
  props: {
    icon: { default: "home",                  },
  },
}
</script>
