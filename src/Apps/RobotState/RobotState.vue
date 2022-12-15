<template>
  <div>
    <h1>RobotState</h1>
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
import inputService, {states} from './input.service';
import {interpret} from "robot3";


export default {
  components: {
    SmartInput
  },
  data() {
    return {
      inputService: null,
      currentState: null,
      value: null
    }
  },
  computed: {
    currentState() {
      return this.inputService.machine.current
    },
    valid() {
      return this.currentState !== states.errors
    },
    pending() {
      return this.currentState === states.validating
    },
    disabled() {
      return this.currentState === states.disabled
    }
  },
  methods: {
    validate() {
      this.inputService.send({type: 'UPDATE', value: this.value})
    },
    toggle() {
      this.inputService.send('TOGGLE')
    }
  },
  created() {
    this.inputService = interpret(inputService, () => {
      this.currentState = this.inputService.machine.current
    })

    this.currentState = this.inputService.machine.current
  },
}
</script>