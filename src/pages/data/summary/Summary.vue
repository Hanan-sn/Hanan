<template>
  <div class="summary" flex>
    <!--<SpritModel />-->
    <SidePanel>
      <template #content>
        <Card style="margin-bottom: 10px;">
          <template #title>
            联合奖惩
          </template>
          <template #content>
            <div class="inner-wrapper" flex>
              <div class="count-card" flex="dir:col align:center" style="margin-right: 8px;">
                <span><i class="iconfont icon-shujuku"></i></span>
                <span><i class="sub">归集数量</i><i class="unit">(个)</i></span>
                <span><i class="num">5600</i></span>
              </div>
              <div class="count-card" flex="dir:col align:center" style="margin-right: 8px;">
                <span><i class="iconfont icon-kehushangbao"></i></span>
                <span><i class="sub">上报数据量</i><i class="unit">(个)</i></span>
                <span><i class="num">1000</i></span>
              </div>
              <div class="count-card" flex="dir:col align:center">
                <span><i class="iconfont icon-jiaohuan"></i></span>
                <span><i class="sub">回流数据量</i><i class="unit">(个)</i></span>
                <span><i class="num">100</i></span>
              </div>
            </div>
          </template>
        </Card>
        <Card style="margin-bottom: 10px; flex: 1;">
          <template #title>
            资源信息分类统计
          </template>
          <template #content>
            <div class="inner-wrapper" flex>
              <div class="count-card" flex="dir:col align:center" style="margin-right: 8px;">
                <span><i class="sub">一级分类</i><i class="unit">(个)</i></span>
                <span><i class="num">5600</i></span>
              </div>
              <div class="count-card" flex="dir:col align:center" style="margin-right: 8px;">
                <span><i class="sub">二级分类</i><i class="unit">(个)</i></span>
                <span><i class="num">1000</i></span>
              </div>
              <div class="count-card" flex="dir:col align:center" style="margin-right: 8px;">
                <span><i class="sub">资源数</i><i class="unit">(个)</i></span>
                <span><i class="num">1000</i></span>
              </div>
              <div class="count-card" flex="dir:col align:center">
                <span><i class="sub">部门数</i><i class="unit">(个)</i></span>
                <span><i class="num">100</i></span>
              </div>
            </div>
            <chart theme="westeros" :options="resBarOptions" style="width: 100%; flex: 1;"></chart>
          </template>
        </Card>
        <Card style="margin-bottom: 10px;">
          <template #title>
            部门数据归集分类统计
          </template>
          <template #content>
            <div class="table-wrapper" flex="wrap justify:between">
              <span>部门名称</span>
              <span>数量（条）</span>
              <span>入库率</span>
            </div>
            <swiper :options="swiperOptions"
                    style="height: 160px; width: 100%; overflow: hidden">
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
      </template>
    </SidePanel>
    <CenterPanel>
      <template #content>
        <div class="msg-wrapper">

        </div>
        <Card style="height: 270px; margin-bottom: 10px;">
          <template #title>资源信息归集趋势</template>
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
        <Card style="flex: 1;">
          <template #title>
            数据归集来源对比
          </template>
          <template #content>
            <chart style="width: 100%; flex: 1;"
                   theme="westeros"
                   :options="resRoseOptions"></chart>
          </template>
        </Card>
        <Card style="flex: 1;">
          <template #title>
            数据提报部门
          </template>
          <template #content>
            <chart theme="westeros" :options="resPieOptions" style="width: 100%; flex: 1;"></chart>
          </template>
        </Card>
        <Card>
          <template #title>
            数据提报部门
          </template>
          <template #content>
            <div class="table-wrapper" flex="wrap justify:between">
              <span>部门名称</span>
              <span>数量(个)</span>
              <span>入库率</span>
            </div>
            <swiper :options="swiperOptions"
                    style="height: 160px; width: 100%; overflow: hidden">
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
      </template>
    </SidePanel>
  </div>
</template>

<script>
  import Card from '../../../components/Card/Card'
  import SidePanel from '../../../components/Panel/SidePanel'
  import CenterPanel from '../../../components/Panel/CenterPanel'
  export default {
    name: 'Summary',
    data() {
      return {
        swiperOptions: {
          direction: 'vertical',
          loop: true,
          slidesPerView: 6
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
        resBarOptions: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: '16%',
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
              data: [18203, 23489, 29034, 42034, 104970, 131744, 630230]
            }
          ]
        },
        resRoseOptions: {
          tooltip: {
            trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                { value: 335, name: '手工填报' },
                { value: 310, name: '内部接口' },
                { value: 274, name: 'etl对接' },
                { value: 235, name: '其他' }
              ],
              roseType: 'radius',
              labelLine: {
                smooth: 0.2,
                length: 10,
                length2: 20
              },
              animationType: 'scale',
              animationEasing: 'elasticOut'
            }
          ]
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
        }
      }
    },
    components: {
      Card,
      SidePanel,
      CenterPanel
    }
  }
</script>

<style lang="stylus" scoped>
.summary
  flex: 1
  box-sizing border-box
  .count-card
    flex: 1
    background-color: #173E8D
    padding: 6px 0
  .inner-wrapper
    .iconfont
      font-size 28px
      color: #17C2EA
  .msg-wrapper
    flex: 1

</style>
