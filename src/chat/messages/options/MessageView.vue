<template>
  <div>
    <p v-for="option in props.value.options"><input type="radio" :name="props.value.field" :value="option.name" v-model="option.value" @change="e => onEnter(e)"/> {{option.name}}</p>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import { OptionsMessageValue } from "./MessageData";

const props = defineProps<{value: OptionsMessageValue}>()
const emit = defineEmits<{ (e: 'input', body: OptionsMessageValue): void }>()

const onEnter = (e: unknown) => {

}
</script>
