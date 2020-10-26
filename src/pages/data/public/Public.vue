<template>
  <div class="public">
    <div class="header"><i>双公示专题</i></div>
    <div flex>
      <SidePanel>
        <template #content>
          <Card>
            <template #title>
              部门双公示数据统计情况
            </template>
            <template #content>
              <div class="table-wrapper" flex="wrap justify:between">
                <span>部门名称</span>
                <span>数量（条）</span>
                <span>入库率</span>
              </div>
              <swiper :options="swiperOptions"
                      style="height: 160px; overflow: hidden">
                <swiper-slide class="swiper-item"
                              v-for="(item, index) in subList"
                              :key="index"
                              flex="wrap justify:between">
                  <span>{{item.name}}</span>
                  <span>{{item.count}}</span>
                  <span class="percent">{{item.percent}}</span>
                </swiper-slide>
              </swiper>
            </template>
          </Card>
          <Card>
            <template #title>
              双公示数据7天提报率
            </template>
            <template #content>
              <chart theme="westeros" :options="submitBarOptions" style="width: 100%; height: 200px;"></chart>
            </template>
          </Card>
        </template>
      </SidePanel>
      <CenterPanel>
        <template #content>
          <div class="center-board">
            <Pyramid class="center-3d-bg" />
          </div>
          <Card>
            <template #title>
              双公示采集情况
            </template>
            <template #content>
              <chart style="width: 100%; height: 190px;"
                     theme="westeros"
                     :options="resLineOptions"></chart>
            </template>
          </Card>
        </template>
      </CenterPanel>
      <SidePanel>
        <template #content>
          <Card style="margin-bottom: 10px;">
            <template #title>
              一周新增
            </template>
            <template #content>
              <div class="week-data" flex>
                <div class="inner-container" flex="align:center">
                  <div class="icon-container"><i class="iconfont icon-gongshixuke" style="font-size: 32px"></i></div>
                  <div flex="dir:col">
                    <span><i class="sub">行政许可数量</i></span>
                    <span><i class="num">3500</i><i class="unit">(条)</i></span>
                  </div>
                </div>
                <div class="inner-container" flex="align:center">
                  <div class="icon-container" ><i class="iconfont icon-winfo-icon-hangzhengchufa"></i></div>
                  <div flex="dir:col">
                    <span><i class="sub">行政处罚数量</i></span>
                    <span><i class="num">3500</i><i class="unit">(条)</i></span>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card style="margin-bottom: 10px;">
            <template #title>
              处罚修复数据统计
            </template>
            <template #content>
              <chart theme="westeros" :options="repairBarOptions" style="width: 100%; height: 200px;"></chart>
            </template>
          </Card>
          <Card>
            <template #title>
              行政许可种类分布
            </template>
            <template #content>
              <chart theme="westeros" :options="resPieOptions" style="width: 100%; height: 200px;"></chart>
            </template>
          </Card>
        </template>
      </SidePanel>
    </div>
  </div>
</template>

<script>
  import Pyramid from '../../../components/Animation3D/Pyramid'
  import SidePanel from '../../../components/Panel/SidePanel'
  import CenterPanel from '../../../components/Panel/CenterPanel'
  import Card from '../../../components/Card/Card'
  import { graphic } from 'echarts'
  export default {
    name: 'Public',
    data() {
      return {
        swiperOptions: {
          direction: 'vertical',
          loop: true,
          slidesPerView: 6
        },
        resLineOptions: {
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
            top: '12%',
            bottom: '30%'
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
        subList: [
          { name: '模拟部门1', count: 123456, percent: '90%' },
          { name: '模拟部门2', count: 123456, percent: '90%' },
          { name: '模拟部门3', count: 123456, percent: '90%' },
          { name: '模拟部门4', count: 123456, percent: '90%' },
          { name: '模拟部门5', count: 123456, percent: '90%' },
          { name: '模拟部门6', count: 123456, percent: '90%' },
          { name: '模拟部门7', count: 123456, percent: '90%' },
          { name: '模拟部门8', count: 123456, percent: '90%' },
          { name: '模拟部门9', count: 123456, percent: '90%' },
          { name: '模拟部门10', count: 123456, percent: '90%' },
          { name: '模拟部门11', count: 123456, percent: '90%' },
          { name: '模拟部门12', count: 123456, percent: '90%' }
        ],
        submitBarOptions: {
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          },
          yAxis: {
            type: 'value'
          },
          grid: {
            top: '16%',
            bottom: '16%'
          },
          series: [{
            data: [120, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            barWidth: 20,
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#4fcbfe'
              }, {
                offset: 1,
                color: '#1c62dc'
              }])
            }
          }]
        },
        repairBarOptions: {
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          },
          yAxis: {
            type: 'value'
          },
          grid: {
            top: '16%',
            bottom: '16%'
          },
          series: [{
            data: [120, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            barWidth: 20,
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#4fcbfe'
              }, {
                offset: 1,
                color: '#1c62dc'
              }])
            }
          }]
        },
        resPieOptions: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
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
                { value: 235, name: '基本信息' },
                { value: 210, name: '业务信息' },
                { value: 234, name: '司法信息' },
                { value: 135, name: '行政执法信息' },
                { value: 135, name: '信用评价信息' },
                { value: 135, name: '公共事业信息' },
                { value: 154, name: '其他信息' }
              ]
            },
            {
              type: 'pie',
              radius: ['0', '40%'],
              avoidLabelOverlap: false,
              label: {
                position: 'center',
                color: '#ffffff'
              },
              data: [
                { value: 1000, name: '自然人' }
              ]
            }
          ]
        }
      }
    },
    components: {
      Pyramid, SidePanel, CenterPanel, Card
    }
  }
</script>

<style lang="stylus" scoped>
.public
  height: 100%
  .center-board
    height: 431px
    overflow hidden
    position relative
    .center-3d-bg
      position absolute
      top: 50%
      left: 50%
      transform translate(-50%, -50%)
.table-wrapper
  background-color: rgba(15,60,150,0.4)
  height: 31px
  line-height: 31px
  span
    flex: 1
    text-align center
.swiper-item
  line-height: 30px
  &:nth-child(even)
    background-color: rgba(15,60,150,0.4)
  span
    flex: 1
    text-align center
    &:nth-child(3)
      color: #17C2EA;
.week-data
  .inner-container
    width: 50%
    .icon-container
      display block
      width: 40px
      height: 40px
      margin-right: 10px
      line-height: 40px
      text-align center
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      border: 1px dashed rgba(20, 190, 230, 0.8)
      background-image: radial-gradient(rgba(20, 190, 230, 0.8) 20%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1) 80%)
      .iconfont
        font-size 26px
</style>
