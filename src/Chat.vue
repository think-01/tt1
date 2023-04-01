<template>
  <div>

    <div class="feed-hero is-warning">
      Top Row
    </div>

    <div class="feed-body">
      <conversation :value="messages"/>
    </div>

    <div class="feed-input">
        <ui-console/>
    </div>

  </div>
</template>

<script setup lang="ts">
  import Conversation from "@/chat/Conversation.vue";
  import messages from "./conversation.js"
  import UiConsole from "@/chat/UIConsole.vue";
</script>

<style lang="sass">
@import "scss/main"
</style>
