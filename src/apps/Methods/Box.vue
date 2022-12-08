<template>
  <div>
    <slot v-bind="{onClick}"><p>slots fallback</p></slot>
  </div>
</template>

<script>
import BoxAbstract from "@/components/shared/Box.abstract";
import GreenDot from "@/components/shared/GreenDot";
import OrangeDot from "@/components/shared/OrangeDot";

export default {
  extends: BoxAbstract,
  methods: {
    onClick() {
      alert('Click from Box')
    }
}
}
</script>