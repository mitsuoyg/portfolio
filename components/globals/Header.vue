<template>
  <header class="header">
    <div class="header__body">
      <img @click="scrollTop()" src="logo.png" alt="" class="header__logo" />
      <nav>
        <ul>
          <li @click="scrollTo('projects')" class="link">Proyectos</li>
          <li @click="scrollTo('about')" class="link">Sobre Mí</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { scrollTop, scrollTo } from "@/helpers/scroll";

export default {
  methods: {
    scrollTop,
    scrollTo,
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
    padding: 10px 0 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: block;
    height: 100%;
    cursor: pointer;
  }
}

nav {
  ul {
    display: flex;
    li {
      margin-right: 42px;
      cursor: pointer;
    }
  }
}
</style>