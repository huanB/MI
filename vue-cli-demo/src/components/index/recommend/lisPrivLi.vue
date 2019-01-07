<template>
    <div class="ul-div">
      <li :key="r" v-for="(p,r) in pri" class="ul-li">
        <div class="li-img">
          <img :src="p.pic">
        </div>
        <div class="li-price">
          <span>￥<em>{{p.num}}</em></span>
          <p>￥{{p.nums}}</p>
          <!--<span></span>-->
        </div>
      </li>
    </div>
</template>

<script>
    export default {
        name: "lisPrivLi",
      props:["pri"]
    }
</script>

<style scoped>
  .ul-div{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    overflow: auto;
    box-sizing: border-box;
    padding-left: .1rem;
  }
  .ul-li{
    flex-shrink: 0;
    width: 1.2rem;
    height: 100%;
    background: white;
    margin-right: .1rem;
  }
  .ul-li .li-img{
    width: 100%;
    /*height: 1rem;*/
    /*background-color: white;*/
  }
  .li-img img{
    width: 100%;
    height: 1rem;
  }
  .ul-li .li-price{
    width: 100%;
    display: -webkit-flex;
    /*align-items: center;*/
    justify-content: center;
  }
  .li-price span{
    font-size: .14rem;
    color: red;
    line-height: .4rem;
  }
  .li-price span em{
    font-size: .16rem;
  }
  .li-price p{
    text-decoration: line-through;
    line-height: .4rem;
  }
</style>
