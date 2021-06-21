<template>
  <div class="chat">
    <div style="position: relative">
      <div class="chat__close">
        <v-icon @click="$emit('onClose')">mdi-close</v-icon>
      </div>
    </div>
    <div class="avatar">
      <img src="chatbot/bot.svg" alt="" class="avatar__img" />
    </div>
    <div id="chat-messages" class="messages">
      <div
        v-for="({ message, user }, idx) in messages"
        :key="idx"
        class="message"
        :class="`message--${user === 'user' ? 'me' : 'other'}`"
      >
        <div v-for="({ type, value }, idx_) in message" :key="idx_">
          <p v-if="type === 'text'" class="ma-0">{{ value }}</p>
          <img v-else-if="type === 'image'" :src="value" />
        </div>
      </div>
      <div v-if="isWriting" class="message message--other">
        <div class="message__loading">
          <div class="message__dot" style="--offset: 0s"></div>
          <div class="message__dot" style="--offset: 0.2s"></div>
          <div class="message__dot" style="--offset: 0.4s"></div>
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit()" class="input">
      <v-text-field
        id="chat-input"
        v-model="message"
        placeholder="Escribe tu mensaje"
        autocomplete="off"
        hide-details
        dense
      />
    </form>
  </div>
</template>

<script>
import { scrollBottom } from "@/helpers/scroll";
import { TextToSpeech } from "@/helpers/speech";

export default {
  data: () => ({
    message: "",
    messages: [
      {
        message: [
          {
            type: "text",
            value: "Hola, soy Mibot. ¿En qué puedo ayudarte?",
          },
        ],
        user: "bot",
      },
    ],
    isWriting: false,
    timeWriting: 500,
  }),
  methods: {
    addMessage(message, user) {
      this.messages.push({
        message,
        user,
      });
      setTimeout(() => {
        scrollBottom("chat-messages");
      }, 50);
    },
    async onSubmit() {
      let new_message = this.message;
      this.message = "";
      this.isWriting = true;
      this.addMessage(
        [
          {
            type: "text",
            value: new_message,
          },
        ],
        "user"
      );

      setTimeout(async () => {
        try {
          let res = await this.getResponse(new_message);
          this.addMessage(res, "bot");
          let text = this.blocksToText(res);
          TextToSpeech(text, () => {});
        } catch (error) {}
        this.isWriting = false;
      }, this.timeWriting);
    },
    async getResponse(message) {
      let { data } = await this.$axios.post(
        `https://mibot-service.herokuapp.com/api/agent-response`,
        { agent: "60ad7548ae6e5f4c76e9c5da", message }
      );
      return data.answer;
    },
    blocksToText(blocks) {
      let text = "";
      blocks.forEach(({ type, value }) => {
        if (type === "text") text += `${value}.\n`;
      });
      return text;
    },
  },
};
</script>

<style lang='scss' scoped>
.chat {
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  background: #072147;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}

.avatar {
  height: 160px;
  max-height: 30%;
  padding: 20px;

  &__img {
    display: block;
    height: 100%;
    margin: 0 auto;
  }
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  //   &::-webkit-scrollbar-track {
  //     background: rgb(0, 0, 0);
  //   }
  &::-webkit-scrollbar-thumb {
    background: #01132e;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #01132e;
  }
}

.message {
  overflow: hidden;
  width: max-content;
  max-width: 80%;
  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 8px;
  }

  p {
    padding: 6px 12px;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  &--me {
    background: #204375;
    margin-left: auto;
  }
  &--other {
    background: #1e3250;
  }

  &__loading {
    padding: 18px 12px 10px;
    display: flex;
  }
  &__dot {
    width: 6px;
    height: 6px;
    margin: 0 2px;
    background: #949494;
    border-radius: 50%;
    animation: blink 1s linear infinite var(--offset);
  }
}

.input {
  padding: 10px;
}

// ANIMATION
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>