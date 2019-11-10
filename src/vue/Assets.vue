<template v-once>
    <a-assets @loaded="$emit('loaded')">

        <a-asset-item id="model"
                      src="../../assets/models/low_poly_trees/scene.gltf"
        />

    </a-assets>
</template>

<script>
  export default {
    name: 'Assets',

    mounted () {
      this.$el.fileLoader.manager.setURLModifier(this.urlModifier)
    },

    methods: {
      /**
       * Regular expression that fixes gltf-loader resource paths.
       * @link{https://regex101.com/r/8lW3gQ/2}
       *
       * @param {string} url
       * @return {string}
       */
      urlModifier (url) {
        return url.replace(/^(\/models\/?)(\/models|\/images)/, '$2')
      },
    }
  }
</script>
