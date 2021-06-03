<template>
  <section class="m-info">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="m-container">
      <div class="m-info__body">
        <h1 class="m-info__name">Mitsuo Yshara</h1>
        <p class="m-info__description mt-1">Soy un Desarrollador Frontend</p>
        <m-btn @click="scrollTo('about')" class="mt-5"
          >Sobre Mí
          <v-icon right style="font-size: 1rem">mdi-arrow-right</v-icon></m-btn
        >
      </div>
      <div @click="scrollTo('projects')" class="scroll">
        <div class="scroll__body">
          <p>Proyectos</p>
          <div class="arrow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { scrollTo } from "@/helpers/scroll";

export default {
  methods: { scrollTo },
};
</script>

<style lang='scss' scoped>
.m-info {
  position: relative;
  overflow: hidden;
  height: 100vh;

  display: flex;
  align-items: center;

  &__body {
    position: relative;
  }
  &__name {
    font-size: 4rem;
  }
  &__description {
    font-size: 1.4rem;
  }
}

.bg {
  animation: slide 9s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #021d44 50%, #092248 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
}
.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 12s;
}
.bg3 {
  animation-duration: 15s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
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