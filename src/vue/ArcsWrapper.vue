<template>
    <a-scene @click.capture="showModal = false"
             @loaded.self="sceneLoaded = true"
             loading-screen="enabled: false;"
             ref="scene"
             renderer="
                antialias: true;
                physicallyCorrectLights: true;
                colorManagement: false;
             "
    >
        <transition mode="out-in"
                    name="fade"
        >
            <div class="splash"
                 v-if="showSplash"
            >
                <h1>ARCS Demo</h1>
                <arc-logo></arc-logo>
                <p>Loading…</p>
            </div>
        </transition>

        <aframe-assets @loaded="assetsLoaded = true"></aframe-assets>

        <aframe-app></aframe-app>

        <aframe-camera-rig :app="app"
                           :host="host"
                           :protocol="protocol"
                           :port="port"
        ></aframe-camera-rig>

        <arc-connect-button @arc-connect="showModal = true"></arc-connect-button>
        <transition appear
                    mode="out-in"
                    name="fade"
        >
            <arc-connect-modal :remote-url="remoteUrl"
                               @arc-connect="connect"
                               v-if="showModal"
            ></arc-connect-modal>
        </transition>
    </a-scene>
</template>

<script>
  import 'aframe/dist/aframe-v0.9.2.js'
  import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'

  import ArcLogo          from 'arc-ci/template/ArcLogo.vue'
  import ArcConnectButton from 'arc-remotes/src/components/ArcConnectButton.vue'
  import ArcConnectModal  from 'arc-remotes/src/components/ArcConnectModal.vue'

  import AframeAssets    from './AframeAssets.vue'
  import AframeApp       from './AframeApp.vue'
  import AframeCameraRig from './AframeCameraRig.vue'

  THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
  THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree
  THREE.Mesh.prototype.raycast                     = acceleratedRaycast

  export default {
    name: 'arc-wrapper',

    components: {
      AframeCameraRig,
      ArcLogo,
      ArcConnectButton,
      ArcConnectModal,
      AframeAssets,
      AframeApp
    },

    props: {
      app: {
        type: String,
        required: true
      },
      host: {
        type: String,
        default: 'localhost'
      },
      port: {
        type: Number,
        default: 3030
      },
      protocol: {
        type: String,
        default: 'http'
      },
      routeRemote: {
        type: String,
        required: true
      },
    },

    data () {
      return {
        showModal: false,
        showSplash: true,
        assetsLoaded: false,
        sceneLoaded: false
      }
    },

    /**
     * Add the draco decoder path after mounting the component. WThere are some issues otherwise.
     */
    mounted () {
      this.$refs.scene.setAttribute('gltf-model', 'dracoDecoderPath: /static/decoder/;')
    },

    methods: {

      /**
       * Start the connection to the MQTT Server
       */
      connect (deviceName) {
        this.$refs.scene.emit('arcs-connect', {
          paircode: this.appName + '-' + deviceName.replace(' ', '-').toLowerCase()
        })

        this.showModal = false
      }
    },

    computed: {

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
        return sceneLoaded && assetsLoaded
      }
    }
  }
</script>

<style lang="scss"
       scoped
>
    @import '~arc-ci/src/variables';

    .splash {
        align-items: center;
        background-color: $theme-dark;
        color: $theme-light;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10000;
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
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

    .logo {
        max-width: 500px;
        width: 80vmin;
        padding: 3rem;
    }
</style>
