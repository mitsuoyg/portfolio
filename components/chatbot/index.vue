<template>
  <div class="chatbot">
    <chatbot-icon
      @onClick="
        $emit('input', true);
        focus();
      "
      class="chatbot__icon"
      :class="{ 'chatbot__icon--disabled': value }"
    />
    <chatbot-chat
      @onClose="$emit('input', false)"
      class="chatbot__chat"
      :class="{ 'chatbot__chat--disabled': !value }"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    focus() {
      let el = document.getElementById("chat-input");
      el.focus();
    },
  },
};
</script>

<style lang='scss' scoped>
$transition: 0.5s;
$spacing: 20px;

.chatbot {
  position: fixed;
  top: $spacing;
  bottom: $spacing;
  left: $spacing;
  right: $spacing;
  pointer-events: none;
  z-index: 1;

  &__icon {
    pointer-events: all;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: $transition;

    &--disabled {
      transform: translateY(30px);
      opacity: 0;
      pointer-events: none;
    }
  }

  &__chat {
    pointer-events: all;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 560px;
    width: 380px;

    border-radius: 12px;
    transition: $transition;

    &--disabled {
      transform: translateY(30px);
      opacity: 0;
      pointer-events: none;
    }
  }
}

@media only screen and (max-width: 600px) {
  $spacing: 0;

  .chatbot {
    top: $spacing;
    bottom: $spacing;
    left: $spacing;
    right: $spacing;

    &__chat {
      height: 100%;
      width: 100%;
      border-radius: 0;
    }
    &__icon {
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>