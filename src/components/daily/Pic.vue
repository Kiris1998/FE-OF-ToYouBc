<template>
  <el-tabs>
    <el-tab-pane label="轮播图">
      <div class="container">
        <div>
          <img src="../../assets/logo.png">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </div>
         <div>
          <img src="../../assets/logo.png">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="标签">
      <el-row class="create">
        <el-button type="primary" round>新建标签</el-button>
      </el-row>
      <el-row class="tabsBox">
        <el-button plain round>人文</el-button>
        <el-button plain round>风景</el-button>
        <el-button plain round>黑白</el-button>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Pic'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
}
.tabsBox{
  margin: 100px;
  display: flex;
  flex-wrap: wrap;
}
.tabsBox .el-button{
  margin: 50px;
}
.tabsBox .el-button:hover{
  border: solid #F56C6C 1px;
  color: #F56C6C;
}
.create{
  padding-top: 50px;
}
.create .el-button{
  width: 300px;
  height: 150px;;
}
img{
  width: 500px;
  height: 500px;
  margin: 100px;
}
</style>
