<template>
  <div>
    <h1>Flags</h1>

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
import {isEmail} from "@/components/utils";

export default {
  components: {
    SmartInput
  },
  data() {
    return {
      valid: true,
      pending: false,
      disabled: false,
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
    }
  },
  methods: {
    validate() {
      this.pending = true
      this.valid = true

      isEmail(this.val).then(r => {
        this.valid = r
        this.pending = false
      })
    },
    toggle() {
      if(this.pending === false && this.valid === true) {
        this.disabled = ! this.disabled
      }
    }
  }
}
</script>