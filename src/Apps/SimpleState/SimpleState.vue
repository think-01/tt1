<template>
  <div>
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
import SmartInput from "@/components/SmartInput";
import inputService, { states, transistions } from "./input.service";


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
      this.inputService.send('UPDATE')

      setTimeout(
          () => this.inputService.send(/^\S+@[^\s@]+\.\S{2,3}$/.test(this.val) ? 'OK' : 'ERROR'),
          1500
      )
    },
    toggle() {
      this.inputService.send('TOGGLE')
    }
  }
}
</script>