<template>
  <div class="container">
    <label :class="{error: !valid}" v-html="label"/>
    <div class="inputcontainer" :class="{error: !valid}">
      <i class="lock" @click="$emit('toggle')">
        <i v-if="disabled" class="gg-lock"/>
        <i v-else class="gg-lock-unlock"/>
      </i>
      <input @blur="$emit('blur')" @focus="$emit('focus')" v-model="val" type="text" placeholder="type me" :disabled="disabled"/>
      <i class="loader">
        <i v-if="pending" class="gg-loader"/>
      </i>
    </div>
    <label/>
  </div>
</template>

<script>
export default {
  props: {
    valid: Boolean,
    pending: Boolean,
    disabled: Boolean,
    value: String
  },
  data() {
    return {
      valueData: this.value
    }
  },
  computed: {
    label() {
      return `${this.valid ? '' : 'invalid'} ${this.pending ? 'validating' : ''} ${this.disabled ? 'disabled' : ''} &nbsp;`
    },
    val: {
      get() {
        return this.valueData
      },
      set(v) {
        this.valueData = v
        this.$emit('input', this.valueData)
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  color: dimgray;
  font-family: Arial;
}

label {
  text-transform: capitalize;
}

.error {
  border-color: red !important;
  color: red;
}

.inputcontainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
  width: auto;
}

input {
  flex-grow: 1;
  font-size: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  outline-style: none;
  border: none;
  width: 100%;
  color: dimgray;
}

input:focus{
  outline-style: none;
}

.lock {
  flex-grow: 0;
  width: 20px;
  height: 20px;
  margin:2px 5px 5px;
  color: dimgray;
}

.loader {
  flex-grow: 0;
  width: 20px;
  height: 20px;
  margin:5px;
}

.gg-lock {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 10px;
  height: 10px;
  border: 2px solid;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom: transparent;
}

.gg-lock::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 10px;
  border-radius: 2px;
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px;
  left: -4px;
  top: 9px
}

.gg-lock-unlock {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 12px;
  height: 6px;
  border: 2px solid;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  border-bottom: transparent;
}

.gg-lock-unlock::after,
.gg-lock-unlock::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute
}

.gg-lock-unlock::after {
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px;
  width: 16px;
  height: 10px;
  border-radius: 2px;
  left: -4px;
  top: 10px
}

.gg-lock-unlock::before {
  width: 2px;
  height: 6px;
  background: currentColor;
  left: -2px;
  top: 4px;
}

.gg-loader {
  position: relative;
  height: 20px;
  width: 20px;
  display: inline-block;
  animation: around 5.4s infinite;
}

@keyframes around {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.gg-loader::after, .gg-loader::before {
  content: "";
  background: white;
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-color: #333 #333 transparent transparent;
  border-style: solid;
  border-radius: 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  animation: around 0.7s ease-in-out infinite;
}

.gg-loader::after {
  animation: around 0.7s ease-in-out 0.1s infinite;
  background: transparent;
}
</style>