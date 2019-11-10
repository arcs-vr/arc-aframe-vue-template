import Vue from 'vue'
import { ArcVueOptionsPlugin } from 'arc-vue-options-plugin'
import { router } from './router.js'
import { config } from './arc-config.js'

import RouterWrapper from './vue/RouterWrapper.vue'

Vue.use(ArcVueOptionsPlugin, config)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^a-/]

const vm = new Vue({
  router: router,
  render (createElement) {
    return createElement(RouterWrapper)
  },
})

vm.$mount(document.getElementById('app'))

