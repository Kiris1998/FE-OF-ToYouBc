<template>
  <el-tabs type="border-card" stretch=true>
    <el-tab-pane label="入驻管理">
      <apply></apply>
    </el-tab-pane>
    <el-tab-pane label="设计师列表">
      <design></design>
    </el-tab-pane>
    <el-tab-pane label="订单列表">
      <orders></orders>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Apply from './designer/Apply'
import Design from './designer/Design'
import Orders from './designer/Orders'
export default {
  name: 'Daily',
  components: {
    Apply,
    Design,
    Orders
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
