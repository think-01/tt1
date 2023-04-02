<template>
    <div>
      <button
          class="button"
          aria-controls='example-panel'
          @click='toggled = !toggled'
      >
        toggle {{height}}
      </button>

    <div style="transition: height 0.3s ease; overflow:hidden" :style="{ height: height }">
      <div ref="container">
        <div v-if="toggled">
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
        </div>
        <div v-else>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
          <h1>Your content goes here</h1>
          <p>Put as many Vue or HTML components here as your heart desires</p>
        </div>
      </div>
    </div>

    </div>
</template>

<script setup lang="ts">
import {onMounted, onUpdated, ref} from 'vue'

const toggled = ref(false)
const container = ref<HTMLElement|null>(null)
const height = ref('auto')

const getHeight = () => {
  height.value = container.value === null ? 'auto' : container.value.offsetHeight + 'px'
}

onUpdated(getHeight)
onMounted(getHeight)
</script>
