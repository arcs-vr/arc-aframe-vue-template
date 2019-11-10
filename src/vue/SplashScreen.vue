<template>
    <transition mode="out-in"
                name="fade"
    >
        <div class="splash"
             id="splash-screen"
             v-if="show"
        >
            <h1>ARCS Demo</h1>
            <div class="logo">
                <arc-logo></arc-logo>
            </div>
            <p>Loading…</p>
        </div>
    </transition>
</template>

<script>
  import ArcLogo from 'arc-cd/template/ArcLogo.vue'

  export default {
    name: 'SplashScreen',

    components: {
      ArcLogo
    },

    props: {
      show: {
        type: Boolean,
        required: true
      },
    },
  }
</script>

<style lang="scss"
       scoped
>
    @import '~arc-cd/src/variables';
    @import '~arc-cd/src/typography';

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

        .logo {
            max-height: 60%;
            max-width: 500px;
            padding: 5vh;
            width: 80vmin;
        }

        .button {
            background-color: $theme-primary;
            border: 0;
            color: $theme-light;
            padding: 1rem;
            font-size: 2rem;
            cursor: pointer;
            margin-bottom: 1rem;
        }
    }
</style>
