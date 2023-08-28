<template>
  <div>
    <h1>ContextState</h1>

    <smart-input
        :valid="valid"
        :pending="pending"
        :disabled="disabled"

        @blur="validate"
        @toggle="toggle"

        v-model="value"
    />
  </div>
</template>

<script>
import SmartInput from "@/components/SmartInput.vue";
import inputService, { states } from "./input.service";


export default {
  components: {
    SmartInput
  },
  data() {
    return {
      inputService
    }
  },
  computed: {
    value: {
      get() {
        return this.inputService.context
      },
      set(v) {
        this.inputService.context = v
      }
    },
    valid() {
      return this.inputService.currentState !== states.errors
    },
    pending() {
      return this.inputService.currentState === states.validating
    },
    disabled() {
      return this.inputService.currentState === states.disabled
    }
  },
  methods: {
    validate() {
      this.inputService.send('UPDATE')
    },
    toggle() {
      this.inputService.send('TOGGLE')
    }
  }
}
</script>