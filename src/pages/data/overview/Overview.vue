<template>
  <div class="overview" flex>
    <div class="page-title-wrapper">
      <span class="header-title">
        <i>系统概况专题</i>
      </span>
    </div>
    <div class="page-body-wrapper">
      <SidePanel>
        <template slot="inner">
          <Card>
            <template slot="title"><i class="card-title-font">联合奖惩</i></template>
            <template slot="content">
              <div class="overview-union">
                <div class="info-bar">
                  <div class="info-item">
                    <span><i class="title-font">备忘录数量</i></span>
                    <span><i class="num">{{union.memoCount}}</i><i class="unit">（个）</i></span>
                  </div>
                  <div class="info-item">
                    <span><i class="title-font">备忘录数量</i></span>
                    <span><i class="num">{{union.treasureCount}}</i><i class="unit">（个）</i></span>
                  </div>
                  <div class="info-item">
                    <span><i class="title-font">备忘录数量</i></span>
                    <span><i class="num">{{union.implementDeptCount}}</i><i class="unit">（个）</i></span>
                  </div>
                </div>
                <div class="chart">
                  <v-chart :options="unionOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">数据交换流向分析</i>
            </template>
            <template slot="content">
              <div class="overview-exchange">
                <div class="info-board">
                  <div class="row" flex>
                    <div class="cell" flex="dir:col align:center">
                      <img class="icon" src="~@/assets/images/overview/jh_icon01.png" alt="">
                      <span><i>交换数据总量</i></span>
                      <span><i class="num">8846</i></span>
                    </div>
                    <div class="cell" flex flex-box="1">
                      <div class="inner-cell" flex="dir:col" flex-box="1">
                        <span><i class="num">555</i></span>
                        <span><i>归集数据量</i></span>
                        <span><i>正确率</i><i>80%</i></span>
                      </div>
                      <div class="inner-cell" flex="dir:col" flex-box="1">
                        <span><i class="num">555</i></span>
                        <span><i>输出数据量</i></span>
                        <span><i>正确率</i><i>80%</i></span>
                      </div>
                    </div>
                  </div>
                  <div class="row" flex>
                    <div class="cell" flex="dir:col align:center">
                      <span><i>交换数据总量</i></span>
                      <span><i class="num">8846</i></span>
                    </div>
                    <div class="cell" flex flex-box="1">
                      <div class="inner-cell" flex="dir:col" flex-box="1">
                        <span><i>任务监控</i></span>
                        <span><i>正常任务</i><i class="num">80</i></span>
                      </div>
                      <div class="inner-cell" flex="dir:col" flex-box="1">
                        <span><i>&nbsp;</i></span>
                        <span><i>异常</i><i class="num">80</i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chart">
                  <v-chart :options="exchangeOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
        </template>
      </SidePanel>
      <MiddlePanel>
        <template slot="outer">
          <Map3D style="width: 100%"></Map3D>
        </template>
      </MiddlePanel>
      <SidePanel>
        <template slot="inner">
          <Card>
            <template slot="title"><i class="card-title-font">资源信息分类统计</i></template>
            <template slot="content">
              <div class="overview-classic">
                <div class="info-bar">
                  <div class="info-item">
                    <span><i class="title-font">备忘录数量</i></span>
                    <span><i class="num">{{union.memoCount}}</i><i class="unit">（个）</i></span>
                  </div>
                  <div class="info-item">
                    <span><i class="title-font">备忘录数量</i></span>
                    <span><i class="num">{{union.treasureCount}}</i><i class="unit">（个）</i></span>
                  </div>
                  <div class="info-item">
                    <span><i class="title-font">备忘录数量</i></span>
                    <span><i class="num">{{union.implementDeptCount}}</i><i class="unit">（个）</i></span>
                  </div>
                </div>
                <div class="chart">
                  <v-chart :options="unionOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
          <Card></Card>
        </template>
      </SidePanel>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SidePanel from '../../../components/SidePanel/SidePanel'
  import MiddlePanel from '../../../components/MiddlePanel/MiddlePanel'
  import Card from '../../../components/Card/Card'
  import Map3D from '../../../components/Map3D/Map3D'
  export default {
    name: 'Overview',
    data() {
      return {
        union: {
          memoCount: 0,
          treasureCount: 0,
          implementDeptCount: 0
        },
        unionOption: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '60%'],
              avoidLabelOverlap: false,

              label: {
                position: 'outer',
                alignTo: 'none',
                bleedMargin: 5
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
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
              radius: ['0%', '35%'],
              avoidLabelOverlap: false,
              label: {
                position: 'inner',
                alignTo: 'none',
                bleedMargin: 5
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
              ]
            }
          ]
        },
        exchangeOption:{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            },
            {
              data: [110, 180, 120, 90, 80, 100, 120],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            }
          ]
        }
      }
    },
    components: {
      // Panel
      SidePanel,
      MiddlePanel,
      Card,
      Map3D
    },
    created() {
    },
    mounted() {
    },
    computed: {
      ...mapState({
        a: state => state.overview.a
      })
    },
    watch: {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .earth
    width: 100%
    height: 100%

  .overview
    display flex
    flex-direction column
    .page-body-wrapper
      flex: 1
      display flex

      .overview-union
        .info-bar
          display flex

          .info-item
            color #fff
            flex: 1
            display flex
            flex-direction column
            background-color: #011e2c
            margin 0 10px
            padding: 4px 20px

      .overview-exchange
        .info-board
          .row
            width: 100%
            .cell
              color #fff
              background-color: #012032
              margin 5px
              padding 6px 0
              &:first-child
                width 120px
              .icon
                width 30px
                height: 30px
                padding-bottom: 6px
              .inner-cell
                padding-top: 10px
                padding-left: 20px
                line-height: 22px

</style>
