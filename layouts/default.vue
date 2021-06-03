<template>
  <v-app>
    <globals-header />
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

.link {
  position: relative;
  font-weight: bold;
  user-select: none;
  opacity: 0.7;
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;

    height: 3px;
    width: 0;
    background: #fff;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    opacity: 1;
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
}
</style>
