<template>
  <el-table border :data="tabelData" style="width:100%">
    <el-table-column label="序号" prop="number" align="center" width="800"></el-table-column>
    <el-table-column label="申请人" prop="name" align="center" width="1300"></el-table-column>
    <el-table-column label="申请时间" prop="designer" align="center" width="1300"></el-table-column>
    <el-table-column label="查看详情" align="center" width="1000">
      <template slot-scope="scope">
        <el-button type="text">点击查看</el-button>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" width="1570">
      <template slot-scope="scope">
        <el-button type="text">同意</el-button>
        <el-button type="text">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Apply',
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
