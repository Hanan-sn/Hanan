<template>
  <div class="summary" flex>
    <SidePanel>
      <template slot="inner">
        <Card>
          <template slot="title">
            <i class="card-title-font">联合奖惩</i>
          </template>
          <template slot="content">
            <div class="summary-union" flex="justify:between">
              <div class="item" flex="dir:col align:center" flex-box="1">
                <img src="@/assets/images/overview/jh_icon01.png" alt="">
                <i>轨迹数量（条）</i>
                <i class="num">5600</i>
              </div>
              <div class="item" flex="dir:col align:center" flex-box="1">
                <img src="@/assets/images/overview/jh_icon01.png" alt="">
                <i>轨迹数量（条）</i>
                <i class="num">5600</i>
              </div>
              <div class="item" flex="dir:col align:center" flex-box="1">
                <img src="@/assets/images/overview/jh_icon01.png" alt="">
                <i>轨迹数量（条）</i>
                <i class="num">5600</i>
              </div>
            </div>
          </template>
        </Card>
        <Card>
          <template slot="title">
            <i class="card-title-font">资源信息分类统计</i>
          </template>
          <template slot="content">
            <div class="summary-classify">
              <v-chart :options="classifyOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
            </div>
          </template>
        </Card>
        <Card>
          <template slot="title">
            <i class="card-title-font">部门数据归集统计分析</i>
          </template>
          <template slot="content">
            <div class="summary-dept">
              <div class="row table-header" flex="justify:between">
                <span><i>部门名称</i></span>
                <span><i>归集数量（条）</i></span>
                <span><i>入库率</i></span>
              </div>
              <Swiper ref="mySwiper" class="dept-swiper" :options="swiperOptions">
                <SwiperSlide class="slide-wrapper" v-for="(item, i) in 20" :key="i">
                  <div class="row table-body-row" flex="justify:between">
                    <span>模拟部门{{item}}</span>
                    <span>10000</span>
                    <span>95%</span>
                  </div>
                </SwiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
              </Swiper>
            </div>
          </template>
        </Card>
      </template>
    </SidePanel>
    <MiddlePanel>
      <template slot="outer">
        <div class="center-container" style="height: 585px;">

        </div>
      </template>
      <template slot="inner">
        <Card>
          <template slot="title">
            <i class="card-title-font">资源信息归集趋势</i>
          </template>
          <template slot="content">
            <div class="summary-trend">
              <v-chart :options="trendOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
            </div>
          </template>
        </Card>
      </template>
    </MiddlePanel>
    <SidePanel>
      <template slot="inner">
        <Card>
          <template slot="title">
            <i class="card-title-font">数据归集来源对比</i>
          </template>
          <template slot="content">
            <div class="summary-source">
              <v-chart :options="sourceOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
            </div>
          </template>
        </Card>
        <Card>
          <template slot="title">
            <i class="card-title-font">自然人资源数据分类统计</i>
          </template>
          <template slot="content">
            <div class="summary-nature">
              <v-chart :options="natureOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
            </div>
          </template>
        </Card>
        <Card>
          <template slot="title">
            <i class="card-title-font">最新填报部门</i>
          </template>
          <template slot="content">
            <div class="summary-newest">
              <div class="row table-header" flex="justify:between">
                <span><i>部门名称</i></span>
                <span><i>归集数量（条）</i></span>
              </div>
              <Swiper ref="mySwiper" class="newest-swiper" :options="swiperOptions">
                <SwiperSlide class="slide-wrapper" v-for="(item, i) in 20" :key="i">
                  <div class="row table-body-row" flex="justify:between">
                    <span>模拟部门{{item}}</span>
                    <span>10000</span>
                  </div>
                </SwiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
              </Swiper>
            </div>
          </template>
        </Card>
      </template>
    </SidePanel>
  </div>
</template>

<script>
  import MiddlePanel from '../../../components/MiddlePanel/MiddlePanel'
  import SidePanel from '../../../components/SidePanel/SidePanel'
  import Card from '../../../components/Card/Card'
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  export default {
    name: 'Summary',
    data() {
      return {
        swiperOptions: {
          direction: 'vertical',
          slidesPerView: 8,
          loop: true
          // Some Swiper option/callback...
        },
        classifyOption: {

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            }
          ]
        },
        sourceOption: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['35%', '70%'],
              center: ['50%', '50%'],
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 274, name: '联盟广告' },
                { value: 235, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
              ].sort(function (a, b) { return a.value - b.value }),
              roseType: 'radius',
              label: {
                color: '#fff'
              },
              labelLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200
              }
            }
          ]
        },
        natureOption: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                color: '#fff'
              },
              labelLine: {
                show: true
              },
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
              ]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: ['0%', '40%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'center',
                color: '#fff'
              },
              labelLine: {
                show: true
              },
              data: [
                { value: 335, name: '直接访问' }
              ]
            }
          ]
        },
        trendOption: {
          color: [ '#a48f5e', '#097c86'],
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 901, 934, 1290, 1190, 1330, 1230, 1320, 1120, 1220],
              type: 'line',
              areaStyle: {}
            },
            {
              data: [320, 432, 501, 634, 490, 830, 620, 401, 534, 690, 830, 820],
              type: 'line',
              areaStyle: {}
            }
          ]
        }
      }
    },
    directives: directive,
    components: { MiddlePanel, Card, SidePanel, Swiper, SwiperSlide, directive }
  }
</script>

<style lang="stylus" scoped>
  .table-header
    background-color: #042f40
  .row
    padding 0 20px
    height: 40px
    line-height: 40px
    span
      &:first-child
        flex: 2
      &:last-child
        text-align center
        flex: 1
      &:nth-child(2)
        text-align center
        width 100px
  .swiper-slide
    .row
      span
        &:last-child
          color #3afee9
    &:nth-child(even)
      .table-body-row
        background-color: #042f40
  .newest-swiper, .dept-swiper
    height: 320px
  .center-container
    height: 585px
    position relative
    overflow hidden

    &::after
      content ''
      display block
      width: 100%
      height: 100%
      position absolute
      background-image: url('~@/assets/images/summary/pic.png')
      background-repeat: no-repeat
      background-position: center center;
      z-index 8
    &::before
      content ''
      display block
      width: 100%
      height: 100%
      position absolute
      background-image: url('~@/assets/images/summary/mid.png')
      background-repeat: no-repeat
      background-position: center center;
      /* animation rotate infinite 20s linear */
      z-index 10
  @keyframes rotate{
    0%{
      transform rotate(0deg)
      opacity 0.8
    }
    50%{
      transform rotate(180deg)
      opacity 1
    }
    100%{
      transform rotate(360deg)
      opacity 0.8
    }
  }
</style>
