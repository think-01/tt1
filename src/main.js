import Vue from 'vue'
Vue.config.productionTip = false

const modules = {
  App1: () => import('./Apps/App1/App1.vue'),
  App2: () => import('./Apps/App2/App2.vue'),
  App3: () => import('./Apps/App3/App3.vue'),
  App4: () => import('./Apps/App4/App4.vue'),
  App5: () => import('./Apps/App5/App5.vue'),
}

var instance;

const mount = App => {
  if(instance){
    instance.$destroy()
    const container = document.querySelector('#app')
    container.innerHTML = '<div id="vue"></div>';
  }

  instance = new Vue({
    el: '#vue',
    components: {
      App
    },
    template: "<app/>"
  })
}



function router(evt) {
  let module = window.location.hash.slice(1) || '/';
  modules[module]().then(App => mount(App.default))
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);