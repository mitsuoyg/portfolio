<template>
  <v-app>
    <v-main>
      <nuxt class="m-app" />
    </v-main>
    <globals-footer />
  </v-app>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.m-app {
  background: #021d44;
}

.tag {
  &--start {
    font-size: 2.4rem;
    &::before {
      content: "<";
    }
    &::after {
      content: ">";
    }
  }
  &--end {
    font-size: 2rem;
    &::before {
      content: "</";
    }
    &::after {
      content: ">";
    }
  }
}
</style>
