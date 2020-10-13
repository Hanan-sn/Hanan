<template>
  <div class="union" flex="dir:col">
    <div class="page-title-wrapper">
      <span class="header-title">
        <i>联合奖惩专题</i>
      </span>
    </div>
    <div class="page-body-wrapper" flex>
      <SidePanel>
        <template slot="inner">
          <Card>
            <template slot="title">
              <i class="card-title-font">联合奖惩基本情况</i>
            </template>
            <template slot="content">
              <div class="union-base">
                <div class="row" flex="justify:between">
                  <div class="item" flex="dir:col">
                    <span><i>总计奖惩</i></span>
                    <span><i class="num">3000</i><i>（次）</i></span>
                  </div>
                  <div class="item" flex="dir:col">
                    <span><i>总计奖惩</i></span>
                    <span><i class="num">3000</i><i>（次）</i></span>
                  </div>
                  <div class="item" flex="dir:col">
                    <span><i>总计奖惩</i></span>
                    <span><i class="num">3000</i><i>（次）</i></span>
                  </div>
                </div>
                <div class="row" flex="justify:between">
                  <div class="item" flex="dir:col">
                    <span><i>自然人</i></span>
                    <span><i class="num">10000</i><i>（个）</i></span>
                  </div>
                  <div class="item">
                    <div class="inner-cell">
                      <i class="label">激励</i>
                      <i class="num">10000</i>
                      <i>（次）</i>
                    </div>
                    <div class="inner-cell">
                      <i class="label">惩戒</i>
                      <i class="num">10000</i>
                      <i>（次）</i>
                    </div>
                  </div>
                </div>
                <div class="row" flex="justify:between">
                  <div class="item" flex="dir:col">
                    <span><i>自然人</i></span>
                    <span><i class="num">10000</i><i>（个）</i></span>
                  </div>
                  <div class="item">
                    <div class="inner-cell">
                      <i class="label">激励</i>
                      <i class="num">10000</i>
                      <i>（次）</i>
                    </div>
                    <div class="inner-cell">
                      <i class="label">惩戒</i>
                      <i class="num">10000</i>
                      <i>（次）</i>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">各部门奖惩查询次数统计</i>
            </template>
            <template slot="content">
              <div class="union-query">
                <div class="chart">
                  <v-chart :options="queryOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">各部门奖惩反馈次数统计</i>
            </template>
            <template slot="content">
              <div class="union-feedback">
                <div class="chart">
                  <v-chart :options="feedbackOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
        </template>
      </SidePanel>
      <MiddlePanel>
        <template slot="inner">
          <Card>
            <template slot="title">
              <i class="card-title-font">红黑名单统计</i>
            </template>
            <template slot="content">
              <div class="union-statistic">
                <!--红黑名单统计statistic-->
                <div class="inner" flex="justify:between">
                  <div class="item">
                    <div class="title">
                      <span>
                        <i class="red">红名单</i>
                        <i class="num">123456</i>
                        <i>（个）</i>
                      </span>
                    </div>
                    <div class="list" flex="justify:between wrap:yes">
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>海关认证企业</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>A级纳税人</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>社会法人诚实守信</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>优秀青年志愿者</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="title">
                      <span>
                        <i class="" style="margin-right: 20px;">黑名单</i>
                        <i class="num">123456</i>
                        <i>（个）</i>
                      </span>
                    </div>
                    <div class="list" flex="justify:between wrap:yes">
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>失信被执行人</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>重大税收违法案件</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>拖欠农民工工资</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="inner-content" flex="dir:col">
                          <span>
                            <i>严重失信债务人</i>
                          </span>
                          <span>
                            <i class="num">12345</i>
                            <i>（个）</i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">联合奖惩趋势分析</i>
            </template>
            <template slot="content">
              <div class="union-trend">
                <v-chart :options="trendOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">红名单行业分布</i>
            </template>
            <template slot="content">
              <div class="union-distribute" flex="justify:between">
                <div class="item">
                  <v-chart :options="distributeOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
                <div class="item">
                  <v-chart :options="distributeOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
                </div>
              </div>
            </template>
          </Card>
        </template>
      </MiddlePanel>
      <SidePanel>
        <template slot="inner">
          <Card>
            <template slot="title">
              <i class="card-title-font">奖惩执行情况</i>
            </template>
            <template slot="content">
              <div class="union-execute">
                <v-chart :options="quitOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>

              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">黑名单退出趋势</i>
            </template>
            <template slot="content">
              <div class="union-quit">
                <v-chart :options="quitOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">处置措施TOP10</i>
            </template>
            <template slot="content">
              <div class="measure">
                <v-chart :options="measureOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
              </div>
            </template>
          </Card>
        </template>
      </SidePanel>
    </div>
  </div>
