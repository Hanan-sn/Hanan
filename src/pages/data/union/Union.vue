<template>
  <div class="union" flex>
    <SidePanel>
      <template #content>
        <Card>
          <template #title>
            联合奖惩基本情况
          </template>
          <template #content>
            <div class="inner-wrapper">
              <div class="row" flex>
                <div class="cell" flex="dir:col">
                  <span><i>总计奖惩</i></span>
                  <span><i class="num">1000</i><i>（个）</i></span>
                </div>
                <div class="cell" flex="dir:col">
                  <span><i>总计奖惩</i></span>
                  <span><i class="num">1000</i><i>（个）</i></span>
                </div>
                <div class="cell" flex="dir:col">
                  <span><i>总计奖惩</i></span>
                  <span><i class="num">1000</i><i>（个）</i></span>
                </div>
              </div>
              <div class="row" flex>
                <div class="cell" flex="dir:col align:center">
                  <span><i>自然人</i></span>
                  <span><i class="num">20000</i><i>（个）</i></span>
                </div>
                <div class="cell" flex="dir:col">
                  <span flex="justify:around"><i>激励</i><i class="num">10000</i><i>（个）</i></span>
                  <span flex="justify:around"><i>惩戒</i><i class="num">10000</i><i>（个）</i></span>
                </div>
              </div>
              <div class="row" flex>
                <div class="cell" flex="dir:col align:center">
                  <span flex="justify:center"><i>法人</i></span>
                  <span><i class="num">20000</i><i>（个）</i></span>
                </div>
                <div class="cell" flex="dir:col">
                  <span flex="justify:around"><i>激励</i><i class="num">10000</i><i>（个）</i></span>
                  <span flex="justify:around"><i>惩戒</i><i class="num">10000</i><i>（个）</i></span>
                </div>
              </div>
            </div>
          </template>
        </Card>
        <Card style="flex: 1;" class="special-card">
          <template #title>
            红黑名单统计
          </template>
          <template #content>
            <div class="inner-wrapper">
              <div class="red-list">
                <i style="color:orangered;">红名单</i>
                <i class="num">145315</i>
                <i class="unit">（个）</i>
              </div>
              <div class="row" flex>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-renzheng"></i>
                  <div flex="dir:col">
                    <span class="label"><i>海关认证企业</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-zhiyuan"></i>
                  <div flex="dir:col">
                    <span class="label"><i>A级纳税人</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
              </div>
              <div class="row" flex>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-chengxin"></i>
                  <div flex="dir:col">
                    <span class="label"><i>社会法人诚实守信</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-wj-zyzdj"></i>
                  <div flex="dir:col">
                    <span class="label"><i>优秀青年志愿者</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="inner-wrapper">
              <div class="red-list">
                <i>黑名单</i>
                <i class="num">145315</i>
                <i class="unit">（个）</i>
              </div>
              <div class="row" flex>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-shixin"></i>
                  <div flex="dir:col">
                    <span class="label"><i>失信被执行人</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-offence"></i>
                  <div flex="dir:col">
                    <span class="label"><i>重大税收违法案件</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
              </div>
              <div class="row" flex>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-wodegongzi"></i>
                  <div flex="dir:col">
                    <span class="label"><i>拖欠农民工工资</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
                <div class="cell" flex="align:center justify:around">
                  <i class="iconfont icon-shixin"></i>
                  <div flex="dir:col">
                    <span class="label"><i>严重失信债务人</i></span>
                    <span><i class="num">10000</i><i class="unit">（个）</i></span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </template>
    </SidePanel>
    <CenterPanel>
      <template #content>
        <Card style="flex: 1;">
          <template #title>
            联合奖惩趋势分析
          </template>
          <template #content>
            <chart theme="westeros" :options="trendLineOptions" style="width: 100%; flex: 1;"></chart>
          </template>
        </Card>
        <div style="flex: 1;" flex>
          <Card flex="dir:col" style="flex: 1;">
            <template #title>
              各部门奖惩查询次数统计
            </template>
            <template #content>
              <chart theme="westeros" :options="queryBarOptions" style="width: 100%; flex: 1;"></chart>
            </template>
          </Card>
          <Card flex="dir:col" style="flex: 1;">
            <template #title>
              各部门奖惩反馈次数统计
            </template>
            <template #content>
              <chart theme="westeros" :options="queryBarOptions" style="width: 100%; flex: 1;"></chart>
            </template>
          </Card>
        </div>
        <Card style="flex: 1;">
          <template #title>
            备忘录执行趋势分析
          </template>
          <template #content>
            <div style="flex: 1;" flex>
              <chart theme="westeros" :options="memoLineOptions" style="height: 100%; flex: 1"></chart>
              <div style="flex: 1;" flex="dir:col">
                <div class="table-wrapper" flex="wrap justify:between">
                  <span>排名</span>
                  <span>备忘录名称</span>
                  <span>触发次数</span>
                </div>
                <swiper :options="memoSwiperOptions"
                        style="flex: 1; width: 100%; overflow: hidden">
                  <swiper-slide class="swiper-item"
                                v-for="(item, index) in memoList"
                                :key="index"
                                flex="wrap justify:between">
                    <span>{{ index + 1 }}</span>
                    <span>{{ item.name }}</span>
                    <span>{{ item.times }}</span>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </template>
        </Card>
      </template>
    </CenterPanel>
    <SidePanel>
      <template #content>
        <Card style="flex: 1;">
          <template #title>
            奖惩执行情况
          </template>
          <template #content>
            <div class="table-wrapper" flex="wrap justify:between">
              <span>被拦截人</span>
              <span>应用事项</span>
              <span>执行部门</span>
              <span>执行时间</span>
            </div>
            <swiper :options="swiperOptions"
                    style="height: 200px; width: 100%; overflow: hidden">
              <swiper-slide class="swiper-item"
                            v-for="(item, index) in subList"
                            :key="index"
                            flex="wrap justify:between">
                <span>{{ item.name }}</span>
                <span>{{ item.matter }}</span>
                <span>{{ item.dept }}</span>
                <span>{{ item.time }}</span>
              </swiper-slide>
            </swiper>
          </template>
        </Card>
        <Card style="flex: 1;">
          <template #title>
            黑名单退出趋势
          </template>
          <template #content>
            <chart theme="westeros" :options="quitLineOptions" style="width: 100%; flex: 1"></chart>
          </template>
        </Card>
        <Card style="flex: 1;">
          <template #title>
            处置措施TOP10
          </template>
          <template #content>
            <chart theme="westeros" :options="manageLineOptions" style="width: 100%; flex: 1"></chart>
          </template>
        </Card>
      </template>
    </SidePanel>
  </div>
