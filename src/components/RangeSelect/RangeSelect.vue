<template>
  <div class="range-select">
    <i class="btn" :class="handleBtnTab === 0 ? 'active' : ''" @click="handleBtnTab = 0">本月</i>
    <i class="btn" :class="handleBtnTab === 1 ? 'active' : ''" @click="handleBtnTab = 1">本年</i>
    <b-date-picker type="date"
                   :open="dateOpen"
                   :value="date"
                   confirm
                   @on-change="handleChange"
                   @on-clear="handleClear"
                   @on-ok="handleOk"
                   placeholder="Select date">
      <a style="display: block;width: 76px;"
         href="javascript:void(0)"
         @click="handleClick">
        <template v-if="date === ''">选择日期</template>
        <template v-else>{{ date }}</template>
      </a>
    </b-date-picker>
  </div>
</template>

<script>
  export default {
    name: 'RangeSelect',
    date() {
      return {
        handleBtnTab: 0,
        date: '',
        dateOpen: false,
      }
    },
    watch: {
      date: function (n) {
        if (n === '') {
          this.handleBtnTab = 0
        }
      },
      handleBtnTab: function (n) {
        switch (n) {
          case 0:
            this.setExchangeData('本月')
            break
          case 1:
            this.setExchangeData('本年')
            break
          case 2:
            if (this.date !== '') {
              this.setExchangeData(this.date1)
            }
            break
        }
      }
    },
    methods:{
      handleClick(){
        this.dateOpen = true
      },
      handleChange(date){
        this.date = date
      },
      handleClear(){
        this.dateOpen = false
      },
      handleOk(){
        this.dateOpen = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .range-select
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

</style>
