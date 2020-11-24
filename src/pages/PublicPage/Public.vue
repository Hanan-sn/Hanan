<template>
  <div class="public" flex="dir:col">
    <div class="top-wrapper" flex>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>法人行政许可</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>法人行政处罚</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>自然人行政许可</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
      <div class="border-box" flex="dir:col" flex-box="1">
        <i>自然人行政处罚</i>
        <span class="num-box">
            <i class="num">1</i>
            <i class="num">2</i>
            <i class="num">3</i>
            <i class="num">4</i>
            <i class="num">5</i>
            <i class="num">6</i>
            <i>条</i>
          </span>
      </div>
    </div>
    <div class="main-wrapper" flex flex-box="1">
      <div  style="width: 400px;" flex="dir:col">
        <div class="border-box" flex-box="1">
          <i class="bb-title">部门双公示数据统计情况</i>
          <div class="table-container" style="padding: 50px 10px 10px" flex="dir:col" flex-box="1">
            <div class="table" flex-box="1">
              <div class="table-header" flex="justify:between">
                <span>部门名称</span>
                <span>数量（条）</span>
                <span>入库率</span>
              </div>
              <swiper style="height: 100%; position: relative" :options="swiperOptions">
                <swiper-slide class="slide-item" v-for="(item, index) in list" :key="index">
                  <div class="row">
                    <span>
                      {{item.label+ index}}
                    </span>
                    <span>
                      {{item.count}}
                    </span>
                    <span>
                      {{item.per}}
                    </span>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">双公示数据7天提报率</i>
          <div class="chart-container">
            <chart ref="publicLine" theme="my" :options="exchangeBarOptions" flex-box="1" style="width: 100%;"></chart>
          </div>
        </div>
      </div>
      <div flex-box="1" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">数据归集情况</i>
          <div class="chart-container">
            <chart ref="summaryLine" theme="my" :options="exchangeLineOptions" flex-box="1" style="width: 100%;"></chart>
          </div>
        </div>
        <div class="border-box" flex-box="1">
          <i class="bb-title">数据提报部门</i>
          <div class="table-container" style="padding: 50px 10px 10px" flex="dir:col" flex-box="1">
            <div class="table" flex-box="1">
              <div class="table-header" flex="justify:between">
                <span>部门名称</span>
                <span>数量（条）</span>
                <span>入库率</span>
              </div>
              <swiper style="height: 100%; position: relative" :options="swiperOptions">
                <swiper-slide class="slide-item" v-for="(item, index) in list" :key="index">
                  <div class="row">
                    <span>
                      {{item.label+ index}}
                    </span>
                    <span>
                      {{item.count}}
                    </span>
                    <span>
                      {{item.per}}
                    </span>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 400px;" flex="dir:col">
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">自然人资源数据分类统计</i>
          <div class="chart-container">
            <chart ref="natPie" theme="my" :options="unionPieOptions" style="width: 100%;"/>
          </div>
        </div>
        <div class="border-box" flex-box="1" flex="dir:col">
          <i class="bb-title">最新填报部门</i>
          <div class="chart-container">
            <chart ref="newPie" theme="my" :options="unionPieOptions" style="width: 100%;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Public',
      data () {
          return {
            exchangeBarOptions: {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  crossStyle: {
                    color: '#999'
                  }
                }
              },
              grid: {
                top: '20%'
              },
              xAxis: [
                {
                  type: 'category',
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                  axisPointer: {
                    type: 'shadow'
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  name: '条',
                  nameTextStyle: { color: '#fff' }
                }
              ],
              series: [
                {
                  type: 'bar',
                  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }
              ]
            },
            exchangeLineOptions: {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: [
                {
                  type: 'line',
                  smooth: false,
                  stack: '总量',
                  areaStyle: {},
                  data: [120, 132, 101, 134, 90, 230, 132, 101, 134, 90, 230, 210]
                }
              ]
            },
            unionPieOptions: {
              tooltip: {
                trigger: 'item',
                formatter: '{b} : {c} ({d}%)'
              },
              grid: {
                top: '20%',
                left: 'center'
              },
              series: [
                {
                  type: 'pie',
                  radius: '40%',
                  label: {
                    position: 'inside'
                  },
                  center: ['50%', '50%'],
                  data: [
                    { value: 250, name: '惩戒' },
                    { value: 300, name: '激励' }
                  ],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                },
                {
                  type: 'pie',
                  radius: ['50%', '60%'],
                  center: ['50%', '50%'],
                  label: {
                    color: '#fff'
                  },
                  data: [
                    { value: 100, name: '法人惩戒' },
                    { value: 150, name: '自然人惩戒' },
                    { value: 100, name: '法人激励' },
                    { value: 200, name: '自然人激励' }
                  ],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            },
            swiperOptions: {
              direction: 'vertical',
              slidesPerView: 8,
              loop: true,
              autoplay: true
            },
            list: [
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              },
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              },
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              },
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              },
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              },
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              },
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              },
              {
                label: '模拟内容',
                count: 100,
                per: '10%'
              }
            ]
          }
      },
      mounted () {
        window.onresize = () => {
          this.winResizeListener()
        }
      },
      methods: {
        winResizeListener () {
          let t = null
          clearTimeout(t)
          t = setTimeout(() => {
            this.$refs.publicLine.resize()
            this.$refs.summaryLine.resize()
            this.$refs.natPie.resize()
            this.$refs.newPie.resize()
          }, 300)
        }
      }
    }
</script>

<style scoped>

</style>
