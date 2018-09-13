<template>
  <el-tabs type="border-card" stretch=true>
    <el-tab-pane label="推送">
      <submit></submit>
    </el-tab-pane>
    <el-tab-pane label="广场">
      <ground></ground>
    </el-tab-pane>
    <el-tab-pane label="轮播图与标签">
      <pic></pic>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Submit from './daily/Submit'
import Ground from './daily/Ground'
import Pic from './daily/Pic'
export default {
  name: 'Daily',
  components: {
    Submit,
    Ground,
    Pic
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#tab-0,#tab-1,#tab-2{
  height: 100px;
  line-height: 100px
}
</style>
