<template>
  <header class="header">
    <div class="header__body">
      <img @click="scrollTop()" src="logo.png" alt="" class="header__logo" />
    </div>
  </header>
</template>

<script>
import { scrollTop } from "@/helpers/scroll";

export default {
  methods: {
    scrollTop,
  },
};
</script>

<style lang='scss' scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 1;

  &__body {
    max-width: 1400px;
    height: 78px;
    margin: 0 auto;
    padding: 10px;
  }

  &__logo {
    display: block;
    height: 100%;
    cursor: pointer;
  }
}
</style>