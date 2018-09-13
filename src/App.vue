<template>
  <div id="app">
    <el-container>
      <el-header height="300px">
        <my-header></my-header>
      </el-header>
      <el-container>
        <el-aside width="350px">
          <my-aside></my-aside>
        </el-aside>
        <el-main>
          <my-main>
            <router-view>
            </router-view>
          </my-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyAside from './components/MyAside'
import MyMain from './components/MyMain'
import Daily from './components/Daily'
import Designer from './components/Designer'
import Other from './components/Other'
export default {
  name: 'app',
  components: {
    MyHeader,
    MyAside,
    MyMain,
    Daily,
    Designer,
    Other
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-aside{
  overflow: hidden;
  background: #3A4C67;
}
.el-header{
  background: #3A4C67;
  padding: 0;
  margin: 0;
}
.el-container .el-container{
  height: calc(100vh - 350px);
}
</style>
