import { reqOverviewData } from '@/api'
import { Overview } from '../mutation-types'
import { graphic } from 'echarts/lib/export'

export default {
  state: {
    union: {
      memoCount: 1,
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
      color: [
        new graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(35,127,126,1.0)'
        }, {
          offset: 1,
          color: 'rgba(35,127,126,0.3)'
        }]),
        new graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(74,215,241,1.0)'
        }, {
          offset: 1,
          color: 'rgba(74,215,241,0.3)'
        }])
      ],
      nameTextStyle: {
        color: '#fff'
      },
      grid: {
        top: 60,
        right: 6
      },
      xAxis: {
        type: 'category',
        boundaryGap: ['40%', '40%'],
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        max(value) {
          return value.max + 50
        },
        name: '（条）',
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barGap: 0,
          barMaxWidth: 10,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(2,55,70,0.8)'
          }
        },
        {
          data: [110, 180, 120, 90, 80, 100, 120],
          type: 'bar',
          barGap: 0,
          barMaxWidth: 10,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(2,55,70,0.8)'
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
          name: '2021年',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: new graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(11,61,73, 0.8)'
              }, {
                offset: 1,
                color: 'rgb(60,250,230,1.0)'
              }]),
              barBorderRadius: [10, 10, 10, 10] // 设置柱状图圆角
            }
          },
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
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgb(15,107,119)'
          }, {
            offset: 1,
            color: 'rgba(11,61,73, 0.5)'
          }])
        }
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
  },
  getters: {},
  actions: {
    async getOverview({ commit }) {
      const result = await reqOverviewData()
      commit(Overview, { result })
    }
  },
  mutations: {
    [Overview](state, { result }) {
      const { overview } = result
      console.log(result)
      // state.union = overview
    }
  }
}
