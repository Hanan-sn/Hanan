<template>
  <div class="summary" flex="dir:col">
    <div class="page-title-wrapper">
      <span class="header-title">
        <i>数据分析专题</i>
      </span>
    </div>
    <div class="page-body-wrapper" flex>
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
                <div class="inner-wrapper">
                  <span>
                    <i>一级分类(个)</i>
                    <i class="num">7</i>
                  </span>
                  <span>
                    <i>二级分类(个)</i>
                    <i class="num">7</i>
                  </span>
                  <span>
                    <i>资源数(条)</i>
                    <i class="num">365</i>
                  </span>
                  <span>
                    <i>部门数(个)</i>
                    <i class="num">7</i>
                  </span>
                </div>
                <v-chart :options="classifyOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <i class="card-title-font">部门数据归集统计分析</i>
            </template>
            <template slot="content">
              <SlideTable :header="columns" :body="listData" :body-height="270"></SlideTable>
            </template>
          </Card>
        </template>
      </SidePanel>
      <MiddlePanel>
        <template slot="outer">
          <div>
            <div class="corner-card">
              <div class="top">
                <div class="card">
                  <span>
                    <i>自然人数据总量</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
                <div class="card">
                  <span>
                    <i>法人数据总量</i>
                  </span>
                  <span>
                    <i class="num">565854</i>
                    <i>（条）</i>
                  </span>
                </div>
              </div>
              <div class="bot">
                <div class="card">
                <span>
                  <i>重点人群数据总量</i>
                </span>
                  <span>
                  <i class="num">565854</i>
                  <i>（条）</i>
                </span>
                </div>
                <div class="card">
                <span>
                  <i>验证通过数据总量</i>
                </span>
                  <span>
                  <i class="num">565854</i>
                  <i>（条）</i>
                </span>
                </div>
              </div>
            </div>
            <div class="show-geo" flex="justify:center">
            <span class="item-count-bar" flex>
              <img class="icon" src="~@/assets/images/overview/md_icon07.png" alt="">
              <span class="data" flex="dir:col">
                <span class="label">
                  <i>资源信息数量</i>
                </span>
                <span class="value">
                  <i class="num">100000</i>
                  <i>（条）</i>
                </span>
              </span>
            </span>
              <span class="item-count-bar">
              <img class="icon" src="~@/assets/images/overview/md_icon07.png" alt="">
              <span class="data" flex="dir:col">
                <span class="label">
                  <i>数据归集总量</i>
                </span>
                <span class="value">
                  <i class="num">100000</i>
                  <i>（条）</i>
                </span>
              </span>
            </span>
              <span class="item-count-bar">
              <img class="icon" src="~@/assets/images/overview/md_icon07.png" alt="">
              <span class="data" flex="dir:col">
                <span class="label">
                  <i>本月归集数量</i>
                </span>
                <span class="value">
                  <i class="num">100000</i>
                  <i>（条）</i>
                </span>
              </span>
            </span>
            </div>
            <div class="center-container" ref="centerContainer" flex="justify:center">
              <canvas ref="centerCvs"></canvas>
              <canvas ref="radarCvs" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"></canvas>
            </div>
          </div>
        </template>
        <template slot="inner">
          <Card>
            <template slot="title">
              <i class="card-title-font">资源信息归集趋势</i>
            </template>
            <template slot="content">
              <div class="summary-trend">
                <v-chart :options="trendOption" theme="macarons" style="width: 100%; height: 240px;"></v-chart>
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
                <SlideTable :header="completeColumns" :body="completeListData" :body-height="220" :href="true"></SlideTable>
              </div>
            </template>
          </Card>
        </template>
      </SidePanel>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import MiddlePanel from '@/components/MiddlePanel/MiddlePanel'
  import SidePanel from '@/components/SidePanel/SidePanel'
  import Card from '@/components/Card/Card'
  import SlideTable from '@/components/SlideTable/SlideTable'
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import {graphic} from "echarts/lib/export"
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
        newestSwiperOptions: {
          direction: 'vertical',
          slidesPerView: 5,
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
            data: ['其他信息', '信用评级信息', '公共事业信息', '行政执法信息', '司法信息', '业务信息', '基础信息']
          },
          series: [
            {
              name: '2021年',
              type: 'bar',
              barWidth: 10,
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },
              itemStyle: {
                color: new graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(11,61,73, 0.8)'
                }, {
                  offset: 1,
                  color: 'rgb(60,250,230,1.0)'
                }]),
                barBorderRadius: [10, 10, 10, 10] // 设置柱状图圆角
              },
              data: [98203, 123489, 98203, 99034, 104970, 131744, 130230]
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
              name: '来源',
              type: 'pie',
              radius: ['35%', '70%'],
              center: ['50%', '50%'],
              data: [
                { value: 335, name: '手工填报' },
                { value: 310, name: 'et对接' },
                { value: 274, name: '内部接口' },
                { value: 235, name: '其他' }
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
              animationDelay: function () {
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
              name: '分类',
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
                { value: 335, name: '基本信息' },
                { value: 310, name: '业务信息' },
                { value: 234, name: '司法信息' },
                { value: 135, name: '行政执法信息' },
                { value: 1548, name: '信用评价信息' },
                { value: 1548, name: '公共事业信息' },
                { value: 1548, name: '其他信息' }
              ]
            },
            {
              name: '分类',
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
          color: ['#a48f5e', '#097c86'],
          legend: {
            data: ['自然人', '法人及其他组织'],
            bottom: 0
          },
          grid: {
            bottom: 60
          },
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
              name: '自然人',
              data: [820, 932, 901, 901, 934, 1290, 1190, 1330, 1230, 1320, 1120, 1220],
              type: 'line',
              areaStyle: {}
            },
            {
              name: '法人及其他组织',
              data: [320, 432, 501, 634, 490, 830, 620, 401, 534, 690, 830, 820],
              type: 'line',
              areaStyle: {}
            }
          ]
        },
        columns: [
          {
            title: '部门名称',
            key: 'name'
          },
          {
            title: '归集数量（条）',
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
        ],
        completeColumns: [
          {
            title: '部门名称',
            key: 'name'
          },
          {
            title: '资源信息',
            key: 'text'
          }
        ],
        completeListData: [
          {
            name: '模拟部门名称 1',
            text: '资源信息',
            href: 'https://www.baidu.com'
          },
          {
            name: '模拟部门名称 2',
            text: '资源信息',
            href: 'https://www.baidu.com'
          },
          {
            name: '模拟部门名称 3',
            text: '资源信息',
            href: 'https://www.baidu.com'
          },
          {
            name: '模拟部门名称 4',
            text: '资源信息',
            href: 'https://www.baidu.com'
          },
          {
            name: '模拟部门名称 5',
            text: '资源信息',
            href: 'https://www.baidu.com'
          },
          {
            name: '模拟部门名称 6',
            text: '资源信息',
            href: 'https://www.baidu.com'
          }
        ]
      }
    },
    directives: directive,
    components: { MiddlePanel, Card, SidePanel, Swiper, SwiperSlide, SlideTable },
    methods: {
      renderStats() {
        var stats = new Stats();
        stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( stats.dom );

        function animate() {

          stats.begin();

          // monitored code goes here

          stats.end();

          requestAnimationFrame( animate );

        }

        requestAnimationFrame( animate );
      },
      renderCvs(){
        const { offsetWidth, offsetHeight } = this.$refs.centerContainer
        this.$refs.centerCvs.width = offsetWidth
        this.$refs.centerCvs.height = offsetHeight
        const realCtx = this.$refs.centerCvs.getContext('2d')
        realCtx.beginPath();
        let radius = 200
        let centerX = offsetWidth/2
        let centerY = offsetHeight/2
        realCtx.arc(centerX, centerY, radius, 0, 2*Math.PI);
        realCtx.fillStyle="rgb(96,245,253)";
        realCtx.fill();
        let fl = 1000
        let dots = this.getImgData(offsetWidth, offsetHeight, realCtx, fl)
        dots.forEach(dot => {
          dot.paint()
        })
      },
      getImgData(w, h, ctx, fl) {
        const imgData = ctx.getImageData(0, 0, w, h)
        ctx.clearRect(0, 0, w, h)
        let dots = []
        // 粒子点
        class Dot {
          // 三维中心 + 圆角
          constructor(centerX, centerY, centerZ, radius, alpha) {
            this.dx = centerX
            this.dy = centerY
            this.dz = centerZ
            this.tx = 0
            this.ty = 0
            this.tz = 0
            this.z = centerZ
            this.x = centerX
            this.y = centerY
            this.radius = radius
            this.alpha = alpha
          }
          paint() {
            ctx.save()
            ctx.beginPath()
            var scale = fl / (fl + this.z)
            // ctx.arc(w / 2 + (this.x - w / 2), h / 2 + (this.y - h / 2), this.radius * scale, 0, 2 * Math.PI)
            ctx.rect(w / 2 + (this.x - w / 2), h / 2 + (this.y - h / 2), this.radius * scale * 2,this.radius * scale * 2)
            ctx.fillStyle = `rgba(15,253,253,${this.alpha})`
            ctx.fill()
            ctx.restore()
          }
        }
        for (let x = 0; x < imgData.width; x += 24) {
          for (let y = 0; y < imgData.height; y += 24) {
            let i = (y * imgData.width + x) * 4
            if (imgData.data[i] >= 80) {
              let dot = new Dot(x - 2, y - 2, 1000, 8, (x+y)/(imgData.width+imgData.height))
              dots.push(dot)
            }
          }
        }
        return dots
      },
      renderRadar() {
        let CFG = {
          perDeg: 1,
        };

        let aTarget = [];
        const radius = 200
        let can = this.$refs.radarCvs
        can.width = radius * 2
        can.height = radius * 2
        let ctx = can.getContext('2d');
        let deg = 0;
        ctx.strokeStyle = 'rgba(63,255,234,1)';

        function init() {
          // ctx.fillStyle = 'rgba(0,50,0,1)';
          // ctx.arc(150, 150, 150, 0, 2 * Math.PI);
          // ctx.fill();
          requestAnimationFrame(loop);
        }

        function loop() {
          deg = (deg + CFG.perDeg * 2 );

          if(deg % 360 === 0){
            ctx.clearRect(0,0,radius * 2,radius * 2)
          }
          cover();
          drawPosLine();
          drawRadar(deg);
          requestAnimationFrame(loop);
        }

        function cover() {
          ctx.save();
          ctx.fillStyle = 'rgba(3,30,43,0.02)';
          ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.restore();
        }

        function drawPosLine() {
          ctx.beginPath();
          ctx.moveTo(radius, 0);
          ctx.lineTo(radius, radius*2);
          ctx.closePath();
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(0, radius);
          ctx.lineTo(radius*2, radius);
          ctx.closePath();
          ctx.stroke();

          ctx.moveTo(radius, radius);
          ctx.beginPath();
          ctx.arc(radius, radius, 160, 0 * Math.PI, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();

          ctx.moveTo(150, 150);
          ctx.beginPath();
          ctx.arc(radius, radius, 100, 0 * Math.PI, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
        }

        function drawRadar(iDeg) {
          ctx.fillStyle = 'rgba(88,225,238,.2)';
          ctx.beginPath();
          ctx.moveTo(radius, radius);
          ctx.arc(radius, radius, radius, (-2 * CFG.perDeg + iDeg) / 180 * Math.PI, (0 + iDeg) / 180 * Math.PI);
          ctx.closePath();
          ctx.fill();
        }

        function bornTarget() {
          aTarget.push({
            deg: Math.round(Math.random() * 360),
            r: Math.round(Math.random() * can.width / 2)
          });
        }

        init();
      }
    },
    mounted() {
      this.renderCvs()
      this.renderRadar()
      // this.renderStats()
    }
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
  .dept-swiper
    height: 320px
  .newest-swiper
    height: 200px
  .center-container
    height: 460px
    position relative
    overflow hidden
    &::after
      content ''
      display block
      width: 100%
      height: 100%
      position absolute
      -webkit-background-size: contain
      background-size: contain
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

  .show-geo
    display flex
    .item-count-bar
      height 80px
      width 260px
      display flex
      background-image: url('~@/assets/images/overview/md_bg.png')
      background-repeat: no-repeat
      align-items center
      padding-bottom: 10px
      padding-left: 20px
      box-sizing border-box
      .icon
        display block
        width 50px
        height: 50px
        margin-right: 10px
      .data
        .value
          .num
            font-size: 26px


  .summary-classify
    .inner-wrapper
      display flex
      span
        flex: 1
        padding: 6px 0
        margin: 2px
        background-color: #022133
        display flex
        flex-direction column
        align-items center
  .corner-card
    display flex
    flex-direction column
    justify-content space-between
    width: 100%
    height: 290px
    position absolute
    top: 160px
    left: 0
    .top, .bot
      display flex
      justify-content space-between
      padding: 0 60px
      .card
        background-color: #062738
        display flex
        flex-direction column
        padding: 10px
        width: 160px;
        span
          text-align center
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
