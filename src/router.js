import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ArcsWrapper       = () => import(/* webpackChunkName: "aframe-app" */ './vue/ArcsWrapper.vue')
const ArcRemoteSelector = () => import(/* webpackChunkName: "remote-selector" */ 'arc-remotes/src/components/ArcRemoteSelector.vue')
const ArcDesktop        = () => import(/* webpackChunkName: "arc-desktop" */ 'arc-remotes/src/components/ArcDesktop.vue')
const ArcSmartphone     = () => import(/* webpackChunkName: "arc-smartphone" */ 'arc-remotes/src/components/ArcSmartphone.vue')

const arcConfig = {
  app: 'arc-vue-template',
  protocol: 'wss',
  host: 'test.mosquitto.org',
  port: 8081,
}

export const router = new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      component: ArcsWrapper,
      props: {
        routeRemote: 'remote-selector'
      },
      name: 'index',
    },
    {
      path: '/remote',
      component: ArcRemoteSelector,
      props: {
        routeDesktop: 'remote-desktop',
        routeSmartphone: 'remote-smartphone',
      },
      name: 'remote-selector'
    },
    {
      path: '/remote/desktop',
      component: ArcDesktop,
      props: arcConfig,
      name: 'remote-desktop',
    },
    {
      path: '/remote/smartphone',
      component: ArcSmartphone,
      props: arcConfig,
      name: 'remote-smartphone',
    },
  ],
})
