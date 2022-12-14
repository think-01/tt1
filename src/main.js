import Vue from 'vue'
Vue.config.productionTip = false

import App from './Apps/App.vue'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<app/>'
})
