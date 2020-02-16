<template>
    <a-entity id="arcs-app">
        <a-entity @model-loaded="debounceLoaded"
                  gltf-model="#model"
                  id="model"
                  position="0 0 0"
                  scale="1 1 1"
        />
    </a-entity>
</template>

<script>
  export default {
    name: 'aframe-app',

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
