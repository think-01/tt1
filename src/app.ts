import Vue from 'vue'

import App from './Apps/TypePredicates/App.vue'

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

/*
const a = 1
const b = {}
const c = []
const d = {a:1, b:'b'}
const e = [1, 'x', {a:1, b:'b'}]

b = { x:1}
d.a = 'x'
*/
