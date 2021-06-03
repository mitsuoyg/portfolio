<template>
  <footer class="footer">
    <div class="m-container">
      <div class="footer__body">
        <img @click="scrollTop()" src="logo.png" alt="" class="footer__logo" />
        <ul class="networks mt-5">
          <li
            v-for="(network, idx) in $store.state.networks"
            :key="idx"
            class="network link"
          >
            <a :href="network.url" target="blank">{{ network.name }}</a>
          </li>
        </ul>
        <p class="footer__copy mt-8">© 2021 Mitsuo Yshara</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { scrollTop } from "@/helpers/scroll";

export default {
  methods: {
    scrollTop,
  },
};
</script>

<style lang='scss' scoped>
.footer {
  padding: 6%;

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__logo {
    max-width: 80px;
    cursor: pointer;
  }
}
.networks {
  display: flex;
  justify-content: center;
}
.network {
  margin: 10px 24px;
  text-align: center;
  a {
    color: #fff;
  }
}

@media only screen and (max-width: 600px) {
  .networks {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>