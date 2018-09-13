<template>
  <el-table border :data="tabelData" style="width:100%">
    <el-table-column label="序号" prop="number" align="center" width="1000"></el-table-column>
    <el-table-column label="用户昵称" prop="name" align="center" width="1100"></el-table-column>
    <el-table-column label="加入时间" prop="time" align="center" width="1150"></el-table-column>
    <el-table-column label="查看个人信息" align="center" width="1350">
      <template slot-scope="scope">
        <el-button type="text">点击查看</el-button>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" width="1350">
      <template slot-scope="scope">
        <el-button type="text">移出黑名单</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Black',
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
