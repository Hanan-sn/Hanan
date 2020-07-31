<template>
  <div class="summary" flex>
    <Panel style="width: 550px">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <Card style="width: 100%;">
            <template slot="title">本月数据分析</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">资源信息分类统计</template>
            <template slot="content">

            </template>
          </Card>
          <Card style="width: 100%;">
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
          <div flex-box="1" id="container"></div>
          <Card style="width: 100%; height: 200px">
            <template slot="title">自然人资源数据分类统计</template>
            <template slot="content">

            </template>
          </Card>
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
          <Card style="width: 100%;">
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
  import { mapState, mapActions } from 'vuex'
  import DataSet from '@antv/data-set';
  import { Chart } from '@antv/g2';
  export default {
    name: 'Summary',
    components: {
      Panel,
      Card
    },
    computed: {
      ...mapState({
        relationChart: state =>state.summary.relationChart
      })
    },
    methods: {
      ...mapActions([
        'getSummaryRelationChart'
      ])
    },
    created() {
      this.getSummaryRelationChart().then(
        data => {
          const dv = new DataSet.View().source(this.relationChart, {
            type: 'hierarchy'
          });
          dv.transform({
            type: 'hierarchy.cluster'
          });

          const chart = new Chart({
            container: 'container',
            autoFit: true,
            height: 500,
            padding: [60, 0, 40, 0]
          });
          chart.axis(false);
          chart.legend(false);
          chart.coordinate('polar');
          chart.scale({
            x: {
              nice: true,
              sync: true,
            },
            y: {
              nice: true,
              sync: true,
            },
          });

          const edgeView = chart.createView();
          edgeView.data(dv.getAllLinks().map(link => ({
            x: [link.source.x, link.target.x],
            y: [link.source.y, link.target.y],
            source: link.source.id,
            target: link.target.id
          })));
          edgeView.edge()
            .position('x*y')
            .shape('smooth') // vhv
            .color('grey')
            .tooltip('source*target')
            .style({
              strokeOpacity: 0.5,
            });

          const nodeView = chart.createView();
          nodeView.data(dv.getAllNodes().map(node => ({
            hasChildren: !!(node.data.children && node.data.children.length),
            name: node.data.name,
            value: node.value,
            depth: node.depth,
            x: node.x,
            y: node.y
          })));
          nodeView.point()
            .position('x*y')
            .color('hasChildren')
            .label('name', {
              offset: 5,
              labelEmit: true,
              style:  {
                fill: 'grey',
                fontSize: 9,
              }
            });

          chart.render();
        }
      )
    }
  }
</script>

<style lang="stylus" scoped>

</style>
