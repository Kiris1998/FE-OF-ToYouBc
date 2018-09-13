<template>
  <div class="myAside">
    <el-menu mode="vertical"
             :default-active="index"
             background-color="#3A4C67"
             text-color="white"
             active-text-color="white"
             :collapse=true
             :router=true>
             <!-- 我觉得上面这两个属性有bug -->
      <el-menu-item index="daily">
        <i class="icon iconfont icon-richangjianguan"></i>
        <span slot="title">日常管理</span>
      </el-menu-item>
      <el-menu-item index="designer">
        <i class="icon iconfont icon-shejishi"></i>
        <span slot="title">设计师</span>
      </el-menu-item>
      <el-menu-item index="other">
        <i class="icon iconfont icon-other"></i>
        <span slot="title">其他</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import '../assets/iconfont.css'
export default{
  name: 'MyAside',
  data () {
    return {
      index: 'daily'
    }
  },
  mounted () {
    let arr = window.location.href.toString().split('/')
    this.index = arr[arr.length - 1]
  }
}
</script>

<style scoped>
  .myAside{
    background: #3A4C67;
    height: calc(100vh - 350px);
    overflow: hidden;
  }
  .el-menu--collapse {
    width: 350px;
}
  .el-menu-item{
    height: 200px;
    line-height: 200px;
  }
  .el-menu-item i {
    display: inline-block;
    padding-top: 10px;
}
  .iconfont{
    font-size: 100px;
  }
  ul{
    display: flex;
    flex-direction: column;
    width: 350px;
  }
</style>
