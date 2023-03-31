<template>
  <div :class="styleClasses">
    <component :is="getMessageRenderer(message)" v-model="message.body" @input="logIt"/>
  </div>
</template>

<script setup lang="ts">
  import {defineProps} from "vue";
  import { getMessageRenderer } from "./MessageRenderer";

  import {AnyMessageData, MessageAuthors} from "./MessageData";
  const {message} = defineProps<{message: AnyMessageData}>()

  const styleClasses = {
    fromUser: message.from === MessageAuthors.USER,
    fromBot: message.from === MessageAuthors.BOT
  }

  const logIt = (e: any) => {
    console.log(e)
  }
</script>

<style scoped>
  .fromUser {
    background-color: #e6e6e6;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    text-align: right;
  }
  .fromBot {
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    text-align: left;
  }
</style>
