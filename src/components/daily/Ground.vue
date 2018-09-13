<template>
  <el-table border :data="tabelData" style="width:100%">
    <el-table-column label="序号" prop="number" align="center" width="500"></el-table-column>
    <el-table-column label="作品名称" prop="name" align="center" width="1200"></el-table-column>
    <el-table-column label="设计师" prop="designer" align="center" width="1200"></el-table-column>
    <el-table-column label="上传时间" prop="time" align="center" width="1270"></el-table-column>
    <el-table-column label="操作" align="center" width="1800">
      <template slot-scope="scope">
        <el-button type="text">查看作品</el-button>
        <el-button type="text">删除作品</el-button>
        <el-button type="text">移除广场</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Ground',
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
<style>
  .cell{
    height: 100px !important;
    line-height: 100px !important;
  }
</style>
