<template>
  <div class="m-container">
    <section class="projects">
      <h2 class="tag--start">projects</h2>
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="project"
        :style="`background-image: url(${project.image})`"
      >
        <div class="project__body">
          <h3 class="project__title">{{ project.title }}</h3>
          <p class="project__description mt-3">{{ project.description }}</p>
          <a :href="project.url" target="_blank">
            <m-btn color="primary" class="mt-3"
              >Visitar
              <v-icon right style="font-size: 1rem">mdi-arrow-right</v-icon>
            </m-btn>
          </a>
        </div>
      </div>
      <h2 class="tag--end">projects</h2>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "MiBot",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium ullam accusamus aspernatur veniam, sunt dolor reprehenderit voluptates optio provident.",
        image: "projects/mibot.png",
        url: "https://mibot.netlify.app/",
      },
      {
        title: "BrainTutor",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium ullam accusamus aspernatur veniam, sunt dolor reprehenderit voluptates optio provident.",
        image: "projects/braintutor.png",
        url: "https://braintutor.app/",
      },
    ],
  }),
};
</script>

<style lang='scss' scoped>
.projects {
  padding: 60px 0;
}

.project {
  position: relative;
  overflow: hidden;
  height: 420px;
  padding: 8%;
  margin: 40px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: rgba(9, 34, 72, 0.7);
  }

  &__body {
    position: relative;
  }
  &__title {
    font-size: 3rem;
  }
  &__description {
  }
}
</style>