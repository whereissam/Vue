import Vue from 'vue'
import App from './App.vue'
import name from './Names.vue'

Vue.component('Name', name )

new Vue({
  el: '#app',
  render: h => h(App)
})
 