<template>
  <div class="map" flex>
    <Panel style="width: 550px">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">本月数据分析</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">资源信息分类统计</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">部门数据归集统计分析</template>
            <template slot="content">

            </template>
          </Card>
        </div>
      </template>
    </Panel>
    <Panel flex-box="1" style="margin-left: 0; margin-right: 0;padding: 0;">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <chart :options="returnRalationMap()" theme="walden"></chart>
        </div>
      </template>
    </Panel>
    <Panel style="width: 550px">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">数据归集来源对比</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">自然人资源数据分类统计</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">最新填报部门</template>
            <template slot="content">

            </template>
          </Card>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
  import Panel from '../../../components/Panel/Panel'
  import Card from '../../../components/Card/Card'
  import * as echarts from 'echarts'
  echarts.dataTool = require("echarts/extension-src/dataTool/gexf");
  export default {
    name: 'Map',
    components: {
      Panel,
      Card
    },
    data(){
      return{

      }
    },
    methods: {
      returnRalationMap(){
        let list = []
        for(let i = 0; i < 10; i++){
          let name = '一级公司'+i, value = parseInt(Math.random()*100), children = []
          let obj1 = {name,value,children}
          list.push(obj1)
          for(let j = 0; j < 10; j++){
            let nameS = name + '旗下二级公司'+j,valueS = parseInt(Math.random()*100)
            let obj2 = {name:nameS,value:valueS}
            obj1.children.push(obj2)
          }
        }
        console.log(list)
        /*return {
          force: {                // 力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
            // 力引导布局的结果有良好的对称性和局部聚合性，也比较美观。
            repulsion: 1000,            // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
            edgeLength: [150, 100]      // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
                                        // 这个距离也会受 repulsion。支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例:
                                        // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50      edgeLength: [10, 50]
          },
          layout: "force",
          tooltip: {},
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series : [
            {
              type: 'graph',
              layout: 'none',
              edgeSymbol: ['none', 'arrow'],
              data: [                     //data就是node
                {
                  name: '子公司',
                  x: 10,
                  y: 10,
                  value: 10
                }, {
                  name: '父公司',
                  x: 100,
                  y: 100,
                  value: 20
                }
              ],
              links:[                 //links就是edges
                {
                  source: '子公司',
                  target: '父公司'
                }, {
                  source: '父公司',
                  target: '子公司'
                }
              ],
              roam: true,
              focusNodeAdjacency: true,
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
              },
              label: {
                position: 'right',
                formatter: '{b}'
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              },
              emphasis: {
                lineStyle: {
                  width: 10
                }
              }
            }
          ]
        }*/
        return {
          title: {                    // 图表标题
            text: "",           // 标题文本
            left : '3%',                    // 标题距离左侧边距
            top : '3%',                     // 标题距顶部边距
            textStyle : {                       // 标题样式
              color : '#000',                     // 标题字体颜色
              fontSize : '30',                    // 标题字体大小
            }
          },
          tooltip: {                  // 提示框的配置
            formatter: function(param) {
              if (param.dataType === 'edge') {
                //return param.data.category + ': ' + param.data.target;
                return param.data.target;
              }
              //return param.data.category + ': ' + param.data.name;
              return param.data.name + '：<br>' + param.data.info;
            }
          },

          series: [{

            edgeSymbol: ['arrow', 'none'],
            type: "graph",          // 系列类型:关系图
            top: '10%',             // 图表距离容器顶部的距离
            roam: true,             // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            focusNodeAdjacency: true,   // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
            force: {                // 力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
              // 力引导布局的结果有良好的对称性和局部聚合性，也比较美观。
              repulsion: 1000,            // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
              edgeLength: [150, 100]      // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
                                          // 这个距离也会受 repulsion。支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例:
                                          // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50      edgeLength: [10, 50]
            },
            layout: "force",            // 图的布局。[ default: 'none' ]
                                        // 'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置。
                                        // 'circular' 采用环形布局;'force' 采用力引导布局.
            // 标记的图形
            //symbol: "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",
            symbol: 'circle',
            lineStyle: {            // 关系边的公用线条样式。其中 lineStyle.color 支持设置为'source'或者'target'特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。
              normal: {
                color: '#fff',          // 线的颜色[ default: '#aaa' ]
                width: 1,               // 线宽[ default: 1 ]
                type: 'solid',          // 线的类型[ default: solid ]   'dashed'    'dotted'
                opacity: 0.5,           // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。[ default: 0.5 ]
                curveness: 0            // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。[ default: 0 ]
              }
            },
            label: {                // 关系对象上的标签
              normal: {
                show: true,                 // 是否显示标签
                position: "inside",         // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
                textStyle: {                // 文本样式
                  fontSize: 16
                }
              }
            },
            edgeLabel: {                // 连接两个关系对象的线上的标签
              normal: {
                show: true,
                textStyle: {
                  fontSize: 14
                },
                formatter: function(param) {        // 标签内容
                  return param.data.category;
                }
              }
            },
            data: [{
              name: "某一级公司",
              draggable: true,                // 节点是否可拖拽，只在使用力引导布局的时候有用。
              symbolSize: [100, 100],         // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
              itemStyle: {
                color: '#00b6c6'				// 关系图节点标记的颜色
              },
              category: "收入支出分析",         // 数据项所在类目的 index。
              info: '高新企业，掌握数十项技术'
            }, {
              name: "某二级公司0",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#0183fe'
              },
              category: "隶属"
            }, {
              name: "某二级公司1",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#0183fe'
              },
              category: "隶属"
            }, {
              name: "某二级公司2",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#0183fe'
              },
              category: "隶属"
            }, {
              name: "某二级公司3",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#0183fe'
              },
              category: "隶属"
            }, {
              name: "戚某",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#f25a2a'
              },
              category: "参股",
              info: '黑名单受限人群'
            }, {
              name: "王某",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#f25a2a'
              },
              category: "董事"
            }, {
              name: "李某",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#f25a2a'
              },
              category: "董事"
            }, {
              name: "季某",
              draggable: true,
              symbolSize: [80, 80],
              itemStyle: {
                color: '#f25a2a'
              },
              category: "参股"
            }],
            categories: [{              // 节点分类的类目，可选。如果节点有分类的话可以通过 data[i].category 指定每个节点的类目，类目的样式会被应用到节点样式上。图例也可以基于categories名字展现和筛选。
              name: "包含"            // 类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
            }, {
              name: "隶属"
            }],
            links: [{                   // 节点间的关系数据
              target: "某二级公司0",
              source: "某一级公司",
              category: "隶属"              // 关系对象连接线上的标签内容
            }, {
              target: "某二级公司1",
              source: "某一级公司",
              category: "隶属"
            }, {
              target: "某二级公司2",
              source: "某一级公司",
              category: "隶属"
            }, {
              target: "某二级公司3",
              source: "某一级公司",
              category: "隶属"
            }, {
              target: "戚某",
              source: "某一级公司",
              category: "参股"
            }, {
              target: "王某",
              source: "某一级公司",
              category: "董事"
            }, {
              target: "李某",
              source: "某二级公司3",
              category: "董事"
            }, {
              target: "季某",
              source: "某二级公司3",
              category: "参股"
            }, {
              target: "某一级公司",
              source: "某二级公司3",
              label: {
                show: true
              }
            }, {
              target: "某一级公司",
              source: "某二级公司3",
              category: "经营"
            }]
          }],

          animationEasingUpdate: "quinticInOut",          // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
          animationDurationUpdate: 100                    // 数据更新动画的时长。[ default: 300 ]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.echarts
  width: 100%
  height: 100%
</style>
