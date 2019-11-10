# ARCS & Vue.js Project Template

This repository is a template for projects using [A-Frame](https://github.com/aframevr/aframe), 
[Vue.js](https://github.com/vuejs/vue) and the [ARC System](https://github.com/arcs-vr). 

It ships the ARCS corporate identity design and basic components such as: 

- Remote controls connection button next to the "enter VR" button
- A modal for connecting to the remote control device
- A camera rig that handles movement and cursor interaction
- Remote control interfaces for desktops and handheld touchscreen devices

## Installation

Click the "Use this template" button above, [click here](https://github.com/arcs-vr/arc-vue-template/generate) to 
generate a GitHub repository, or perform these steps:

```shell script
git clone https://github.com/arcs-vr/arc-vue-template [project_name]
cd [project_name]
git remote set-url origin https://github.com/[USERNAME]/[REPOSITORY].git
```

## Configuration

Edit the file located at `src/arc-config.js` and enter a unique app name, and the connection to your MQTT broker.

## Development

Use the predefined scripts:

```shell script
# WebPack's dev-server
yarn dev-server

# Dev build
yarn dev

# Automatic dev build
yarn watch
```

### Assets

Add all assets into the component defined at `src/vue/Assets.vue`. The splash screen will display until all assets are loaded.

### A-Frame

Add all A-Frame related Vue components to the component defined at `src/vue/App.vue`. 
I suggest putting A-Frame components into the `src/aframe` directory.

## Deployment

Build the project:

```shell script
yarn build
```

Then deploy everything inside the `public` directory:

```shell script
rsync -r --progress --stats -h --delete -a $PWD/public/* [user]@[host]:/var/www/[project-docroot]/
```

## Authors and contributors

- Barthélémy Bonhomme, [@barthy-koeln](https://github.com/barthy-koeln/): [post@barthy.koeln](mailto:post@barthy.koeln)

## Attributions 

- Default Model by [reymarch](https://sketchfab.com/reymarch) on [Sketchfab](https://sketchfab.com/3d-models/low-poly-trees-2e70c34af8994852acd4b9ffce596336)
