<template>
  <section class="m-info">
    <div class="m-container">
      <div>
        <h1 class="m-info__name">Mitsuo Yshara</h1>
        <p class="m-info__description mt-1">Soy un Desarrollador Frontend</p>
        <m-btn class="mt-5"
          >Sobre Mí
          <v-icon right style="font-size: 1rem">mdi-arrow-right</v-icon></m-btn
        >
      </div>
    </div>
    <div @click="scroll()" class="scroll">
      <div class="scroll__body">
        <p>Proyectos</p>
        <div class="arrow"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { scrollTo } from "@/helpers/scroll";

export default {
  methods: {
    scroll() {
      scrollTo("projects");
    },
  },
};
</script>

<style lang='scss' scoped>
.m-info {
  position: relative;
  height: 100vh;
  background: #092248;

  display: flex;
  align-items: center;

  &__name {
    font-size: 4rem;
  }
  &__description {
    font-size: 1.4rem;
  }
}

.scroll {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &__body {
    width: max-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.arrow {
  width: 0;
  height: 40px;
  margin-bottom: 4px;
  border: 1px solid #fff;
  position: relative;
  transition: 0.3s;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    left: -5px;
    width: 1px;
    height: 10px;

    // triangle
    border-top: 10px solid #fff;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  .scroll__body:hover & {
    height: 50px;
  }
}
</style>