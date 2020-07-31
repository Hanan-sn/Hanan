<template>
  <div class="union" flex>
    <Panel style="width: 550px">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">联合奖惩页面</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">红黑名单统计</template>
            <template slot="content">

            </template>
          </Card>
        </div>
      </template>
    </Panel>
    <Panel flex-box="1" style="margin-left: 0; margin-right: 0;padding: 0;">
      <template slot="inner">
        <div flex="column" style="height: 100%;">
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">联合奖惩趋势分析</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">各部门奖惩查询次数统计</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;x">
            <template slot="title">备忘录执行趋势分析</template>
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
            <template slot="title">奖惩执行情况</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">处置措施Top100</template>
            <template slot="content">

            </template>
          </Card>
          <Card flex-box="1" style="width: 100%;">
            <template slot="title">黑名单退出趋势</template>
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
    name: 'Union',
    components: {
      Panel,
      Card
    }
  }
</script>

<style lang="stylus" scoped>

</style>
