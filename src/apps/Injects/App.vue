<template>
  <div>

    <box>
      <p>
        <button @click="magic">make magic</button>
      </p>
    </box>

    <box inline-template>
      <p>
        <button @click="magic">make magic</button>
      </p>
    </box>

  </div>
</template>

<script>
import Box from "./Box";

export default {
  inject: ['magic'],
  components: {
    Box,
  }
}
</script>