<template>
  <div>
    <slot><p>slots fallback</p></slot>
  </div>
</template>

<script>
import BoxAbstract from "@/components/shared/Box.abstract";
import GreenDot from "@/components/shared/GreenDot";
import OrangeDot from "@/components/shared/OrangeDot";

export default {
  inject: ['magic'],
  extends: BoxAbstract
}
</script>