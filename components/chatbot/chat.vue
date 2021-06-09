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
    </div>
    <form @submit.prevent="onSubmit()" class="input">
      <v-text-field
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
      this.addMessage(
        [
          {
            type: "text",
            value: new_message,
          },
        ],
        "user"
      );

      let res = await this.getResponse(new_message);
      this.addMessage(res, "bot");
    },
    async getResponse(message) {
      let { data } = await this.$axios.post(
        `https://mibot-service.herokuapp.com/api/agent-response`,
        { agent: "60ad7548ae6e5f4c76e9c5da", message }
      );
      return data.answer;
    },
  },
};
</script>

<style lang='scss' scoped>
.chat {
  overflow: hidden;
  height: 560px;
  width: 380px;
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
  height: 30%;
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
}

.input {
  padding: 10px;
}
</style>