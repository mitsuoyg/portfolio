<template>
  <section class="section" :style="`background: ${color}`">
    <div class="m-container">
      <h2 class="tag--start">{{ title }}</h2>
      <div class="section__body">
        <slot></slot>
      </div>
      <h2 class="tag--end">{{ title }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "section",
    },
    color: {
      type: String,
      default: "#021d44",
    },
  },
};
</script>

<style lang='scss' scoped>
.section {
  padding: 100px 0;

  &__body {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    margin: 12px 0;
    padding: 1px 0 1px 6%;
  }
}
</style>