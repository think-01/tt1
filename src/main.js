import Vue from 'vue'
Vue.config.productionTip = false

import App from "@/apps/Templates/Scoping";
//import App from "@/apps/Components/Static";
//import App from "@/apps/Components/Async";
//import App from "@/apps/Methods/Events";
//import App from "@/apps/Methods/Methods";
//import App from "@/apps/Injects/Provider";

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<app/>'
})
