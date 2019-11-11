<template functional
          v-once
>
    <a-assets @loaded="listeners['loaded']">
        <!-- Insert A-Frame assets here -->
    </a-assets>
</template>

<script>
  export default {
    name: 'aframe-assets',
  }
</script>
