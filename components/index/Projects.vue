<template>
  <globals-section id="projects" title="projects" color="#092248">
    <div
      v-for="(project, idx) in projects"
      :key="idx"
      class="project"
      :style="`background-image: url(${project.image})`"
    >
      <div class="project__mask"></div>
      <div class="project__body">
        <h3 class="project__title">{{ project.title }}</h3>
        <p class="project__description mt-3">{{ project.description }}</p>
        <a v-if="project.url" :href="project.url" target="_blank">
          <m-btn color="primary" class="mt-3 mr-3"
            >Visitar
            <v-icon right style="font-size: 1rem">mdi-arrow-right</v-icon>
          </m-btn>
        </a>
        <m-btn
          v-if="project.demo"
          @click="project.demo()"
          color="secondary"
          class="mt-3"
          >Probar<v-icon right style="font-size: 1rem" class="mb-1 ml-3"
            >mdi-robot</v-icon
          >
        </m-btn>
      </div>
    </div>
  </globals-section>
</template>

<script>
export default {
  data: () => ({
    projects: [],
  }),
  mounted() {
    this.projects = [
      {
        title: "Mi Portafolio",
        description:
          "Donde te encuentras ahora :). Un sitio web donde muestro un poco de mis proyectos y conocimientos.",
        image: "projects/mibot.png",
      },
      {
        title: "BrainTutor",
        description:
          "Braintutor es una plataforma para crear clases virtuales y chatbots educativos. Monitorear el aprendizaje de los alumnos y brindarles una enseñanza personalizada.",
        image: "projects/braintutor.png",
        url: "https://braintutor.app/",
      },
      {
        title: "MiBot",
        description:
          "MiBot es una plataforma (en desarrollo) para la creación e integración de QA bots. Enfocado principalmente en su facilidad de entendimiento y uso.",
        image: "projects/mibot.png",
        url: "https://mibot.netlify.app/",
        demo: () => {
          this.$store.commit("setChatbot", true);
        },
      },
    ];
  },
};
</script>

<style lang='scss' scoped>
$project-background: rgba(2, 29, 68, 0.75);

.project {
  position: relative;
  overflow: hidden;
  height: 480px;
  padding: 10%;
  margin: 100px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 6px 40px rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: $project-background;
  }
  &:hover {
    .project__body {
      transform: scale(1.04);
    }
    .project__mask {
      width: 100%;
    }
  }

  &__mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;

    background: $project-background;
    transition: 0.5s;
    transition-delay: 0.1s;
  }
  &__body {
    position: relative;
    transition: 0.3s transform;
    transition-delay: 0.3s;
  }
  &__title {
    font-size: 3rem;
  }
  &__description {
    font-size: 1.1rem;
  }
}
</style>