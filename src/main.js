import Vue from 'vue'
Vue.config.productionTip = false

import { inspect } from "@xstate/inspect";

inspect({
  iframe: false
});

//import App from './Apps/Trivia/Trivia'
//import App from './Apps/Flags/Flags'
//import App from './Apps/SimpleState/SimpleState'
//import App from './Apps/ActionsState/ActionsState'
//import App from './Apps/ContextState/ContextState'
import App from './Apps/XState/XState'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<app/>'
})
