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
    <div class="scroll">
      <p>Trabajos</p>
      <div class="scroll__line"></div>
    </div>
  </section>
</template>

<script>
export default {};
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

  display: flex;
  flex-direction: column;
  align-items: center;

  &__line {
    height: 50px;
    border-left: 1px solid #fff;
  }
}
</style>