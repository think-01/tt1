<template>
  <div>
    <slot><p>slots fallback<dot/></p></slot>
  </div>
</template>

<script>
import BoxAbstract from "@/components/shared/Box.abstract";
import GreenDot from "@/components/shared/GreenDot";

export default {
  extends: BoxAbstract,
  components: {
    dot: GreenDot
  }
}
</script>