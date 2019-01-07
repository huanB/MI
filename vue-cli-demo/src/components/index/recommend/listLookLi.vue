<template>
    <div class="ul-div">
      <li :key="o" v-for="(l,o) in loo" class="loo-li">
        <div class="loo-img">
          <img :src="l.pic">
        </div>
        <div class="look-tit">
          <h5>{{l.tit}}</h5>
          <p>{{l.title}}</p>
        </div>
      </li>
      <li class="loo-li">
        <div class="loo-img">
          <a href="javascript:;">查看更多精彩</a>
        </div>
      </li>
    </div>
</template>

<script>
    export default {
        name: "listLookLi",
      props:["loo"],
    }
</script>

<style scoped>
  .ul-div{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    overflow: auto;
    box-sizing: border-box;
    padding-left: .05rem;
  }
  .loo-li{
    width: 1.4rem;
    height: 100%;
    background: white;
    margin-right: .05rem;
    flex-shrink: 0;
    display: -webkit-flex;
    flex-direction: column;
  }
  .loo-li .loo-img{
    width: 100%;
    /*background: saddlebrown;*/
  }
  .loo-img img{
    width: 100%;
    height: .8rem;
    border-radius: .1rem;
  }
  .loo-img a{
    display: block;
    width: 100%;
    height: .8rem;
    border-radius: .1rem;
    border: .03rem solid #999999;
    font-size: .14rem;
    line-height: .7rem;
    text-align: center;
    box-sizing: border-box;
  }
  .loo-li .look-tit{
    width: 100%;
    height: .4rem;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
  .look-tit h5{
    font-size: .12rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
  }
  .look-tit p{
    font-size: .12rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
