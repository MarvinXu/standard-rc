import Vue from 'vue'
import App from './App.vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Vue.config.productionTip = false

new Vue({render: h => h(App)}).$mount('#app')

let a = 1
if (a) console.log(1)

Raven
  .config('https://ce1cc7e243814050b88e6d3176bbf933@sentry.zhuanzhuan.com/14', {
    release: '0.0.1'
  })
  .addPlugin(RavenVue, Vue)
  .install()
