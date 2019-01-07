<template>
  <div class="li-div">
    <li :key="r" v-for="(p,r) in pr" class="pru-li">
      <div class="pru-img">
        <img :src="p.pic">
        <span v-if="p.pir">
              <em>{{p.pir}}</em>
              <em>{{p.pirc}}</em>
            </span>
      </div>
      <div class="pru-title">
        <span class="h2">{{p.title}}</span>
        <span class="tit">{{p.tit}}</span>
        <div class="nums">
          <span>￥<em>{{p.num}}</em>起</span>
          <p v-if="p.nums">￥{{p.nums}}</p>
        </div>
        <a href="javascript:;">立即购买</a>
      </div>
    </li>
  </div>
</template>

<script>
    export default {
        name: "acityPruLis",
      props:["pr"]
    }
</script>

<style scoped>
  .li-div {
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .pru-li{
    width: 49%;
    height: 3rem;
    background: white;
    margin-bottom: .1rem;
    display: -webkit-flex;
    flex-direction: column;
  }
  .pru-li .pru-img{
    width: 100%;
    /*height: 1.5rem;*/
    position: relative;
  }
  .pru-img img{
    width: 100%;
    height: 2rem;
  }
  .pru-img span{
    width: .5rem;
    height: .5rem;
    position: absolute;
    background: #f86d70;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: .1rem;
    bottom: .1rem;
    border-radius: 50%;
    opacity: .8;
  }
  .pru-img span em {
    font-size: .12rem;
    color: white;
  }
  .pru-li .pru-title{
    width: 100%;
    height: 1rem;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pru-title .h2{
    font-size: .14rem;
  }
  .pru-title .tit{
    font-size: .12rem;
  }
  .pru-title .nums{
    display: -webkit-flex;

  }
  .nums span{
    font-size: .12rem;
    color: red;
  }
  .nums span em{
    font-size: .16rem;
  }
  .nums p{
    text-decoration: line-through;
  }
  .pru-title a{
    width: 1rem;
    height: .3rem;
    font-size: .14rem;
    line-height: .3rem;
    text-align: center;
    background: #ea625b;
    color: white;
  }
</style>
