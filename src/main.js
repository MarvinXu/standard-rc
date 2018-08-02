import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({render: h => h(App)}).$mount('#app')

let a = 1
if (a) console.log(1)
