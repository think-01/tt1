<template>
  <div>
    <h1>ActionsState</h1>

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
      inputService,
      val: ''
    }
  },
  computed: {
    value: {
      get() {
        return this.val
      },
      set(v) {
        this.val = v
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
      this.inputService.send('UPDATE', this.val)
    },
    toggle() {
      this.inputService.send('TOGGLE')
    }
  }
}
</script>