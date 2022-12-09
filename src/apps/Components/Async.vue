<template>
  <div>

    <box>
      <p>
        <component :is="green"/>
        <component :is="orange"/>
      </p>
    </box>

    <box inline-template>
      <p>
        <component :is="green"/>
        <component :is="orange"/>
      </p>
    </box>

  </div>
</template>

<script>
import Box from "./Box";
import GreenDot from "@/components/shared/GreenDot";
import OrangeDot from "@/components/shared/OrangeDot";

export default {
  components: {
    Box,
    GreenDot,
    OrangeDot
  },
  computed: {
    green: () => 'GreenDot',
    orange: () => 'OrangeDot',
  }
}
</script>