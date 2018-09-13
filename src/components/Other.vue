<template>
  <el-tabs type="border-card" stretch=true>
    <el-tab-pane label="普通用户">
      <normal></normal>
    </el-tab-pane>
    <el-tab-pane label="黑名单用户">
      <black></black>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Black from './others/Black'
import Normal from './others/Normal'
export default {
  name: 'Daily',
  components: {
    Black,
    Normal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
