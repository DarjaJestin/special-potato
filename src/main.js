import Vue from 'vue'  // Add vue.js
import App from './App.vue' //start file application on

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
