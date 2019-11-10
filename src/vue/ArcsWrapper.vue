<template>
    <a-scene :arc-system="arcSystemOptions"
             @arc-remote-connected="remoteConnected = true"
             @arc-remote-disconnected="remoteConnected = false"
             @loaded.stop.self.once="sceneLoaded = true"
             light="defaultLightsEnabled: false"
             loading-screen="enabled: false;"
             cubemap-environment="background: true;"
             ref="scene"
             renderer="
                antialias: true;
                colorManagement: true;
                alpha: false;
                physicallyCorrectLights: true;
             "
    >
        <assets @loaded="assetsLoaded = true"/>

        <app :remote-connected="remoteConnected"
             @loaded="appLoaded = true"
             v-if="assetsLoaded"
        />

        <camera-rig/>

        <arc-connect-button @arc-connect="showModal = true"></arc-connect-button>

        <transition appear
                    mode="out-in"
                    name="fade"
        >
            <keep-alive>
                <arc-connect-modal :remote-url="remoteUrl"
                                   @arc-connect="connect"
                                   @close="showModal = false"
                                   v-if="showModal"
                ></arc-connect-modal>
            </keep-alive>
        </transition>

        <splash-screen :show="showSplash"/>
    </a-scene>
</template>

<script>
  import 'aframe/dist/aframe-v1.0.4.js'
  import '../bvh-raycasting.js'

  import '../aframe/cubemap-environment-system.js'
  import 'arc-aframe-system'

  import ArcConnectButton from 'arc-vue-remotes/src/components/ArcConnectButton.vue'
  import ArcConnectModal from 'arc-vue-remotes/src/components/ArcConnectModal.vue'

  import Assets from './Assets.vue'
  import App from './App.vue'
  import CameraRig from './CameraRig.vue'
  import SplashScreen from './SplashScreen.vue'

  export default {
    name: 'arc-wrapper',

    components: {
      CameraRig,
      ArcConnectButton,
      ArcConnectModal,
      Assets,
      App,
      SplashScreen
    },

    data () {
      return {
        showModal: false,
        appLoaded: false,
        assetsLoaded: false,
        sceneLoaded: false,
        remoteConnected: false,
      }
    },

    methods: {

      /**
       * Start the connection to the MQTT Server
       */
      connect (deviceName) {
        this.$refs.scene.emit('arcs-connect', {
          deviceName: deviceName
        })

        this.showModal = false
      }
    },

    computed: {

      arcSystemOptions () {
        return `
                host: ${this.$arcOptions.host};
                port: ${this.$arcOptions.port};
                protocol: ${this.$arcOptions.protocol};
                app: ${this.$arcOptions.app};
              `
      },

      /**
       * Get the remote URL from the current host
       * @return {string}
       */
      remoteUrl () {
        const path = this.$router.resolve({name: this.routeRemote}).href
        return `${window.location.protocol}//${window.location.host}${path}`
      },

      /**
       * Whether to show the loading/splash screen
       * @return {boolean}
       */
      showSplash () {
        return !this.sceneLoaded && !this.assetsLoaded
      }
    }
  }
</script>

<style lang="scss"
       scoped
>
    @import '~arc-cd/src/variables';

    .splash {
        align-items: center;
        backface-visibility: hidden;
        background-color: $theme-dark;
        color: $theme-light;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        left: 0;
        perspective: 1000px;
        position: fixed;
        top: 0;
        transform: translateZ(0);
        width: 100%;
        z-index: 10000;
    }
</style>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    body,
    html {
        margin: 0;
        padding: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .4s ease;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .a-enter-ar-button {
        display: none;
    }
</style>
