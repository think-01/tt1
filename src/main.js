import Vue from 'vue'
Vue.config.productionTip = false

import { inspect } from "@xstate/inspect";

inspect({
  iframe: false
});

//import App from './Apps/Trivia/Trivia.vue'
//import App from './Apps/Flags/Flags.vue'
//import App from './Apps/SimpleState/SimpleState.vue'
//import App from './Apps/ActionsState/ActionsState.vue'
import App from './Apps/ContextState/ContextState.vue'
//import App from './Apps/XState/XState.vue'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<app/>'
})
