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
import { interpret } from 'xstate';
import inputService, {states} from './input.service';


export default {
  components: {
    SmartInput
  },
  data() {
    return {
      inputService: interpret(inputService, { devTools: true }),
      currentState: inputService.initialState,
      value: null
    }
  },
  computed: {
    valid() {
      return !this.currentState.matches(states.errors)
    },
    pending() {
      return this.currentState.matches(states.validating)
    },
    disabled() {
      return this.currentState.matches(states.disabled)
    }
  },
  methods: {
    validate() {
      this.inputService.send('UPDATE', {value: this.value})
    },
    toggle() {
      this.inputService.send('TOGGLE')
    }
  },
  created() {
    this.inputService.onTransition(state => {
      this.currentState = state;
    }).start()
  },
}
</script>