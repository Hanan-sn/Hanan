<template>
  <div class="public" flex>
    <Panel style="width: 550px">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">部门双公示数据统计情况</template>
            <template slot="content">

            </template>
          </Card>
          <Card style="width: 100%;">
            <template slot="title">双公示数据7填提报率</template>
            <template slot="content">

            </template>
          </Card>
        </div>
      </template>
    </Panel>
    <Panel flex-box="1" style="margin-left: 0; margin-right: 0;padding: 0;">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <div flex-box="1"></div>
          <Card style="width: 100%; height: 400px">
            <template slot="title">双公示采集情况</template>
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
            <template slot="title">一周新增</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">处罚修复数据统计</template>
            <template slot="content">

            </template>
          </Card>
          <Card style="width: 100%;">
            <template slot="title">行政许可种类分布</template>
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
    name: 'Public',
    components: {
      Panel,
      Card
    }
  }
</script>

<style lang="stylus" scoped>

</style>
