<template>
  <nav class="is-flex is-flex-direction-column">
    <message v-for="(message, index) in value" :key="index" :message="message" />
  </nav>
</template>

<script setup lang="ts">

import {MessageData, MessageValue} from "./messages/MessageData";
import Message from "@/chat/messages/Message.vue";

const {value} = defineProps<{value: MessageData<MessageValue>[]}>()
</script>

