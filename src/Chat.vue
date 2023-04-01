<template>
  <div>

    <div class="feed-hero is-warning">
      Top Row
    </div>

    <div class="feed-body">
      <conversation :value="messages"/>
    </div>

    <div class="feed-input">
      <div class="container">
        <h1 class="title">Bottom Row</h1>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import Conversation from "@/chat/Conversation.vue";
  import messages from "./conversation.js"
</script>

<style lang="sass">
@import "scss/main"
</style>
