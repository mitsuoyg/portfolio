<template>
  <globals-section id="about" title="about" color="#021d44">
    <div class="about">
      <div>
        <p>Soy Mitsuo Yshara, un desarrollador web front-end.</p>
        <p>
          Me gusta crear cosas y experimentar con nuevas tecnologías web, por lo
          que siempre me gusta estar actualizado.
        </p>
        <p>
          Busco soluciones creativas front-end, poniéndome en el papel del
          usuario para crear interfaces inteligentes y de utilidad.
        </p>
      </div>
      <div class="networks">
        <div v-for="(network, idx) in networks" :key="idx" class="network">
          <v-icon class="network__icon">{{ network.icon }}</v-icon>
        </div>
      </div>
    </div>
  </globals-section>
</template>

<script>
export default {
  data: () => ({
    networks: [
      {
        name: "Facebook",
        icon: "mdi-facebook",
      },
      {
        name: "Twitter",
        icon: "mdi-twitter",
      },
      {
        name: "Linkedin",
        icon: "mdi-linkedin",
      },
      {
        name: "Github",
        icon: "mdi-github",
      },
    ],
  }),
};
</script>

<style lang='scss' scoped>
.about {
  padding: 80px 0;
  font-size: 1.1rem;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
}

$network-size: 100px;

.networks {
  margin: 0 auto;
  display: grid;
  grid-template-columns: $network-size $network-size;
  grid-template-rows: $network-size $network-size;
  align-items: center;
}
.network {
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
    font-size: 4rem;
    cursor: pointer;
    color: #adadad;

    &:hover {
      color: #fff;
    }
  }
}

@media only screen and (max-width: 960px) {
  .about {
    grid-template-columns: 1fr;
  }
  .networks {
    display: none;
  }
}
</style>