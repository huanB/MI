<template>
  <div class="me-div">
    <div class="men-img">
      <img :src="men.pic">
    </div>
    <div class="men-title">
      <div class="tit">
        <h6>{{men.title}}</h6>
        <span>￥<em>{{men.num}}</em></span>
      </div>
      <p>{{men.tit}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "aroSecPruMend",
    props:["men"],
  }
</script>

<style scoped>
  .me-div{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
  .men-img {
    width: 100%;
  }
  .men-img img{
    width: 100%;
    height: 1.8rem;
  }
  .pru-mend .men-title{
    width: 100%;
    height: .7rem;
    /*background-color: #ec971f;*/
    display: -webkit-flex;
    flex-direction: column;
    /*align-items: center;*/
    box-sizing: border-box;
    padding: .1rem .1rem;
  }
  .men-title .tit{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .tit h6{
    font-size: .14rem;
    color: black;
  }
  .tit span{
    font-size: .12rem;
    color: red;
  }
  .tit span em{
    font-size: .16rem;
  }
  .men-title p{
    font-size: .12rem;
  }
</style>
