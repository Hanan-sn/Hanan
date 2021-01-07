<template>
  <div class="union" flex="dir:col">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="border: 1px solid red; width: 500px; height: 300px;">
      <path fill="none" stroke-linecap="round" class="outerArc" />
      <path fill="none" stroke-linecap="round" class="innerArc" />
    </svg>
    <svg class="svg-cir" width="320" height="320">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#12b1ee"></stop>
          <stop offset="25%" stop-color="#8f33d0"></stop>
          <stop offset="50%" stop-color="#ab32aa"></stop>
          <stop offset="75%" stop-color="#8f33d0"></stop>
          <stop offset="100%" stop-color="#12b1ee"></stop>
        </linearGradient>
      </defs>
      <circle cx="160" cy="160"
        ref="svgCir" class="alert-sec-circle"
        r="140" fill="transparent"
        stroke-linecap="round"
        stroke-dasharray="480"
        stroke-dashoffset="524"
        stroke="url(#grad)" stroke-width="20">
      </circle>
    </svg>
  </div>
</template>

<script>
  // import ShaderKabi from '../../components/Shader/ShaderKabi'
    export default {
      name: 'Union',
      components: {
        // ShaderKabi
      },
      mounted () {
        window.onresize = this.winResizeListener
        // this.$refs.svgCir.setAttribute('stroke-dashoffset', -2 * Math.PI * 18 * 70 / 100)
      },
      methods: {
        winResizeListener () {
          let t = null
          clearTimeout(t)
          t = setTimeout(() => {
            // this.$refs.unionLine.resize()
            // this.$refs.quitLine.resize()
            // this.$refs.memoLine.resize()
          }, 300)
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .svg-cir
    /*animation rotate linear 2s infinite*/
  @keyframes rotate{
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }
</style>
