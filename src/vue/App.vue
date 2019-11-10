<template>
    <a-entity id="arcs-app">
        <a-entity @model-loaded="debounceLoaded"
                  gltf-model="#model"
                  id="model"
        />
    </a-entity>
</template>

<script>
  export default {
    name: 'App',

    props: {
      remoteConnected: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      debounceLoaded () {
        setTimeout(this.emitLoaded, 4000)
      },

      emitLoaded () {
        this.$emit('loaded')
      }
    }
  }
</script>
