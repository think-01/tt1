import Vue from 'vue'
import App from './Apps/App.vue'

Vue.config.productionTip = false

export default () => {

  const el = document.getElementById('app')

  if(el !== null) {
    new Vue({
      el,
      components: {
        App
      },
      template: '<app/>'
    })
  }

}
