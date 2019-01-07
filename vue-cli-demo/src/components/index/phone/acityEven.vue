<template>
  <div class="ac-even">
    <div class="even-img">
      <img :src="ev.pic">
      <span v-if="ev.pir">
          <em>{{ev.pir}}</em>
          <em>{{ev.pirc}}</em>
        </span>
    </div>
    <div class="even-tit">
      <div class="tit-num">
        <h5>{{ev.title}}</h5>
        <div class="num">
          <span>￥<em>{{ev.num}}</em>起</span>
          <p v-if="ev.nums">￥{{ev.nums}}</p>
        </div>
      </div>
      <div class="tit-buy">
        <h6>{{ev.tit}}</h6>
        <a href="javascript:;">立即购买</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "acityEven",
      props:["ev"],
    }
</script>

<style scoped>
  .ac-even{
    width: 100%;
    height: 3.8rem;
    /*background: white;*/
    box-sizing: border-box;
    padding: 0rem .1rem;
    display: -webkit-flex;
    flex-direction: column;
  }
  .ac-even .even-img{
    width: 100%;
    position: relative;
  }
  .even-img img{
    width: 100%;
    height: 3rem;
  }
  .even-img span{
    position: absolute;
    width: .5rem;
    height: .5rem;
    bottom: .1rem;
    right: .1rem;
    background: #f86d70;
    border-radius: 50%;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: .8;
  }
  .even-img span em{
    font-size: .12rem;
    color: white;
  }
  .ac-even .even-tit{
    width: 100%;
    height: .8rem;
    background: white;
    display: -webkit-flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0rem .1rem;
    /*align-items: center;*/
    justify-content: center;
  }
  .even-tit .tit-num{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .tit-num h5{
    font-size: .16rem;
    color: black;
  }
  .tit-num .num{
    display: -webkit-flex;
  }
  .num span{
    font-size: .12rem;
    color: red;
  }
  .num span em{
    font-size: .16rem;
  }
  .num p{
    text-decoration: line-through;
  }
  .even-tit .tit-buy{
    width: 100%;
    height: .4rem;
    display: -webkit-flex;
    justify-content: space-between;
    /*margin-top: .05rem;*/
    align-items: center;
  }
  .tit-buy a{
    width: 1rem;
    height: .3rem;
    background: #ea625b;
    font-size: .14rem;
    color: white;
    text-align: center;
    line-height: .3rem;
  }
</style>
