(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(t,e){},"0V2Z":function(t,e){t.exports="/images/py.a8cde928.png"},1:function(t,e){},2:function(t,e){},3:function(t,e){},"62ew":function(t,e,n){function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw r}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n("pNMO"),n("4Brf"),n("0oug"),n("pjDv"),n("4mDm"),n("+2oP"),n("sMBO"),n("07d7"),n("JfAA"),n("PKPk"),n("3bBZ");var i={dependencies:["rotation"],schema:{enabled:{type:"boolean",default:!0},controls:{type:"array",default:["gamepad","trackpad","keyboard","touch"]},speed:{type:"number",default:.3,min:0},fly:{type:"boolean",default:!1},camera:{default:"[movement-controls] [camera]",type:"selector"},playerBody:{type:"selector",default:"[movement-controls] [player-body]"}},init:function(){this.velocityCtrl=null,this.velocity=new THREE.Vector3(0,0,0),this.newPosition=new THREE.Vector3(0,0,0,0),this.heading=new THREE.Quaternion(0,0,0,0)},tick:function(t,e){e&&this.data.enabled&&(this.updateVelocityCtrl(),this.velocityCtrl&&(e>50?this.velocity.set(0,0,0):(this.updateVelocity(e),0!==this.velocity.length()&&(this.newPosition.copy(this.el.object3D.position),this.newPosition.x+=this.velocity.x*e/1e3,this.newPosition.y+=this.velocity.y*e/1e3,this.newPosition.z+=this.velocity.z*e/1e3,this.el.object3D.position.copy(this.newPosition)))))},updateVelocityCtrl:function(){if(this.data.enabled){var t,e=o(this.data.controls);try{for(e.s();!(t=e.n()).done;){var n=t.value,a=this.el.components[n+"-controls"];if(a&&a.isVelocityActive())return void(this.velocityCtrl=a)}}catch(t){e.e(t)}finally{e.f()}this.velocityCtrl=null}else this.velocityCtrl=null},updateVelocity:function(t){if(this.velocityCtrl&&this.velocityCtrl.getVelocityDelta&&!1!==this.data.enabled){var e=this.velocityCtrl.getVelocityDelta(t);e&&(this.heading.copy(this.data.camera.object3D.quaternion),this.heading.premultiply(this.el.object3D.quaternion),e.applyQuaternion(this.heading),this.velocity.copy(e),this.velocity.multiplyScalar(16.66667*this.data.speed),this.data.fly||(this.velocity.y=0))}}};AFRAME.registerComponent("movement-controls",i)},B9aj:function(t,e){t.exports="/images/pz.cbcbc045.png"},"D+WD":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-scene",{ref:"scene",attrs:{"arc-system":t.arcSystemOptions,light:"defaultLightsEnabled: false","loading-screen":"enabled: false;","cubemap-environment":"background: true;",renderer:"\n            antialias: true;\n            colorManagement: true;\n            alpha: false;\n            physicallyCorrectLights: true;\n         "},on:{"arc-remote-connected":function(e){t.remoteConnected=!0},"arc-remote-disconnected":function(e){t.remoteConnected=!1},"~loaded":function(e){if(e.stopPropagation(),e.target!==e.currentTarget)return null;t.sceneLoaded=!0}}},[n("assets",{on:{loaded:function(e){t.assetsLoaded=!0}}}),t._v(" "),t.assetsLoaded?n("app",{attrs:{"remote-connected":t.remoteConnected},on:{loaded:function(e){t.appLoaded=!0}}}):t._e(),t._v(" "),n("camera-rig"),t._v(" "),n("arc-connect-button",{on:{"arc-connect":function(e){t.showModal=!0}}}),t._v(" "),n("transition",{attrs:{appear:"",mode:"out-in",name:"fade"}},[n("keep-alive",[t.showModal?n("arc-connect-modal",{attrs:{"remote-url":t.remoteUrl},on:{"arc-connect":t.connect,close:function(e){t.showModal=!1}}}):t._e()],1)],1),t._v(" "),n("splash-screen",{attrs:{show:t.showSplash}})],1)};o._withStripped=!0;n("ma9I"),n("itT1");var a=n("+3EO");THREE.BufferGeometry.prototype.computeBoundsTree=a.b,THREE.BufferGeometry.prototype.disposeBoundsTree=a.c,THREE.Mesh.prototype.raycast=a.a;var i=n("XyfI"),r=n.n(i),s=n("NrPB"),c=n.n(s),l=n("0V2Z"),u=n.n(l),d=n("cf1P"),p=n.n(d),h=n("B9aj"),f=n.n(h),m=n("fOvc"),v=n.n(m),y={schema:{background:{type:"boolean",default:!0}},init:function(){this.loader=new THREE.CubeTextureLoader,this.bindFunctions()},bindFunctions:function(){this.envMapLoaded=this.envMapLoaded.bind(this)},update:function(){this.cubemap=this.loader.load([r.a,c.a,u.a,p.a,f.a,v.a],this.envMapLoaded)},envMapLoaded:function(){this.el.emit("cubemap-loaded"),this.data.background&&(this.el.object3D.background=this.cubemap),this.el.object3D.environment=this.cubemap}};AFRAME.registerSystem("cubemap-environment",y);n("9Q39");var b=n("9TOn"),g=n("o/G0"),w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-assets",{on:{loaded:function(e){return t.$emit("loaded")}}},[o("a-asset-item",{attrs:{id:"model",src:n("JjDK")}})],1)};w._withStripped=!0;n("rB9j"),n("UxlC");var _={name:"Assets",mounted:function(){this.$el.fileLoader.manager.setURLModifier(this.urlModifier)},methods:{urlModifier:function(t){return t.replace(/^(\/models\/?)(\/models|\/images)/,"$2")}}},E=n("KHd+"),C=Object(E.a)(_,w,[],!1,null,null,null);C.options.__file="src/vue/Assets.vue";var L=C.exports,A=function(){var t=this.$createElement,e=this._self._c||t;return e("a-entity",{attrs:{id:"arcs-app"}},[e("a-entity",{attrs:{"gltf-model":"#model",id:"model"},on:{"model-loaded":this.debounceLoaded}})],1)};A._withStripped=!0;var S={name:"App",props:{remoteConnected:{type:Boolean,default:!1}},methods:{debounceLoaded:function(){setTimeout(this.emitLoaded,4e3)},emitLoaded:function(){this.$emit("loaded")}}},j=Object(E.a)(S,A,[],!1,null,null,null);j.options.__file="src/vue/App.vue";var x=j.exports,O=function(){var t=this.$createElement,e=this._self._c||t;return e("a-entity",{attrs:{"arc-gamepad-controls":"","arc-keyboard-controls":"","camera-rig":"",id:"camera-rig","movement-controls":"\n            controls: arc-keyboard, arc-gamepad;\n            fly: false;\n            speed: 15;\n          ",position:"-8 0 5",rotation:"0 0 0"}},[e("a-entity",{attrs:{camera:"",id:"main-camera","look-controls":"\n                hmdEnabled: false;\n                pointerLockEnabled: true;\n              ",position:"0 1.7 0",rotation:"0 10 0","user-height":"1.6"}},[e("a-entity",{attrs:{"arc-cursor":"",position:"0 0 -0.5"}}),this._v(" "),e("a-video",{attrs:{animation__activate:"property: opacity; from: 0; to: 1; startEvents: activate; dur: 200; delay: 100;",animation__activate_visibility:"property: visible; from: false; to: true; startEvents: activate; dur: 0;",animation__deactivate:"property: opacity; from: 1; to: 0; startEvents: deactivate; dur: 200;",animation__deactivate_visibility:"property: visible; from: true; to: false; startEvents: deactivate; dur: 0; delay: 200;","arc-hand-camera":"angle: -35;",height:".3",opacity:"0",position:"0 -0.2 -0.5",rotation:"0 0 0",transparent:"true",visible:"true",width:".533"}})],1)],1)};O._withStripped=!0;n("07d7"),n("5s+n"),n("ls82"),n("qwng"),n("UY5s"),n("Y3Pj"),n("62ew");function M(t,e,n,o,a,i,r){try{var s=t[i](r),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,a)}var k={name:"CameraRig",mounted:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.$emit("loaded");case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function r(t){M(i,o,a,r,s,"next",t)}function s(t){M(i,o,a,r,s,"throw",t)}r(void 0)}))})()}},$=Object(E.a)(k,O,[],!1,null,null,null);$.options.__file="src/vue/CameraRig.vue";var P=$.exports,R=function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{mode:"out-in",name:"fade"}},[this.show?e("div",{staticClass:"splash",attrs:{id:"splash-screen"}},[e("h1",[this._v("ARCS Demo")]),this._v(" "),e("div",{staticClass:"logo"},[e("arc-logo")],1),this._v(" "),e("p",[this._v("Loading…")])]):this._e()])};R._withStripped=!0;var B={name:"SplashScreen",components:{ArcLogo:n("k3Le").a},props:{show:{type:Boolean,required:!0}}},T=(n("XHuI"),Object(E.a)(B,R,[],!1,null,"09c0bd95",null));T.options.__file="src/vue/SplashScreen.vue";var D=T.exports,V={name:"arc-wrapper",components:{CameraRig:P,ArcConnectButton:b.a,ArcConnectModal:g.a,Assets:L,App:x,SplashScreen:D},data:function(){return{showModal:!1,appLoaded:!1,assetsLoaded:!1,sceneLoaded:!1,remoteConnected:!1}},methods:{connect:function(t){this.$refs.scene.emit("arcs-connect",{deviceName:t}),this.showModal=!1}},computed:{arcSystemOptions:function(){return"\n              host: ".concat(this.$arcOptions.host,";\n              port: ").concat(this.$arcOptions.port,";\n              protocol: ").concat(this.$arcOptions.protocol,";\n              app: ").concat(this.$arcOptions.app,";\n            ")},remoteUrl:function(){var t=this.$router.resolve({name:this.routeRemote}).href;return"".concat(window.location.protocol,"//").concat(window.location.host).concat(t)},showSplash:function(){return!this.sceneLoaded&&!this.assetsLoaded}}},H=(n("JOAt"),n("ytei"),Object(E.a)(V,o,[],!1,null,"02bb7300",null));H.options.__file="src/vue/ArcsWrapper.vue";e.default=H.exports},"JN/v":function(t,e,n){},JOAt:function(t,e,n){"use strict";var o=n("L/jh");n.n(o).a},JjDK:function(t,e,n){t.exports=n.p+"models/scene.0b4ad64e.gltf"},"L/jh":function(t,e,n){},NrPB:function(t,e){t.exports="/images/nx.08d4e12d.png"},XHuI:function(t,e,n){"use strict";var o=n("yWso");n.n(o).a},XyfI:function(t,e){t.exports="/images/px.9015345a.png"},cf1P:function(t,e){t.exports="/images/ny.1657ff2e.png"},fOvc:function(t,e){t.exports="/images/nz.7b1bb1f7.png"},yWso:function(t,e,n){},ytei:function(t,e,n){"use strict";var o=n("JN/v");n.n(o).a}}]);