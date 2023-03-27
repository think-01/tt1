import Vue from 'vue'

//import App from './Apps/Trivia/App.vue'
//import App from './Apps/Typing/App.vue'
//import App from './Apps/TypeAliasing/App.vue'
//import App from './Apps/TypeNarrowing/App.vue'
//import App from './Apps/TypeGuards/App.vue'
import App from './Apps/TypePredicates/App.vue'

Vue.config.productionTip = false

export default () => {

  const el = document.getElementById('app')

  if(el !== null) {
    new Vue({
      el,
      components: { App },
      template: '<app/>'
    })
  }

}
