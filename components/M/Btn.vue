<template>
  <button v-on="inputListeners" :class="classes">
    <slot />
    <span class="m-btn__loader" :class="{ 'm-btn__loader--active': loading }"></span>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "m-btn": true,
        [`m-btn--${this.color}`]: true,
        "m-btn--loading": this.loading,
      };
    },
    // Source: https://es.vuejs.org/v2/guide/components-custom-events.html
    inputListeners() {
      var vm = this;
      var listeners = Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit("input", event.target.value);
        },
      });
      return listeners;
    },
  },
};
</script>

<style>
</style>