<template>
  <div class="public" flex="dir:col">
    <div class="page-title-wrapper">
      <span class="header-title">
        <i>双公示专题</i>
      </span>
    </div>
    <div class="page-body-wrapper" flex>
      <SidePanel>
        <template slot="inner">
          <Card>
            <template slot="title">
              <i class="card-title-font">部门双公示数据统计情况</i>
            </template>
            <template slot="content">
              <div class="public-statistic">
                <div class="row table-header" flex="justify:between">
                  <span><i>部门名称</i></span>
                  <span><i>归集数量（条）</i></span>
                </div>
                <Swiper ref="mySwiper" class="public-swiper" :options="swiperOptions">
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
          <Card>
            <template slot="title">
              <i class="card-title-font">双公示数据7天提报率</i>
            </template>
            <template slot="content">
              <div class="public-submit">
                <v-chart :options="submitOption" theme="macarons" style="width: 100%; height: 270px;"></v-chart>
              </div>
            </template>
          </Card>
        </template>
      </SidePanel>
      <MiddlePanel>
        <template slot="outer">
          <div class="center-container">
            <div class="show-geo">
              <span class="item-count-bar">
                <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
                <span class="count-square">
                  <span>自然人行政许可</span>
                  <span><i class="num">10000</i><i>（条）</i></span>
                </span>
              </span>
              <span class="item-count-bar">
                <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
                <span class="count-square">
                  <span>法人行政许可</span>
                  <span><i class="num">10000</i><i>（条）</i></span>
                </span>
              </span>
              <span class="item-count-bar">
                <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
                <span class="count-square">
                  <span>自然人行政处罚</span>
                  <span><i class="num">10000</i><i>（条）</i></span>
                </span>
              </span>
              <span class="item-count-bar">
                <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
                <span class="count-square">
                  <span>法人行政处罚</span>
                  <span><i class="num">10000</i><i>（条）</i></span>
                </span>
              </span>
            </div>
            <Animation3D class="bg-3d" />
          </div>
        </template>
        <template slot="inner">
          <Card>
            <template slot="title">
              <i class="card-title-font">双公示采集情况</i>
            </template>
            <template slot="content">
              <div class="public-gather">
                <v-chart :options="gatherOption" theme="macarons" style="width: 100%; height: 300px;"></v-chart>
              </div>
            </template>
          </Card>
        </template>
      </MiddlePanel>
      <SidePanel>
        <template slot="inner">
          <Card>
            <template slot="title"><i class="card-title-font">1周新增</i></template>
            <template slot="content">
              <div class="public-newly">
                <div class="board" flex>
                  <div flex="dir:col align:center">
                    <span><i>行政许可数量</i></span>
                    <span><i class="num">565854</i><i>（条）</i></span>
                  </div>
                  <div flex="dir:col align:center">
                    <span><i>行政许可数量</i></span>
                    <span><i class="num">565854</i><i>（条）</i></span>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title"><i class="card-title-font">处罚修复数据统计</i></template>
            <template slot="content">
              <div class="public-repair">
                <v-chart :options="repairOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title"><i class="card-title-font">行政许可种类分布</i></template>
            <template slot="content">
              <div class="public-permission">
                <v-chart :options="permissionOption" theme="macarons" style="width: 100%; height: 300px;"></v-chart>
              </div>
            </template>
          </Card>
        </template>
      </SidePanel>
    </div>
  </div>
</template>

<script>
  import MiddlePanel from '../../../components/MiddlePanel/MiddlePanel'
  import SidePanel from '../../../components/SidePanel/SidePanel'
  import Card from '../../../components/Card/Card'
  import Animation3D from '../../../components/Animation3D/Animation3D'
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

  export default {
    name: 'Public',
    components: {
      Card,
      MiddlePanel,
      SidePanel,
      Swiper,
      SwiperSlide,
      Animation3D
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          direction: 'vertical',
          slidesPerView: 8,
          loop: true
          // Some Swiper option/callback...
        },
        submitOption: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }]
        },
        gatherOption: {
          color: ['#d2aa6e', '#31a3b2'],
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {},
              smooth: true
            },
            {
              data: [520, 632, 401, 734, 1190, 1030, 820],
              type: 'line',
              areaStyle: {},
              smooth: true
            }
          ]
        },
        repairOption: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }]
        },
        permissionOption: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '行政许可种类',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: true
              },
              labelLine: {
                show: true
              },
              data: [
                { value: 335, name: '种类一' },
                { value: 310, name: '种类二' },
                { value: 234, name: '种类三' },
                { value: 135, name: '种类四' },
                { value: 1548, name: '种类五' }
              ]
            },
            {
              name: '主体类型',
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
                { value: 335, name: '自然人' }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.public
  .public-statistic
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
          flex: 1
    .swiper-slide
      .row
        span
          &:last-child
            color #3afee9
      &:nth-child(even)
        .table-body-row
          background-color: #042f40
      // &:nth-type-of(even)
    .public-swiper
      height: 320px
  .center-container
    position relative
    .show-geo
      width 100%
      height: 100%
      position absolute
      .item-count-bar:nth-child(1)
        top: 0
        left: 40px
      .item-count-bar:nth-child(2)
        top: 0
        right: 40px
      .item-count-bar:nth-child(3)
        bottom: 0
        left: 40px
      .item-count-bar:nth-child(4)
        bottom: 0
        right: 40px
  .item-count-bar
    position absolute
    height 80px
    width 220px
    display flex
    background-image: url('~@/assets/images/overview/md_bg.png')
    background-repeat: no-repeat
    align-items center
    justify-content space-between
    padding-bottom: 10px
    padding-left: 20px
    box-sizing border-box
    .icon
      display block
      width 50px
      height: 50px
    .count-square
      flex: 1
      padding-left: 10px
  .public-newly
    .board
      display flex
      justify-content space-between
      >div
        padding 4px 8px
        background-color: #042433
        width: 48%
        margin-right: 2px
</style>
