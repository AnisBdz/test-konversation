import Vue from 'vue'
import App from './App.vue'
import Arabic from './Arabic.vue'
import English from './English.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/english', component: English },
        { path: '/arabic' , component: Arabic  }
    ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
