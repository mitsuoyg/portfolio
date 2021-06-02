<template>
  <div class="m-container">
    <section class="projects">
      <h2 class="tag--start">proyectos</h2>
      <div class="projects__body">
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
            <a :href="project.url" target="_blank">
              <m-btn color="primary" class="mt-3"
                >Visitar
                <v-icon right style="font-size: 1rem">mdi-arrow-right</v-icon>
              </m-btn>
            </a>
          </div>
        </div>
      </div>
      <h2 class="tag--end">proyectos</h2>
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
$project-background: rgba(2, 29, 68, 0.7);

.projects {
  padding: 100px 0;

  &__body {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    margin: 12px 0;
    padding: 1px 0 1px 6%;
  }
}

.project {
  position: relative;
  overflow: hidden;
  height: 420px;
  padding: 10%;
  margin: 80px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

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