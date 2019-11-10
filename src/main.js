import Vue      from 'vue'
import {router} from './router.js'

Vue.config.productionTip   = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-sky',
  'a-assets',
  'a-asset-item',
  'a-camera',
  'a-cursor',
  'a-gltf-model'
]

const vm = new Vue({
  template: '<router-view :key="$route.fullPath"/>',
  router: router
})

vm.$mount(document.getElementById('app'))

