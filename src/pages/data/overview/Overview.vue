<template>
  <div class="overview" flex="dir:col">
    <div class="page-title-wrapper">
      <span class="header-title">
        <i>系统概况专题</i>
      </span>
    </div>
    <div class="page-body-wrapper">
      <SidePanel flex="dir:col">
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
          <Card flex-box="1">
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
                  <v-chart :options="exchangeOption" theme="macarons" style="width: 100%; height: 100%;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
        </template>
      </SidePanel>
      <MiddlePanel>
        <template slot="outer">
          <Map3D style="height: 600px"></Map3D>
          <div class="count-list">
            <div class="total-wrapper">
              <i class="title">数据归集总量：</i>
              <i class="num-list-item" v-for="(item, i) in countList.total" :key="i">{{item}}</i>
              <i class="title">（条）</i>
            </div>
            <div class="count-wrapper" flex="dir:col justify:around align:center">
              <div class="couple-row" flex="justify:between">
                <div class="item" flex="dir:col">
                  <span>
                    <i>自然人基础信息</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
                <div class="item" flex="dir:col">
                  <span>
                    <i>法人基础信息</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
              </div>
              <div class="couple-row" flex="justify:between">
                <div class="item" flex="dir:col">
                  <span>
                    <i>自然人基础信息</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
                <div class="item" flex="dir:col">
                  <span>
                    <i>法人基础信息</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
              </div>
              <div class="couple-row" flex="justify:between">
                <div class="item" flex="dir:col">
                  <span>
                    <i>自然人基础信息</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
                <div class="item" flex="dir:col">
                  <span>
                    <i>法人基础信息</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template slot="inner">
          <div class="red-black-list">
            <Card>
              <template slot="title">
                <i class="card-title-font">红黑名单统计</i>
              </template>
              <template slot="content">
                <div class="list-inner-wrapper" flex="justify:between">
                  <div class="list-item">
                    <div class="item-title">
                      <span>
                        <i class="red-title">红名单</i>
                        <i class="num">
                          125668
                        </i>
                        <i>（个）</i>
                      </span>
                    </div>
                    <div class="list-box" flex="wrap:yes">
                      <div class="box red" flex="dir:col">
                        <span><i>海关认证企业</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                      <div class="box red" flex="dir:col">
                        <span><i>A级纳税人</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                      <div class="box red" flex="dir:col">
                        <span><i>社会法人诚实守信</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                      <div class="box red" flex="dir:col">
                        <span><i>优秀青年志愿者</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                    </div>
                  </div>
                  <div class="list-item">
                    <div class="item-title">
                      <span>
                        <i class="black-title">红名单</i>
                        <i class="num">
                          125668
                        </i>
                        <i>（个）</i>
                      </span>
                    </div>
                    <div class="list-box" flex="wrap:yes">
                      <div class="box black" flex="dir:col">
                        <span><i>海关认证企业</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                      <div class="box black" flex="dir:col">
                        <span><i>A级纳税人</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                      <div class="box black" flex="dir:col">
                        <span><i>社会法人诚实守信</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                      <div class="box black" flex="dir:col">
                        <span><i>优秀青年志愿者</i></span>
                        <span><i class="num">15689</i><i>（个）</i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
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
                  <v-chart :options="classicOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title"><i class="card-title-font">信用报告查询趋势分析</i></template>
            <template slot="content">
              <div class="overview-trend">
                <v-chart :options="trendOption" theme="macarons" style="width: 100%; height: 220px;"></v-chart>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title"><i class="card-title-font">数据提报部门</i></template>
            <template slot="content">
              <div class="overview-dept">
                <b-table :columns="columns" :data="listData" height="160" stripe></b-table>
              </div>
            </template>
          </Card>
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
        countList: {
          total: [1, 2, 5, 6, 9, 8, 7, 5, 1]
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
                  fontSize: '24',
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
        exchangeOption: {
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
        },
        classicOption: {
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
            data: ['基础信息', '业务信息', '司法信息', '行政执法信息', '公共事业信息', '信用评级信息', '其他信息']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [1820, 2489, 2034, 1970, 1744, 1230, 1230]
            }
          ]
        },
        trendOption: {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        },
        columns: [
          {
            title: '部门名称',
            key: 'name'
          },
          {
            title: '数量',
            key: 'count'
          },
          {
            title: '入库率',
            key: 'percent'
          }
        ],
        listData: [
          {
            name: '模拟部门名称 1',
            count: '100',
            percent: '10%'
          },
          {
            name: '模拟部门名称 2',
            count: '100',
            percent: '10%'
          },
          {
            name: '模拟部门名称 3',
            count: '100',
            percent: '10%'
          },
          {
            name: '模拟部门名称 4',
            count: '100',
            percent: '10%'
          },
          {
            name: '模拟部门名称 5',
            count: '100',
            percent: '10%'
          },
          {
            name: '模拟部门名称 6',
            count: '100',
            percent: '10%'
          },
          {
            name: '模拟部门名称 7',
            count: '100',
            percent: '10%'
          },
          {
            name: '模拟部门名称 8',
            count: '100',
            percent: '10%'
          }
        ]
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
    .page-body-wrapper
      flex: 1
      display flex
      overflow hidden
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
        display flex
        flex-direction column
        height: 100%

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

        .chart
          flex: 1
          padding-bottom: 20px

      .model-container
        top: 40%
      .count-list
        position absolute
        width: 100%
        height: 600px
        top: 36%
        left: 50%
        transform translate(-50%, -50%)

        .total-wrapper
          display flex
          justify-content center

          .title
            display inline-block
            color #fff
            font-size: 26px
            line-height: 70px

          .num-list-item
            display inline-block
            text-align center
            line-height: 70px
            font-size: 46px
            margin-right: 10px
            width: 60px
            -webkit-background-size: 100% 100%
            background-size: 100% 100%
            height: 70px
            color #41f2e2
            background-repeat: no-repeat
            background-image: url('~@/assets/images/overview/no_bg.png')

        .count-wrapper
          .couple-row
            padding-top: 70px
            height: 120px

            &:nth-child(1)
              width 800px

            &:nth-child(2)
              width 950px

            &:nth-child(3)
              width 800px

            .item
              width 150px
              height: 70px
              padding 12px 20px
              background-color: rgba(5, 37, 55, 0.8)
              box-shadow 1px 1px 2px rgba(0, 0, 0, 0.5)

              span
                font-size: 14px
                color #fff

      .red-black-list
        width 100%
        height: 292px
        padding-bottom: 20px
        position absolute
        bottom: 0
        left: 0

        .list-inner-wrapper
          .list-item
            width 48%

            .item-title
              color #fff
              background-color: rgba(0, 33, 47, 0.8)
              width 200px
              text-align center
              margin 0 auto
              border: 1px solid rgba(255, 255, 255, 0.1)
              height: 40px
              line-height: 40px
              margin-bottom: 10px

              .red-title
                color #f52a6c

            .list-box
              .box
                width 45%
                box-sizing border-box
                padding 10px 20px
                padding-left: 50px
                position relative
                z-index 1
                background-image: url('~@/assets/images/overview/md_bg.png')
                background-repeat: no-repeat
                background-size: 100% 100%;
                margin 0 20px 10px 0

                span
                  position relative
                  z-index 1
                  color #fff

              .red
                &:nth-child(1)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon01.png')

                &:nth-child(2)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon02.png')

                &:nth-child(3)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon03.png')

                &:nth-child(4)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon03.png')

              .black
                &:nth-child(1)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon01.png')

                &:nth-child(2)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon02.png')

                &:nth-child(3)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon03.png')

                &:nth-child(4)
                  &:before
                    content ''
                    display block
                    width: 100%
                    height: 100%
                    position absolute
                    top: 15px
                    left: 20px
                    z-index 0
                    background-repeat: no-repeat
                    background-image: url('~@/assets/images/overview/md_icon03.png')
      .overview-classic
        .info-bar
          display flex
          .info-item
            flex: 1
            margin 0 10px
            display flex
            flex-direction column
            color #fff
            background-color: #011e2c
      .overview-dept
        >>>.bin-table th, >>>.bin-table td
          height: 32px
        >>>.bin-table th, >>>.bin-table td, >>>.bin-table
          background-color: transparent
        >>>.bin-table-cell
          color #fff
</style>
