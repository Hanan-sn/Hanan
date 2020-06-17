<template>
  <div class="overview" flex>
    <Panel>
      <template slot="inner">
        <div style="height: 100%" flex="main:justify dir:top">
          <div class="title">全市公务员基本情况</div>
          <div class="count-wrapper">
            <div class="square-bg" style="padding: 0 10px">
              <img src="~@/assets/images/summary/icon_01.png" alt="">
              <span>
                <i class="count-title">全市公务员</i><br>
                <i class="count-title">总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数</i><br>
              </span>
            </div>
            <div class="square-bg" style="flex: 1; padding: 0 10px; line-height: 76px; color: #fff; text-align: right">
              <i>0</i><i>（人）</i>
            </div>
          </div>
          <chart ref="chart1" :options="returnRing(servantChartData)"
                 style="width: 100%; height: 120px;display:block;"></chart>
          <div class="title">公务员分布情况</div>
          <chart ref="chart1" :options="returnPie(servantDistributeChartData)"
                 style="width: 100%; height: 220px;display:block;"></chart>
          <div class="title" flex="main:justify">
            <span>数据报送情况</span>
            <span class="handle-btn" flex>
              <i class="btn" :class="handleBtnTab1 === 0 ? 'active' : ''" @click="handleBtnTab1 = 0">本月</i>
              <i class="btn" :class="handleBtnTab1 === 1 ? 'active' : ''" @click="handleBtnTab1 = 1">本年</i>
              <!--<b-date-picker type="date"
                             :open="dateOpen1"
                             :value="date1"
                             confirm
                             @on-change="handleChange1"
                             @on-clear="handleClear1"
                             @on-ok="handleOk1"
                             placeholder="Select date">
                <a style="display: block;width: 76px;" href="javascript:void(0)" @click="handleClick('dateOpen1')">
                  <template v-if="date1 === ''">选择日期</template>
                  <template v-else>{{ date1 }}</template>
                </a>
              </b-date-picker>-->
            </span>
          </div>
          <chart ref="chart2" :options="returnBar(submission)"
                 style="width: 100%; height: 300px;display:block;"></chart>
        </div>
      </template>
    </Panel>
    <Panel style="padding-left: 0; padding-right: 0;" flex="main:justify dir:top">
      <template slot="outer">
        <div class="inner" style="overflow: hidden; width: 800px">
          <div class="tip-wrapper" flex="space:around">
            <div class="tip-item">
              <div class="tip-item-inner" flex="space:around cross:center">
                <img src="~@/assets/images/summary/icon_zyxx.png" alt="">
                <span class="tip-item-font">
                  <i>资源信息数量</i><br>
                  <i class="num">7,108,657</i><i>（个）</i>
                </span>
              </div>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
            </div>
            <div class="tip-item">
              <div class="tip-item-inner" flex="space:around cross:center">
                <img src="~@/assets/images/summary/icon_sjgj.png" alt="">
                <span class="tip-item-font">
                  <i>资源信息数量</i><br>
                  <i class="num">0</i><i>（个）</i>
                </span>
              </div>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
            </div>
            <div class="tip-item">
              <div class="tip-item-inner" flex="space:around cross:center">
                <img src="~@/assets/images/summary/icon_bygj.png" alt="">
                <span class="tip-item-font">
                  <i>资源信息数量</i><br>
                  <i class="num">187</i><i>（个）</i>
                </span>
              </div>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
            </div>
          </div>

          <div class="map-container">
            <div id="map"></div>
            <div class="mask-cir-container">
              <div class="mask-inner">
                <div class="rotate-cir-1"></div>
                <div class="rotate-cir-2"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="inner">
        <div class="title">数据提报情况</div>
        <div class="red-black-wrapper" flex="space:around">
          <div v-for="(item, index) in submissionList" class="container">
            <div class="red-list">
              <i class="white-font">{{item.name}}</i>
            </div>
            <div class="msg-list" flex="wrap:wrap">
              <div class="msg-list-item" flex style="flex-direction: column">
                <span flex="space:around" style="align-items: center">
                  <p class="white-font">总量</p>
                  <p><i class="num">{{ item.total }}</i></p>
                </span>
                <span flex="space:around" style="align-items: center">
                  <p class="white-font">本月新增</p>
                  <p><i class="num">{{ item.new }}</i></p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Panel>
    <Panel>
      <template slot="inner">
        <div style="height: 100%" flex="main:justify dir:top">
          <div class="title">
            事业单位评价Top100
          </div>
          <div class="dept-list" style="margin-bottom: 10px;">
            <div class="header-wrapper" flex="main:justify">
              <span class="list-header" flex-box="1">单位名称</span>
              <span class="list-header" style="width: 120px;">等级</span>
            </div>
            <div class="body-wrapper" flex="main:justify" v-for="(item, index) in evaluateDeptList" :key="index">
              <span flex-box="1">{{item.name}}</span>
              <span style="width: 120px;">{{item.lv}}</span>
            </div>
          </div>
          <div class="title" style="margin-top: 10px;" flex="main:justify">
            <span>事业单位评价情况</span>
            <!--<span class="handle-btn" flex>
              <i class="btn" :class="handleBtnTab2 === 0 ? 'active' : ''" @click="handleBtnTab2 = 0">本月</i>
              <i class="btn" :class="handleBtnTab2 === 1 ? 'active' : ''" @click="handleBtnTab2 = 1">本年</i>
              &lt;!&ndash;<b-date-picker type="date"
                             :open="dateOpen2"
                             :value="date2"
                             confirm
                             @on-change="handleChange2"
                             @on-clear="handleClear2"
                             @on-ok="handleOk2"
                             placeholder="Select date">
                <a style="display: block;width: 76px;"
                   href="javascript:void(0)"
                   @click="handleClick('dateOpen2')">
                  <template v-if="date2 === ''">选择日期</template>
                  <template v-else>{{ date2 }}</template>
                </a>
              </b-date-picker>&ndash;&gt;
            </span>-->
          </div>
          <chart ref="chart2" :options="reBarChart(evaluateDept)"
                 style="width: 100%; height: 320px;display:block;"></chart>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china'
  import Panel from '../../../components/Panel/Panel'
  // import RangeSelect from '../../../components/RangeSelect/RangeSelect'
  import { mapState } from 'vuex'
  // 统一变量
  const xyLineColor = '#535e83'
  const splitLineColor = '#283353'
  export default {
    name: 'Affair',
    data() {
      return {
        evaluateDept: [
          ['product', '数量'],
          ['A', 748],
          ['B', 3],
          ['C', 0]
        ],
        submissionList: [
          {name:'机关单位登记（变更）',total:187,new:187},
          {name:'事业单位登记（变更）',total:0,new:0},
          {name:'事业单位评价',total:753,new:753},
          {name:'公务人员基本信息',total:0,new:0},
        ],
        color: ['#1167e2', '#4dcea7', '#fc9530', '#ff3b3c', '#563cff', '#0fbce0', '#0c31e2'],
        // 左右侧时间选择
        handleBtnTab1: 0,
        handleBtnTab2: 0,
        date1: '',
        date2: '',
        dateOpen1: false,
        dateOpen2: false,

        // 动态数据
        countNumList: [0, 8, 7, 2, 0, 0, 1, 6], // 归集总量
        redList: { signCom: 0, taxpayer: 0, corp: 0, volunteer: 0 }, // 红名单
        blackList: { performed: 0, case: 0, unpaid: 0, lose: 0 }, // 黑名单
        classStatistic: {
          lv1: 8,
          lv2: 40,
          resourceCount: 57,
          deptCount: 55,
          chartData: [
            ['product', '信息量'],
            ['基础信息', 4794115],
            ['业务信息', 1883668],
            ['行政执法信息', 1685166],
            ['政务信息', 2067],
            ['司法信息', 0],
            ['公共事业信息', 0],
            ['信用评级信息', 0],
            ['其他信息', 0]
          ]
        }, // 资源信息分类统计
        trendAnalysis: [
          { product: '1月', count: 0 },
          { product: '2月', count: 0 },
          { product: '3月', count: 0 },
          { product: '4月', count: 0 },
          { product: '5月', count: 0 },
          { product: '6月', count: 0 },
          { product: '7月', count: 0 },
          { product: '8月', count: 0 },
          { product: '9月', count: 0 },
          { product: '10月', count: 0 },
          { product: '11月', count: 0 },
          { product: '12月', count: 0 }
        ],
        submitDeptList: [
          { name: '镇江市', count: 6834299, percent: '78%' },
          { name: '扬中市人社局', count: 1883650, percent: '22%' },
          { name: '市编办', count: 2067, percent: '0%' },
          { name: '市农业农村局', count: 0, percent: '0%' },
          { name: '市教育局', count: 0, percent: '0%' },
          { name: '市卫健委', count: 0, percent: '0%' },
          { name: '市审计局', count: 0, percent: '0%' },
          { name: '市政务服务办', count: 0, percent: '0%' },
          { name: '市市场监督管理局', count: 0, percent: '0%' }
        ],
        evaluateDeptList: [
          { name: '镇江市财政干部培训中心', lv: 'A' },
          { name: '镇江市标准化研究中心', lv: 'A' },
          { name: '镇江消费报社', lv: 'A' },
          { name: '江苏科技大学海洋装备研究院', lv: 'A' },
          { name: '镇江市殡葬管理处', lv: 'A' },
          { name: '镇江市公共信用信息中心', lv: 'A' },
          { name: '长江镇江航道处', lv: 'A' },
          { name: '京口区江苏大学社区卫生服务站', lv: 'A' },
          { name: '镇江市消费者申诉举报受理中心', lv: 'A' },
          { name: '江苏省丹徒中等专业学校', lv: 'A' },
        ],
        servantChartData: [
          { value: 0, name: '行政编制' },
          { value: 0, name: '事业编制' },
          { value: 0, name: '其他' }
        ],
        servantDistributeChartData:{
          inner: [
            { value: 0, name: '总数' }
          ],
          outer: [
            { value: 0, name: '基本信息' },
            { value: 0, name: '业务信息' },
            { value: 0, name: '司法信息' },
            { value: 0, name: '行政执法信息' },
            { value: 0, name: '信用评价信息' },
            { value: 0, name: '公共事业信息' },
            { value: 0, name: '其他信息' }
          ],
        },
        submission: [
          ['product', '信息类别'],
          ['公务员（含参公事业编）基本信息（变更）', '0'],
          ['机关单位登记（变更）信息', '0'],
          ['事业单位登记（变更）信息', '0'],
          ['事业单位（变更）信息', '0'],
        ]
      }
    },
    components: {
      Panel
      // RangeSelect
    },
    created() {
      // this.initData()
    },
    mounted(){
      this.renderMap({ id: 'map' })
    },
    computed: {
      ...mapState({
        union: state => state.union,
        exchangeData: state => state.exchangeData
      })
    },
    watch: {
      date1: function (n, o) {
        // console.log(n)
        if (n !== '') {
          this.handleBtnTab1 = 2
        }
      },
      handleBtnTab1: function (n) {
        switch (n) {
          case 0:
            // this.setExchangeData('本月')
            this.date1 = ''
            break
          case 1:
            // this.setExchangeData('本年')
            this.date1 = ''
            break
        }
      },
      handleBtnTab2: function (n, o) {
        switch (n) {
          case 0:
            // this.setExchangeData('本月')
            break
          case 1:
            // this.setExchangeData('本年')
            break
        }
      }
    },
    methods: {
      initData() {
        this.$store.dispatch('getOverviewExchangeData').then((res) => {
          // console.log(res)
          // _self.dataExchange = JSON.parse(JSON.stringify(res.data))
        })
        this.$store.dispatch('getOverviewUnionData').then((res)=>{
          // console.log(res)
          // _self.union = JSON.parse(JSON.stringify(res.data))
        })
      },
      reDeptBarChart(data) {
        return {
          color: '#00abfb',
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '10%',
            bottom: 0,
            top: '12%',
            containLabel: true
          },
          dataset: {
            source: data
          },
          xAxis: {
            boundaryGap: [0, 0.01],
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            },
            // axisTick: { show: false },
            splitLine: { show: false }
          },
          yAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            },
            axisTick: {}
          },
          series: [
            {
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                barBorderRadius: 8
              }
            }
          ]
        }
      },
      reBarChart(data) {
        return {
          color: '#00abfb',
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '3%',
            bottom: '10%',
            top: '12%',
            containLabel: true
          },
          dataset: {
            source: data
          },
          xAxis: {
            name: '（等级）',
            type: 'category',
            boundaryGap: [0, 0.01],
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            },
            axisTick: { show: false },
            splitLine: { show: false }
          },
          yAxis: {
            name: '（个）',
            type: 'value',
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            },
            splitLine: {show: false},
            axisTick: { show: false }
          },
          series: [
            {
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                barBorderRadius: 8
              }
            }
          ]
        }
      },
      reAreaChart(data) {
        return {
          dataset: {
            source: data
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '6%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: { lineStyle: { color: xyLineColor } }
          },
          yAxis: {
            type: 'value',
            axisLine: { lineStyle: { color: xyLineColor } },
            splitLine: { lineStyle: { color: splitLineColor } },
            min: 0
          },
          series: [{
            type: 'line',
            itemStyle: {
              color: 'rgba(2,203,255,1)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(2,203,255,0.8)'
              }, {
                offset: 1,
                color: 'rgba(2,203,255,0.2)'
              }])
            }
          }]
        }
      },
      setExchangeData(tab) {
        // console.log(tab)
        const _self = this
        let param = ''
        switch (tab) {
          case '本月':
            param = 'thisMonth'; break;
          case '本年':
            param = 'thisYear'; break;
        }
        this.$store.dispatch('getOverviewExchangeData', param).then()
      },
      reSum(arr, key) {
        let sum = 0
        arr.forEach((item) => {
          sum += item[key]
        })
        return sum
      },
      handleClick(param) {
        this[param] = !this[param]
      },
      handleChange1(date) {
        this.date1 = date
      },
      handleChange2(date) {
        this.date2 = date
      },
      handleClear1() {
        this.dateOpen1 = false
        this.handleBtnTab1 = 0
      },
      handleClear2() {
        this.dateOpen2 = false
        this.handleBtnTab2 = 0
      },
      handleOk1() {
        this.dateOpen1 = false
        this.setExchangeData(this.date1)
      },
      handleOk2() {
        this.dateOpen2 = false
      },
      // 渲染pie图
      returnRing(data) {
        if(data){
          return {
            color: ['#34aec5', '#4065f1', '#fc9530', '#f93b3b'],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              icon: 'circle',
              right: 60,
              top: 'center',
              orient: 'vertical',
              textStyle: {
                color: '#fff'
              }
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                selectedMode: 'single',
                center: ['30%','50%'],
                radius: ['45%', '75%'],
                label: {
                  show: false,
                  position: 'center'
                },
                data: data
              }
            ]
          }
        }
      },
      // 渲染pie图
      returnPie(data) {
        if(data){
          return {
            color: ['#34aec5', '#4065f1', '#fc9530', '#f93b3b'],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [
              {
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '50%'],
                label: {
                  position: 'inner'
                },
                labelLine: {
                  show: false
                },
                data: data.inner
              },
              {
                type: 'pie',
                selectedMode: 'single',
                radius: ['60%', '75%'],
                label: {
                  formatter: p => p.name + ' : ' +  p.value,
                },
                /* data: [
                  { value: 400, name: '法人惩戒' },
                  { value: 600, name: '自然人惩戒' },
                  { value: 1400, name: '法人激励' },
                  { value: 600, name: '自然人激励' }
                ], */
                data: data.outer
              }
            ]
          }
        }
      },
      returnBar(data) {
        if (data) {
          return {
            grid: {
              top: 20,
              left: '28%',
              right: 10
            },
            legend: {
              bottom: '2%',
              textStyle: { color: '#fff' }
            },
            tooltip: {},
            dataset: {
              source: data
            },
            xAxis: {
              type: 'value',
              axisLine: { lineStyle: { color: xyLineColor } },
              boundaryGap: ['20%', '20%'],
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              type: 'category',
              min: 0,
              boundaryGap: ['20%', '20%'],
              axisLine: { lineStyle: { color: xyLineColor } },
              splitLine: { lineStyle: { color: splitLineColor } },
              axisLabel: {
                width: 100,
                formatter: function(params){
                  var newParamsName = "";// 最终拼接成的字符串
                  var paramsNameNumber = params.length;// 实际标签的个数
                  var provideNumber = 7;// 每行能显示的字的个数
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整

                  // 条件等同于rowNumber>1
                  if (paramsNameNumber > provideNumber) {

                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = "";// 表示每一次截取的字符串
                      var start = p * provideNumber;// 开始截取的位置
                      var end = start + provideNumber;// 结束截取的位置
                      // 此处特殊处理最后一行的索引值
                      if (p == rowNumber - 1) {
                        // 最后一次不换行
                        tempStr = params.substring(start, paramsNameNumber);
                      } else {
                        // 每一次拼接字符串并换行
                        tempStr = params.substring(start, end) + "\n";
                      }
                      newParamsName += tempStr;// 最终拼成的字符串
                    }

                  } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName
                }
              },
              axisTick: {
                show: false
              }
            },
            series: [
              {
                type: 'bar',
                barWidth: 8,
                barGap: 0,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#00befc' },
                      { offset: 1, color: '#00befc33' }
                    ]
                  )
                }
              },
              {
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#294bd5' },
                      { offset: 1, color: '#294bd533' }
                    ]
                  )
                }
              }
            ]
          }
        }
      },
      numChange() {
        let copy = JSON.parse(JSON.stringify(this.countNumList))
        let change = setInterval(() => {
          let arr = []
          this.countNumList.forEach(item => {
            arr.push(parseInt(Math.random() * 10))
          })
          this.countNumList = arr
        }, 20)
        setTimeout(() => {
          window.clearInterval(change)
          this.countNumList = copy
        }, 1000)
      },

      renderMap(paramObj) {
        var effect='#06eaed'
        var flyLine='#ffffff'
        var border='#105689'
        var bg='rgba(2,10,34,0.8)'
        var bg1='#040c22'
        var chinaGeoCoordMap = {
          '句容区': [119.167135,31.947355],
          '丹徒区':[119.433883,32.088972],
          '润州区':[119.414877,32.213501],
          '京口区':[119.689571,32.176191],
          '扬中市':[119.828054,32.237266],
          '丹阳市':[119.581911,31.991459]
        }
        var chinaDatas = [
          [{
            name: '句容区',
            value: 0
          }], [{
            name: '丹徒区',
            value: 0
          }], [{
            name: '润州区',
            value: 0
          }],[{
            name: '扬中市',
            value: 0
          }], [{
            name: '丹阳市',
            value: 0
          }]
        ]
        var convertData = function (data) {
          var res = []
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i]
            var fromCoord = chinaGeoCoordMap[dataItem[0].name]
            // 中心点坐标
            var toCoord = [119.689571,32.176191]
            if (fromCoord && toCoord) {
              res.push([
                {
                  coord: fromCoord,
                  value: dataItem[0].value
                },
                {
                  coord: toCoord
                }
              ])
            }
          }
          return res
        }
        var series = [];
        [['京口区', chinaDatas]].forEach(function (item, i) {
          series.push(
            {
              type: 'lines',
              tooltip: { show: false },
              zlevel: 1,
              effect: {
                show: true,
                period: 5, // 箭头指向速度，值越小速度越快
                trailLength: 0.1, // 特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow',
                symbolSize: [5, 10] // 图标大小
              },
              lineStyle: {
                color: flyLine,
                width: 1, // 尾迹线条宽度
                opacity: 0.1, // 尾迹线条透明度
                curveness: 0.6 // 尾迹线条曲直度
              },
              data: convertData(item[1])
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: { // 涟漪特效
                period: 4, // 动画时间，值越小速度越快
                brushType: 'stroke', // 波纹绘制方式 stroke, fill
                scale: 3 // 波纹圆环最大限制，值越大波纹越大
              },
              label: {
                normal: {
                  show: true,
                  position: 'right', // 显示位置
                  offset: [8, 0], // 偏移设置
                  // 圆环显示文字
                  formatter: function (params) {
                    return params.data.name
                  },
                  fontSize: 13
                },
                emphasis: {
                  show: false
                }
              },
              symbol: 'circle',
              symbolSize: function (val) {
                return 8 + val[2] * 2 // 圆环大小
              },
              itemStyle: {
                normal: {
                  show: false,
                  color: effect
                }
              },
              data: item[1].map(function (dataItem) {
                return {
                  name: dataItem[0].name,
                  value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                }
              })
            },
            // 标的点
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 2
              },
              label: {
                textBorderColor: '#000',
                show: true,
                position: 'right',
                // offset:[5, 0],
                color: '#00d0ff',
                formatter: '{b}',
                textStyle: {
                  fontSize: 22,
                  color: '#fff'
                },
                // textShadowColor:'#fff',
                // textShadowBlur:2,
                emphasis: {
                  show: true,
                  color: '#f60'
                }
              },
              symbol: 'pin',
              symbolSize: 30,
              data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10])
              }]
            }
          )
        })
        var option = {
          tooltip: {
            trigger: 'item',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
              // 根据业务自己拓展要显示的内容
              var res = ''
              var name = params.name
              var value = params.value[params.seriesIndex + 1]
              res = '<span style=\'color:#fff;\'>' + name + '</span><br/>数据：' + value
              return res
            }
          },
          geo: {
            map: 'zhenjiang',
            zoom: 1,
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false, // 是否允许缩放
            itemStyle: {
              normal: {
                color: 'rgba(51, 69, 89, 0.2)', // 地图背景色
                // color:'#0f1d37',
                borderColor: border, // 省市边界线00fcff 516a89
                borderWidth: 1,
                shadowColor: bg,
                shadowBlur: 4
              },
              emphasis: {
                color: 'rgba(37, 43, 61, .5)' // 悬浮背景
              }
            }
          },
          series: series
        }
        var chart = echarts.init(document.getElementById(paramObj.id))
        chart.setOption(option)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $p = 156
  $itemW = 110
  $itemH = 110
  $rotateW = 4 * $p
  $rotateH = 3.46 * $p

  [flex~="space:around"]
    -webkit-box-pack: justify;
    -webkit-justify-content: space-around;
    -ms-flex-pack: justify;
    justify-content: space-around

  .white-font
    color #fff

  .overview
    width: 100%
    height: 1000px
    box-sizing border-box
    padding: 20px 0
    background-image: url('~@/assets/images/overview/ge.png')
    background-repeat: no-repeat
    background-position: center 40%

    .dept-list
      color #fff

      .list-header
        font-weight: 700

      div
        height 42px
        line-height: 42px

        &:nth-child(odd)
          background-color: #001739

        &:nth-child(even)
          background-color: #061029

        span
          text-align center

    .title
      font-weight: 700
      color #ffffff
      font-size: 18px
      line-height: 32px
      background-image: url('~@/assets/images/summary/t_bg.png')
      background-repeat: no-repeat
      background-position: left bottom
      -webkit-background-size: 100% 20px
      background-size: 100% 20px
      height 36px
      margin-top: 6px
      margin-bottom: 10px

    > div
      &:nth-child(1)
        width 450px

      &:nth-child(2)
        width calc(100% - 900px)

      &:nth-child(3)
        width 450px

    .count-wrapper
      display flex
      justify-content space-between
      width: 100%

      .count-item
        width 23%
        padding-bottom 8px
        text-align center
        color #fff

      .count-title
        color #ffffff
        line-height: 30px
        font-size: 14px

      span
        padding 8px
        display inline-block

        .iconfont
          color $fontColor
          font-weight: 700
          font-size: 32px

      .data-change
        color #fff
        text-align center
        line-height: 26px
        width: 120px

        &:nth-child(2)
          span
            padding-right: 0

        &:nth-child(even)
          text-align left
          width: 228px
          padding-top: 12px
          padding-left: 10px

    .nowrap
      flex-wrap wrap

    .inner
      position relative
      width ($rotateW) px
      height: 740px
      margin 0 auto

      .total-count
        position absolute
        top: 0
        left 50%
        transform translateX(-50%)
        width: 800px
        text-align center
        font-size: 26px
        font-weight: 700
        color #fff
        letter-spacing 8px

        i
          display inline-block
          vertical-align middle
          margin 4px

          &:first-of-type
            padding-right: 20px

          &.total-num
            width 49px
            height: 55px

          &.num0
            background-image: url('~@/assets/images/overview/0.png')

          &.num1
            background-image: url('~@/assets/images/overview/1.png')

          &.num2
            background-image: url('~@/assets/images/overview/2.png')

          &.num3
            background-image: url('~@/assets/images/overview/3.png')

          &.num4
            background-image: url('~@/assets/images/overview/4.png')

          &.num5
            background-image: url('~@/assets/images/overview/5.png')

          &.num6
            background-image: url('~@/assets/images/overview/6.png')

          &.num7
            background-image: url('~@/assets/images/overview/7.png')

          &.num8
            background-image: url('~@/assets/images/overview/8.png')

          &.num9
            background-image: url('~@/assets/images/overview/9.png')

      .cube
        display inline-block
        width: 100%
        height: 100%
        position relative
        z-index 10

        .inner-float
          position absolute
          width: 100%
          height: 100%
          background-image: url('~@/assets/images/overview/cube.png')
          background-repeat: no-repeat
          background-position: center 256px;
          -webkit-background-size: 160px 160px
          background-size: 160px 160px
          z-index 20
          animation infinite shineCube 4s linear

        .cir-box
          width: 100%
          height: 100%
          position absolute
          z-index 10

        .cir
          position absolute
          width 500px
          height: 500px
          top: calc(50% + 100px)
          left: 50%
          animation shine infinite linear 6s

          &::before
            position absolute
            top: 0
            left: 0
            content ''
            width: 110%
            height: 110%
            display block
            transform translate(-50%, -50%) rotateX(60deg)
            border: 1px dashed $fontColor
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%

          &::after
            content ''
            width: 130%
            height: 130%
            display block
            transform translate(-50%, -50%) rotateX(60deg)
            border: 1px solid $fontColor
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%

        .cir1
          position absolute
          top: calc(50% + 100px)
          left: 50%
          animation shine infinite linear 6s

          img
            width 450px
            height: auto
            transform translate(-50%, -50%) rotateX(60deg)

        .cir2
          position absolute
          top: calc(50% + 100px)
          left: 50%
          animation shine infinite linear 6s
          // animation-delay 3s

          img
            width 300px
            height: auto
            transform translate(-50%, -50%) rotateX(60deg)

    .red-black-wrapper
      .container
        width 22%

        .red-list
          padding-bottom: 10px
          text-align center
          background-image: url('~@/assets/images/overview/tuopan.png')
          background-repeat: no-repeat
          background-position: bottom center
          -webkit-background-size: contain
          background-size: contain
          img, i
            vertical-align middle
            padding 10px

        .msg-list
          padding-top: 20px

          .msg-list-item
            width: 100%

            .rb-icon
              margin-right: 10px
              width: 52px
              height: 52px

            span
              width: 100%

  .rotate
    position absolute
    margin 0 auto
    top 5px
    left 86px
    width ($rotateW) px
    height: ($rotateH) px
    transform-style preserve-3d
    // transform rotateX(-10deg)
    // background-color: #fff
    animation rotate3d linear 30s infinite
    z-index 20

    &:hover
      animation-play-state: paused;
      -webkit-animation-play-state: paused;

      .rotate-inner
        .inner-item
          animation-play-state: paused;
          -webkit-animation-play-state: paused;

    .rotate-inner
      position relative
      width: 100%
      height: 100%
      color #fff

      .inner-item
        animation rotate3dOpposite linear infinite 30s
        // transform-style preserve-3d
        // transform perspective(1000)
        text-align center
        width: ($itemW) px
        height: ($itemH) px
        position relative

        p
          text-align center
          transform rotateX(10deg) scaleY(2)
          height: 32px;

        div
          position absolute
          left: 50%
          top: 130px
          width: 120px
          height: 105px
          text-align center
          transform translateX(-50%) rotateX(10deg) scaleY(2)
          background-image: url('~@/assets/images/overview/pan.png')
          background-position: center bottom
          -webkit-background-size: contain
          background-size: contain
          background-repeat: no-repeat

        &:nth-child(1)
          position absolute
          top: (0 - $itemH/ 2) px
          left: ($p - $itemW/ 2) px

        &:nth-child(2)
          position absolute
          top: (0 - $itemH/ 2) px
          left: ($p* 3 - $itemW/ 2) px

        &:nth-child(3)
          position absolute
          top: ($rotateH/ 2 - $itemH/ 2) px
          left: ($p* 4 - $itemW/ 2) px

        &:nth-child(4)
          position absolute
          top: ($rotateH - $itemH/ 2) px
          left: ($p* 3 - $itemW/ 2) px

        &:nth-child(5)
          position absolute
          top: ($rotateH - $itemH/ 2) px
          left: ($p - $itemW/ 2) px

        &:nth-child(6)
          position absolute
          top: ($rotateH/ 2 - $itemH/ 2) px
          left: (0 - $itemW/ 2) px

  .square-bg
    background-color: #01173a
    padding-bottom: 8px

  .chart-msg-bar
    text-align center
    color #fff

  .handle-btn
    color #fff
    font-size: 12px

    .active
      background-color: #0d1b4d

    .btn
      white-space nowrap
      line-height: 32px
      height: 32px
      padding: 0 10px;
      margin-right: 4px
      -webkit-border-radius: 16px
      -moz-border-radius: 16px
      border-radius: 16px
      cursor pointer

  .handle-btn >>> .bin-select-dropdown
    background-color: #01173a

  .handle-btn >>> .bin-date-picker-rel
    line-height: 32px

  .tip-wrapper
    position absolute
    top: 0
    left: 0
    width: 100%

    .tip-item
      width: 28%
      height: 100px
      background-image: url('~@/assets/images/summary/data_bg.png')
      position relative

      .light-corner
        content: ''
        display block
        position absolute
        width 8px
        height: 8px

        &:nth-of-type(1)
          top: 0
          left: 0
          border-top: $bdh solid $fontColor
          border-left: $bdw solid $fontColor
          -webkit-border-radius: 2px 0 0 0
          -moz-border-radius: 2px 0 0 0
          border-radius: 2px 0 0 0

        &:nth-of-type(2)
          top: 0
          right: 0
          border-top: $bdh solid $fontColor
          border-right: $bdw solid $fontColor
          -webkit-border-radius: 0 2px 0 0
          -moz-border-radius: 0 2px 0 0
          border-radius: 0 2px 0 0

        &:nth-of-type(3)
          bottom: 0
          left: 0
          border-bottom: $bdh solid $fontColor
          border-left: $bdw solid $fontColor
          -webkit-border-radius: 0 0 0 2px
          -moz-border-radius: 0 0 0 2px
          border-radius: 0 0 0 2px

        &:nth-of-type(4)
          bottom: 0
          right: 0
          border-bottom: $bdh solid $fontColor
          border-right: $bdw solid $fontColor
          -webkit-border-radius: 0 0 2px 0
          -moz-border-radius: 0 0 2px 0
          border-radius: 0 0 2px 0

      .tip-item-inner
        height: 100%
        padding-left: 20px
        line-height: 30px

      &:nth-of-type(1)
        .tip-item-font
          color #17d2e8

          .num
            color inherit

      &:nth-of-type(2)
        .tip-item-font
          color #02fbec

          .num
            color inherit

      &:nth-of-type(3)
        .tip-item-font
          color #065bf7

          .num
            color inherit


  @keyframes rotate3d {
    0% {
      transform: rotateX(60deg) rotateZ(0)
    }
    100% {
      transform: rotateX(60deg) rotateZ(1turn)
    }
  }

  @keyframes rotate3dOpposite {
    0% {
      transform: rotateZ(0)
    }
    100% {
      transform: rotateZ(-1turn)
    }
  }

  @keyframes shine {
    0% {
      opacity: 0;
      transform: scale(.8);
      transform-origin: 0 0;
    }
    50% {
      opacity: .8;
      transform: scale(.9);
      transform-origin: 0 0;
    }
    100% {
      opacity: 0;
      transform: scale(1);
      transform-origin: 0 0;
    }
  }

  @keyframes shineCube {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes shadowShine {
    0% {
      box-shadow: 0 0 20px $lightShadowColor;
    }
    50% {
      box-shadow: 0 0 2px $lightShadowColor;
    }
    100% {
      box-shadow: 0 0 20px $lightShadowColor;
    }
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -340px) rotateX(80deg) rotateZ(0) scale(10)
    }
    50% {
      transform: translate(-50%, -340px) rotateX(80deg) rotateZ(0.5turn) scale(10)
    }
    100% {
      transform: translate(-50%, -340px) rotateX(80deg) rotateZ(1turn) scale(10)
    }
  }

  @keyframes shadow-light {
    0% {
      box-shadow: 0 0 4px rgba(20, 140, 250, 0.2), 0 0 4px rgba(20, 140, 250, 0.2) inset
    }
    50% {
      box-shadow: 0 0 10px rgba(20, 140, 250, 0.5), 0 0 10px rgba(20, 140, 250, 0.5) inset
    }
    100% {
      box-shadow: 0 0 4px rgba(20, 140, 250, 0.2), 0 0 4px rgba(20, 140, 250, 0.2) inset
    }
  }

  #map
    position absolute
    z-index 30
    top: 30px
    left: 0
    overflow hidden
    width: 100%;
    height: 100%;

  .map-container
    height: 100%
    width: 100%
    padding 30px 0
    margin: 0 auto
    position relative

  .bar-container
    height: 100%
    position absolute
    top: 150px
    right: 0

    #barChart
      width: 744px
      height: 722px;

  .mask-cir-container
    position absolute
    z-index 20
    bottom: -125px
    left: 50%
    transform translateX(-50%)

    .mask-inner
      position relative

      /*
      &::before
        position absolute
        left: -94px;
        bottom: 327px;
        content: '';
        display: inline-block;
        width: 358px;
        height: 90px;
        background-color: rgba(5, 8, 25, 1);
        z-index: 200;
        border-radius: 200px 0 200px 0
      */
      .rotate-cir-1
        position absolute
        z-index 1
        width 80px
        height: 80px
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
        border: 1px dashed #11387f
        left: 50%
        animation rotate linear 10s infinite
        text-align center

      .rotate-cir-2
        @extend .rotate-cir-1
        border-style solid
        animation shadow-light infinite linear 3s
        transform: translate(-50%, -320px) rotateX(80deg) rotateZ(0) scale(10)

</style>
