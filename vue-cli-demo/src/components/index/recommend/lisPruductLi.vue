<template>
  <div class="ul-div">
    <li :key="r" v-for="(p,r) in pru" class="pru-li">
      <div class="pru-img">
        <img :src="p.pic">
        <span v-if="p.prtit" class="img-privi">
              <em>{{p.prtit}}</em>
              <em>{{p.pri}}</em>
            </span>
      </div>
      <div class="pru-title">
        <span class="h2">{{p.title}}</span>
        <p class="title-tit">{{p.tit}}</p>
        <div class="num">
          <span>￥<em>{{p.num}}</em>起</span>
          <p v-if="p.nums">￥{{p.nums}}</p>
        </div>
      </div>
    </li>
  </div>

</template>

<script>
    export default {
        name: "lisPruductLi",
      props:["pru"]
    }
</script>

<style scoped>
  .ul-div {
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .pru-li{
    width: 49%;
    height: 2.5rem;
    background: white;
    margin-top: .05rem;
    display: -webkit-flex;
    flex-direction: column;
  }
  .pru-li .pru-img{
    width: 100%;
    position: relative;
  }
  .pru-img img{
    width: 100%;
    height: 1.9rem;
  }
  .pru-img .img-privi{
    position: absolute;
    width: .5rem;
    height: .5rem;
    background: red;
    bottom: .1rem;
    right: .1rem;
    border-radius: 50%;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: .8;
  }
  .img-privi em{
    font-size: .12rem;
    color: white;
    line-height: .12rem;
  }
  .pru-li .pru-title{
    width: 100%;
    height: .6rem;
    /*background: #8a6de9;*/
    box-sizing: border-box;
    padding: 0rem .1rem;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
  .pru-title .h2{
    font-size: .14rem;
  }
  .pru-title .title-tit{
    font-size: .12rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pru-title .num{
    width: 100%;
    display: -webkit-flex;
  }
  .num span{
    font-size: .12rem;
    color: red;
  }
  .num span em{
    font-size: .14rem;
  }
  .num p{
    text-decoration: line-through;
  }
</style>
