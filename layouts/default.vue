<template>
  <v-app>
    <v-main>
      <nuxt class="m-app" />
    </v-main>
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
    &::before {
      content: "<";
    }
    &::after {
      content: ">";
    }
  }
  &--end {
    &::before {
      content: "</";
    }
    &::after {
      content: ">";
    }
  }
}
</style>
