<template>
  <div>{{value}}</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {StaticMessageValue} from "./MessageData";
const {value} = defineProps<{value: StaticMessageValue}>()
</script>
