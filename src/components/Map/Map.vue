<template>
  <div class="summary" flex>
    <div id="map"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china'
  export default {
    name: 'Map',
    data() {
      return {
        mapData: [
          [{
            name: '黑龙江',
            value: 1
          }], [{
            name: '北京市',
            value: 3
          }], [{
            name: '内蒙古',
            value: 1
          }], [{
            name: '吉林',
            value: 1
          }], [{
            name: '辽宁',
            value: 1
          }], [{
            name: '河北',
            value: 2
          }], [{
            name: '天津',
            value: 2
          }], [{
            name: '山西',
            value: 1
          }], [{
            name: '陕西',
            value: 1
          }], [{
            name: '甘肃',
            value: 1
          }], [{
            name: '宁夏',
            value: 1
          }], [{
            name: '青海',
            value: 1
          }], [{
            name: '新疆',
            value: 1
          }], [{
            name: '西藏',
            value: 1
          }], [{
            name: '四川',
            value: 2
          }], [{
            name: '重庆',
            value: 2
          }], [{
            name: '山东',
            value: 1
          }], [{
            name: '河南',
            value: 1
          }], [{
            name: '江苏',
            value: 2
          }], [{
            name: '安徽',
            value: 1
          }], [{
            name: '湖北',
            value: 2
          }], [{
            name: '浙江',
            value: 2
          }], [{
            name: '福建',
            value: 2
          }], [{
            name: '江西',
            value: 1
          }], [{
            name: '湖南',
            value: 2
          }], [{
            name: '贵州',
            value: 1
          }], [{
            name: '广西',
            value: 1
          }], [{
            name: '海南',
            value: 2
          }], [{
            name: '上海',
            value: 3
          }], [{
            name: '云南',
            value: 1
          }]
        ]
      }
    },
    mounted() {
      this.renderMap({ id: 'map', mapData: this.mapData })
    },
    methods: {
      renderMap(paramObj) {
        var effect = '#06eaed'
        var flyLine = '#ffffff'
        var border = '#105689'
        var bg = 'rgba(2,10,34,0.8)'
        var bg1 = '#040c22'
        var option = {
          tooltip: {
            trigger: 'item',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: (item) => `${item.data.name}:  ${item.data.value}`
          },
          series: [
            {
              name: 'China',
              type: 'map',
              map: 'china',
              label: {
                show: true,
                color: '#ffffff',
                fontSize: 16
              },
              data: [
                { name: '北京', value: 10 },
                { name: '天津', value: 10 },
                { name: '上海', value: 10 },
                { name: '重庆', value: 10 },
                { name: '广东', value: 10 },
                { name: '山东', value: 10 },
                { name: '江苏', value: 10 },
                { name: '河南', value: 10 },
                { name: '河北', value: 10 },
                { name: '浙江', value: 10 },
                { name: '香港', value: 10 },
                { name: '湖南', value: 10 },
                { name: '福建', value: 10 },
                { name: '云南', value: 10 },
                { name: '四川', value: 10 },
                { name: '广西', value: 10 },
                { name: '安徽', value: 10 },
                { name: '海南', value: 10 },
                { name: '江西', value: 10 },
                { name: '湖北', value: 10 },
                { name: '山西', value: 10 },
                { name: '陕西', value: 10 },
                { name: '辽宁', value: 10 },
                { 'name': '台湾', 'value': 10 },
                { 'name': '黑龙江', 'value': 10 },
                { 'name': '内蒙古', 'value': 10 },
                { 'name': '澳门', 'value': 10 },
                { 'name': '贵州', 'value': 10 },
                { 'name': '甘肃', 'value': 10 },
                { 'name': '青海', 'value': 10 },
                { 'name': '新疆', 'value': 10 },
                { 'name': '西藏', 'value': 10 },
                { 'name': '吉林', 'value': 10 },
                { 'name': '宁夏', 'value': 10 }
              ],
              itemStyle: {
                areaColor: '#013765',
                borderColor: '#12d3f4',
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 2,
                shadowOffsetY: 4,
                shadowOffsetX: 4
              },
              emphasis: {
                label: {
                  show: false,
                  color: '#000'
                },
                itemStyle: {
                  areaColor: '#12d3f4',
                  shadowColor: 'rgba(0, 0, 0, 0)',
                  shadowBlur: 0,
                  shadowOffsetY: 0,
                  shadowOffsetX: 0
                }
              }
            }
          ]
        }
        var chart = echarts.init(document.getElementById(paramObj.id))
        chart.setOption(option)
      }
    }
  }
</script>

<style lang="stylus" scoped>
#map
  width: 100%
  height: 100%
  position relative
  z-index 2
  overflow hidden
</style>
