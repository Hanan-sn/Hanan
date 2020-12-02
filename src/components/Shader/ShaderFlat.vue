<template>
  <div ref="shader" style="width: 100%; height: 100%;">
    <flat-surface-shader class="shader"
                         type="canvas"
                         :light="{ambient: '#181818', diffuse: '#171f50', draw: false, speed: 0.0001, dampening: 0}"
                         :mesh="{segments: 16, slices: 16, width: 1.6, height: 1.6, depth: 6, speed: 0.0001}">
    </flat-surface-shader>
    <div class="inner"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'ShaderFlat'
  }
</script>
<style lang="stylus" scoped>
  .shader
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index 1
  .inner
    width: 100vw;
    height: 100vh;
    position absolute
    z-index 2
</style>
