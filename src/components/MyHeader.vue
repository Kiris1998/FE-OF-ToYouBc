<template>
  <div class="myHeader">
    <div class="logo">
      <div>Logo</div>
      <div>图有设计</div>
    </div>
    <div>张俊</div>
  </div>
</template>

<script>
export default{
  name: 'MyHeader'
}
</script>

<style>
  .myHeader{
    display: flex;
    justify-content: space-between;
    background: #3A4C67;
    color: aliceblue;
    box-sizing: border-box;
    padding: 0px 50px 0px 30px;
    margin: 0;
    /* width: 100vw; */
    height: 300px;
  }
  .logo{
    display: flex;
    justify-content: space-between;
  }
  .logo div{
    margin-right: 30px;
  }
  .myHeader div{
    text-align: center;
    height: 300px;
    line-height: 300px;
    font-weight: bolder;
    font-size: 66px;
  }
</style>
