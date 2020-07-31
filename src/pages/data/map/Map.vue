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
  export default {
    name: 'Map',
    components: {
      Panel,
      Card
    }
  }
</script>

<style lang="stylus" scoped>

</style>
