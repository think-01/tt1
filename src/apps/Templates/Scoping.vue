<template>
  <div>

    <box/>

    <box inline-template>
      <p>inline template <dot/></p>
    </box>

    <box>
      <p>slots contents <dot/></p>
    </box>

  </div>
</template>

<script>
import GreenDot from "@/components/shared/GreenDot";
import OrangeDot from "@/components/shared/OrangeDot";
import Box from "./Box";

export default {
  components: {
    Box,
    dot: OrangeDot
  }
}
</script>