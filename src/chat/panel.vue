<template>
  <div>
    <message v-for="(message, index) in messages" :key="index" :message="message" />
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {MessageAuthors, MessageData, MessageValue} from "./messages/MessageData";
import Message from "@/chat/messages/Message.vue";

const messages = ref<MessageData<MessageValue>[]>([
    {
      from: MessageAuthors.BOT,
      body: "Hello, I'm a bot!"
    },
    {
      from: MessageAuthors.USER,
      body: {
        field: "slug",
        value: 'ala ma kota'
      }
    },
    {
      from: MessageAuthors.USER,
      body: {
        field: "slug",
        options: [
          {
            name: 'ala ma kota',
            value: true
          },
          {
            name: 'ala ma psa',
            value: false
          },
          {
            name: 'ala ma rybki',
            value: false
          }
        ]
      }
    }
  ])
</script>

