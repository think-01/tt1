<template>
  <div>
    <app/>
  </div>
</template>

<script>
import App from "./App";

export default {
  components: {
    App,
  },

  provide() {
    return {
      magic: () => {
        this.$emit('magic')
      }
    }
  }
}
</script>