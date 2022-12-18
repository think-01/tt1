import Vue from 'vue'
Vue.config.productionTip = false

import { inspect } from "@xstate/inspect";

inspect({
  iframe: false
});
/*
import App1 from './Apps/Trivia/Trivia.vue'
import App2 from './Apps/Flags/Flags.vue'
import App3 from './Apps/SimpleState/SimpleState.vue'
import App4 from './Apps/ActionsState/ActionsState.vue'
import App5 from './Apps/ContextState/ContextState.vue'
import App6 from './Apps/XState/XState.vue'
import App7 from './Apps/RobotState/RobotState.vue'
import App8 from './Apps/XStateChained/XStateChained.vue'
import App9 from './Apps/XStateActors/XStateActors.vue'
*/

const modules = {
  Trivia: () => import('./Apps/Trivia/Trivia.vue'),
  Flags: () => import('./Apps/Flags/Flags.vue'),
  SimpleState: () => import('./Apps/SimpleState/SimpleState.vue'),
  ActionsState: () => import('./Apps/ActionsState/ActionsState.vue'),
  ContextState: () => import('./Apps/ContextState/ContextState.vue'),
  XState: () => import('./Apps/XState/XState.vue'),
  RobotState: () => import('./Apps/RobotState/RobotState.vue'),
  XStateChained: () => import('./Apps/XStateChained/XStateChained.vue'),
}

const mount = App => new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<app/>'
})

modules['Flags']().then(App => mount(App.default))

