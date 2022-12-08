<template>
  <div>

    <box>
      <p>
        send from App
        <button @click="onClick">click Me</button>
      </p>
    </box>

    <box>
      <template scope="me">
        <p>
          send from Box
          <button @click="me.onClick">click Me</button>
        </p>
      </template>
    </box>

    <box inline-template>
      <p>
        send from App
        <button @click="$parent.onClick">click Me</button>
      </p>
    </box>

    <box inline-template>
      <p>
        send from Box
        <button @click="onClick">click Me</button>
      </p>
    </box>

  </div>
</template>

<script>
import Box from "./Box";

export default {
  components: {
    Box
  },
  methods: {
    onClick(e) {
      alert('Click from App')
    }
  }
}
</script>