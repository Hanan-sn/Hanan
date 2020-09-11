<template>
  <div class="public" flex>
    <SidePanel>
      <template slot="inner">
        <Card>
          <template slot="title">
            <i class="card-title-font">部门双公示数据统计情况</i>
          </template>
          <template slot="content">
            <div class="public-statistic">

            </div>
          </template>
        </Card>
        <Card>
          <template slot="title">
            <i class="card-title-font">双公示数据7天提报率</i>
          </template>
          <template slot="content">
            <div class="public-submit">
              <v-chart :options="submitOption" theme="macarons" style="width: 100%; height: 200px;"></v-chart>
            </div>
          </template>
        </Card>
      </template>
    </SidePanel>
    <MiddlePanel>
      <template slot="inner">
        inner
      </template>
    </MiddlePanel>
    <SidePanel>
      <template slot="inner">
        inner
      </template>
    </SidePanel>
  </div>
</template>

<script>
  import MiddlePanel from '../../../components/MiddlePanel/MiddlePanel'
  import SidePanel from '../../../components/SidePanel/SidePanel'
  import Card from '../../../components/Card/Card'
  export default {
    name: 'Public',
    components: {
      Card,
      MiddlePanel,
      SidePanel
    },
    data() {
      return {
        submitOption: {}
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
