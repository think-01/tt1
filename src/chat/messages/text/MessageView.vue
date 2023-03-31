<template>
  <div>
    <input type="text" :value="value.value" @keyup.enter="onEnter"/>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";
import {TextMessageValue} from "./MessageData";

const {value} = defineProps<{value: TextMessageValue}>()
const emit = defineEmits<{ (e: 'input', body: TextMessageValue): void }>()

const onEnter = (e: KeyboardEvent) => {
  emit('input', {
    field: value.field,
    value: (e.target as HTMLInputElement).value
  })
}
</script>
