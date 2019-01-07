<template>
  <div class="li-li">
    <li :key="l" v-for="(p,l) in prl" class="lis-li">
      <div class="li-img">
        <img :src="p.pic">
      </div>
      <div class="li-title">
        <h5>{{p.title}}</h5>
        <p>{{p.tit}}</p>
        <span>￥<em>{{p.num}}</em></span>
      </div>
    </li>
  </div>

</template>

<script>
    export default {
        name: "sectionPruLis",
      props:["prl"]
    }
</script>

<style scoped>
  .li-li {
    width: 100%;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .lis-li {
    width: 49.5%;
    height: 2.5rem;
    /*background: yellow;*/
    margin-bottom: .1rem;
    display: -webkit-flex;
    flex-direction: column;
    background-color: white;
  }
  .lis-li .li-img{
    width: 100%;
  }
  .li-img img{
    width: 100%;
    height: 1.8rem;
  }
  .lis-li .li-title{
    width: 100%;
    height: .7rem;
    display: -webkit-flex;
    justify-content: center;
    flex-direction: column;
    align-items:self-end;
  }
  .li-title h5{
    font-size: .14rem;
    color: black;
  }
  .li-title p{
    font-size: .12rem;
  }
  .li-title span{
    font-size: .12rem;
    color: red;
  }
  .li-title span em {
    font-size: .16rem;
  }
</style>
