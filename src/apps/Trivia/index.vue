<template>
  <div>
    <dot-1/>
    <dot-2/>
  </div>
</template>

<script>
import GreenDot from "@/components/shared/GreenDot";
import OrangeDot from "@/components/shared/OrangeDot";

export default {
  components: {
    dot1: GreenDot,
    dot2: OrangeDot
  }
}
</script>