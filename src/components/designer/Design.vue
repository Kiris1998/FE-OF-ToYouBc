<template>
  <el-table border :data="tabelData" style="width:100%">
    <el-table-column label="序号" prop="number" align="center" width="800"></el-table-column>
    <el-table-column label="设计师昵称" prop="name" align="center" width="1050"></el-table-column>
    <el-table-column label="查看作品" align="center" width="1300">
      <template slot-scope="scope">
        <el-button type="text">点击查看</el-button>
      </template>
    </el-table-column>
    <el-table-column label="查看订单" align="center" width="1300">
      <template slot-scope="scope">
        <el-button type="text">点击查看</el-button>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" width="1500">
      <template slot-scope="scope">
        <el-button type="text">取消设计师资格</el-button>
        <el-button type="text">加入黑名单</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Design',
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
