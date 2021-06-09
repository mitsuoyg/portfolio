<template>
  <div class="icon" @click="$emit('onClick')">
    <img src="chatbot/bot.svg" alt="" class="icon__img" />
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
$size: 64px;

.icon {
  height: 64px;
  width: 64px;
  background: rgba(255, 255, 255, 0);
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>