</template>

<script>
import SidePanel from '../../../components/Panel/SidePanel'
import CenterPanel from '../../../components/Panel/CenterPanel'
import Card from '../../../components/Card/Card'
import { graphic } from 'echarts'

export default {
  name: 'Union',
  data() {
    return {
      subList: [
        { dept: '模拟部门1', matter: '房产交易', name: '李寻欢', time: '2020-01-21' },
        { dept: '模拟部门2', matter: '商业交易', name: '李自成', time: '2020-02-21' },
        { dept: '模拟部门3', matter: '房产交易', name: '荆轲', time: '2020-03-21' },
        { dept: '模拟部门4', matter: '商业交易', name: '聂隐娘', time: '2020-04-21' },
        { dept: '模拟部门5', matter: '房产交易', name: '陈家洛', time: '2020-05-21' },
        { dept: '模拟部门6', matter: '商业交易', name: '杜心五', time: '2020-06-21' },
        { dept: '模拟部门7', matter: '房产交易', name: '聂政', time: '2020-07-21' }
      ],
      memoList: [
        { name: '房产交易水电费', times: 10 },
        { name: '房产交易物业费', times: 10 },
        { name: '房产交易煤气费', times: 10 },
        { name: '规划方案', times: 10 },
        { name: '车辆交易', times: 10 },
        { name: '土地使用权交易', times: 10 }
      ],
      swiperOptions: {
        direction: 'vertical',
        loop: true,
        slidesPerView: 6
      },
      memoSwiperOptions: {
        direction: 'vertical',
        loop: true,
        slidesPerView: 6
      },
      trendLineOptions: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          bottom: '4%',
          data: ['自然人', '法人及其他组织']
        },
        grid: {
          top: 40,
          bottom: 80
        },
        series: [
          {
            name: '自然人',
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line',
            areaStyle: {}
          },
          {
            name: '法人及其他组织',
            data: [920, 1032, 1001, 1034, 1190, 1130],
            type: 'line',
            areaStyle: {}
          }
        ]
      },
      queryBarOptions: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '6%',
          right: '8%',
          bottom: 20,
          top: 20,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['部门名称1', '部门名称2', '部门名称3', '部门名称4', '部门名称5', '部门名称6']
        },
        barWidth: 12,
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
              barBorderRadius: 6,
              color: new graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  { offset: 0, color: '#3A79F9' },
                  { offset: 1, color: '#204FA7' }
                ]
              )
            }
          }
        ]
      },
      memoLineOptions: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      },
      quitLineOptions: {
        grid: {
          left: '16%',
          right: '8%',
          top: 20,
          bottom: 20
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      },
      manageLineOptions: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '6%',
          right: '8%',
          bottom: 20,
          top: 20,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['部门名称1', '部门名称2', '部门名称3', '部门名称4', '部门名称5', '部门名称6']
        },
        barWidth: 12,
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
              barBorderRadius: 6,
              color: new graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  { offset: 0, color: '#3A79F9' },
                  { offset: 1, color: '#204FA7' }
                ]
              )
            }
          }
        ]
      }
    }
  },
  components: {
    SidePanel,
    CenterPanel,
    Card
  }
}
</script>

<style lang="stylus" scoped>
.union
  box-sizing border-box
  padding-top: 10px
  height: 100%
  .special-card
    >>>.card-content
      display flex
      flex-direction column
      justify-content space-around
  .inner-wrapper
    margin-bottom: 20px
    .red-list, .black-list
      background-color: #22408e
      width: 220px
      margin: 0 auto
      padding 6px 10px
      display flex
      justify-content space-around
      align-items center
      margin-bottom: 20px
    .row
      margin-bottom: 8px
      .cell
        flex: 1
        padding: 4px 10px
        background-color: #305DD2
        margin-right: 6px
        &:last-child
          margin-right: 0
        .label
          display block
          width: 130px
  .swiper-item
    &:nth-child(odd)
      background-color: transparent
    &:nth-child(even)
      background-color: #103c95
    span
      &:nth-child(3)
        color: #ffffff;
</style>
