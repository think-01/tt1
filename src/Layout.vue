<template>
    <div class="container columns m-auto is-fullheight">
      <div v-if="false" class="column is-one-quarter left-column p-0">
        <timeline/>
      </div>
      <div class="column right-column p-0">
        <chat/>
      </div>
    </div>
</template>

<script setup lang="ts">
  import Chat from "@/Chat.vue";
  import Timeline from "@/Timeline.vue";
</script>

<style lang="sass">
@import "scss/main"
</style>
