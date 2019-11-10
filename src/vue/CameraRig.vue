<template>
    <a-entity arc-gamepad-controls
              arc-keyboard-controls
              camera-rig
              id="camera-rig"
              movement-controls="
                controls: arc-keyboard, arc-gamepad;
                fly: false;
                speed: 15;
              "
              position="-8 0 5"
              rotation="0 0 0"
    >
        <a-entity camera
                  id="main-camera"
                  look-controls="
                    hmdEnabled: false;
                    pointerLockEnabled: true;
                  "
                  position="0 1.7 0"
                  rotation="0 10 0"
                  user-height="1.6"
        >
            <a-entity arc-cursor
                      position="0 0 -0.5"
            />

            <a-video
                    animation__activate="property: opacity; from: 0; to: 1; startEvents: activate; dur: 200; delay: 100;"
                    animation__activate_visibility="property: visible; from: false; to: true; startEvents: activate; dur: 0;"
                    animation__deactivate="property: opacity; from: 1; to: 0; startEvents: deactivate; dur: 200;"
                    animation__deactivate_visibility="property: visible; from: true; to: false; startEvents: deactivate; dur: 0; delay: 200;"
                    arc-hand-camera="angle: -35;"
                    height=".3"
                    opacity="0"
                    position="0 -0.2 -0.5"
                    rotation="0 0 0"
                    transparent="true"
                    visible="true"
                    width=".533"
            />
        </a-entity>
    </a-entity>
</template>

<script>
  import 'arc-aframe-movement'
  import 'arc-aframe-hand-camera'
  import 'arc-aframe-cursor'
  import '../aframe/movement-controls.js'

  export default {
    name: 'CameraRig',

    async mounted () {
      await this.$nextTick()
      this.$emit('loaded')
    }
  }
</script>
