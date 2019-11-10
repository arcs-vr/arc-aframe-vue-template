<template functional
          v-once
>
    <a-entity :arc-component="`
                camera: #main-camera;
                host: ${host};
                port: ${port};
                protocol: ${protocol};
                app: ${app};
              `"
              id="camera-rig"
              position="0 1.88 0"
              rotation="0 0 0"
              wasd-controls="
                acceleration: 200;
                fly: false;
              "
    >
        <a-entity camera
                  id="main-camera"
                  look-controls="
                    hmdEnabled: false;
                    pointerLockEnabled: true;
                  "
                  position="0 0 0"
                  user-height="1.88"
        >
            <a-entity arc-cursor
                      id="cursor"
                      position="0 0 -1"
            ></a-entity>
        </a-entity>
    </a-entity>
</template>

<script>
  import 'arc-component'
  import 'arc-cursor'

  export default {
    name: 'aframe-camera-rig',

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
      }
    },
  }
</script>
