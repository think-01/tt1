<template>
  <div class="sentence m-1" :class="styleClasses">
    <component :is="getMessageRenderer(message)" v-model="message.body" @input="logIt"/>
  </div>
</template>

<script setup lang="ts">
  import { getMessageRenderer } from "./MessageRenderer";

  import {AnyMessageData, MessageAuthors} from "./MessageData";
  const {message} = defineProps<{message: AnyMessageData}>()

  const isBot = message.from === MessageAuthors.BOT
  const isUser = message.from === MessageAuthors.USER

  const styleClasses = {
    fromUser: isUser,
    fromBot: isBot
  }

  const logIt = (e: any) => {
    console.log(e)
  }
</script>