</template>

<script>
  import SidePanel from '../../../components/SidePanel/SidePanel'
  import MiddlePanel from '../../../components/MiddlePanel/MiddlePanel'
  import Card from '../../../components/Card/Card'
  import { graphic } from 'echarts'

  export default {
    name: 'Union',
    data() {
      return {
        queryOption: {
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
            data: ['部门名称1', '部门名称2', '部门名称3', '部门名称4', '部门名称5', '部门名称6', '部门名称7']
          },
          series: [
            {
              barWidth: 12,
              itemStyle: {
                barBorderRadius: 6,
                color: new graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(46, 199, 201, 0.4)'
                }, {
                  offset: 1,
                  color: 'rgba(46, 199, 201, 1)'
                }])
              },
              type: 'bar',
              data: [1820, 2489, 2034, 1970, 1744, 1230, 1230]
            }
          ]
        },
        feedbackOption: {
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
            data: ['部门名称1', '部门名称2', '部门名称3', '部门名称4', '部门名称5', '部门名称6', '部门名称7']
          },
          series: [
            {

              barWidth: 12,
              itemStyle: {
                barBorderRadius: 6,
                color: new graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(46, 199, 201, 0.4)'
                }, {
                  offset: 1,
                  color: 'rgba(46, 199, 201, 1)'
                }])
              },
              name: '2011年',
              type: 'bar',
              data: [1820, 2489, 2034, 1970, 1744, 1230, 1230]
            }
          ]
        },
        quitOption: {
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
            smooth: false,
            areaStyle: {}
          }]
        },
        measureOption: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: 0,
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
            show: false,
            data: ['基础信息', '业务信息', '司法信息', '行政执法信息', '公共事业信息', '信用评级信息', '其他信息']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [1820, 2489, 2034, 1970, 1744, 1230, 1230],
              barWidth: 12,
              label: {
                show: true,
                position: [14, -10],
                color: '#fff',
                formatter: (p) => p.name
              },
              itemStyle: {
                color: new graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(46, 199, 201, 0.4)'
                }, {
                  offset: 1,
                  color: 'rgba(46, 199, 201, 1)'
                }])
              }
            }
          ]
        },
        trendOption: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['惩戒', '激励']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '惩戒',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '激励',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        },
        distributeOption: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: ['金融', '保险', '建筑', '环保', '其他']
          },
          series: [
            {
              name: '行业类型',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 335, name: '金融' },
                { value: 310, name: '保险' },
                { value: 234, name: '建筑' },
                { value: 135, name: '环保' },
                { value: 1548, name: '其他' }
              ]
            }
          ]
        }
      }
    },
    components: {
      MiddlePanel, SidePanel, Card
    }
  }
</script>

<style lang="stylus" scoped>
  .union
    .union-base
      color #fff

      .row
        margin-bottom: 10px

        .item
          background-color: #062738
          padding 10px 10px

        &:nth-child(1)
          .item
            flex: 1
            margin-right 10px

            &:last-child
              margin-right: 0

        &:nth-child(n + 2)
          .item:first-child
            width: 150px
            margin-right: 10px

          .item:last-child
            flex 1
            text-align center

            .label
              margin-right: 30px

    .union-statistic
      .inner
        .item
          width: 49%

          .title
            padding-bottom: 10px
            text-align center

            span
              display inline-block
              background-color: #012130
              text-align center
              padding 10px 20px
              border-top: 1px solid #123357
              border-bottom: 1px solid #123357

            .red
              color #f5295c
              margin-right: 20px

          .list
            .inner-box
              width 48%
              padding-top: 20px
              margin-bottom: 10px
              background-repeat: no-repeat
              -webkit-background-size: 100% 100%
              background-size: 100% 100%
              background-image: url('~@/assets/images/overview/md_bg.png')

              .inner-content
                height: 64px
                padding-left: 70px
                background-repeat: no-repeat
                background-position: 20px 12px

              &:nth-child(1)
                .inner-content
                  background-image: url('~@/assets/images/overview/md_icon01.png')

              &:nth-child(2)
                .inner-content
                  background-image: url('~@/assets/images/overview/md_icon01.png')

              &:nth-child(3)
                .inner-content
                  background-image: url('~@/assets/images/overview/md_icon01.png')

              &:nth-child(4)
                .inner-content
                  background-image: url('~@/assets/images/overview/md_icon01.png')

    .union-distribute
      .item
        width: 50%
</style>
