<template>
  <el-table border :data="tabelData" style="width:100%">
    <el-table-column label="序号" prop="number" align="center" width="800"></el-table-column>
    <el-table-column label="设计师昵称" prop="name" align="center" width="1100"></el-table-column>
    <el-table-column label="订单类型" prop="designer" align="center" width="1350"></el-table-column>
    <el-table-column label="订单时间" prop="time" align="center" width="1350"></el-table-column>
    <el-table-column label="查看订单" align="center" width="1350">
      <template slot-scope="scope">
        <el-button type="text">点击查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      tabelData: [
        {
          number: 1,
          name: 'Kiris',
          designer: 'K',
          time: 123
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
