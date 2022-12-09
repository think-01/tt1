<template>
  <div>

    <box>
      <p>
        <green-dot/>
        <orange-dot/>
      </p>
    </box>

    <box inline-template>
      <p>
        <green-dot/>
        <orange-dot/>
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
  }
}
</script>