<template>
  <section class="m-info">
    <div class="m-container">
      <div>
        <h1 class="m-info__name">Mitsuo Yshara</h1>
        <p class="m-info__description">Soy un Desarrollador Frontend</p>
        <m-btn>Sobre Mí</m-btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.m-info {
  height: 100vh;
  background: #092248;

  display: flex;
  align-items: center;

  &__name {
    font-size: 3.8rem;
  }
  &__description {
    font-size: 1.2rem;
  }
}
</style>