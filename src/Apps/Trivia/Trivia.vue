<template>
  <div>
    <smart-input :valid="true" :pending="false" :disabled="false"/>
    <smart-input :valid="true" :pending="false" :disabled="true"/>
    <smart-input :valid="true" :pending="true" :disabled="false"/>
    <smart-input :valid="true" :pending="true" :disabled="true"/>

    <smart-input :valid="false" :pending="false" :disabled="false"/>
    <smart-input :valid="false" :pending="false" :disabled="true"/>
    <smart-input :valid="false" :pending="true" :disabled="false"/>
    <smart-input :valid="false" :pending="true" :disabled="true"/>
  </div>
</template>

<script>
import SmartInput from "@/components/SmartInput";

export default {
  components: {
    SmartInput
  }
}
</script>