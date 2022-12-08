<template>
  <div>

    <box>
      <p>
        <button @click="$emit('magic')">make magic</button>
      </p>
    </box>

    <box inline-template>
      <p>
        <button @click="$emit('magic')">make magic</button>
      </p>
    </box>

  </div>
</template>

<script>
import Box from "./Box";

export default {
  components: {
    Box
  }
}
</script>