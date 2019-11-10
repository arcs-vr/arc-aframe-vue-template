<template functional
          v-once
>
    <a-assets @loaded="listeners['assets-loaded']"></a-assets>
</template>

<script>
  export default {
    name: 'aframe-assets',
  }
</script>
