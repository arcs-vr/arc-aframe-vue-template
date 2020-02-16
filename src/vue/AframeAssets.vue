<template functional
          v-once
>
    <a-assets @loaded="listeners['loaded']">

        <a-asset-item id="model"
                      src="/models/model.gltf"
        />

    </a-assets>
</template>

<script>
  export default {
    name: 'aframe-assets',
  }
</script>
