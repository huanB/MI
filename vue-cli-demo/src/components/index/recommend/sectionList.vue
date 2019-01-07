<template>
  <div>
    <div  v-for="(s,e) in li" :key="e" class="list">
      <div v-if="s.pics01" class="lis-img">
        <img :src="s.pics01">
      </div>
      <!--下方模块需要拆分(已拆)   -->
      <div v-if="s.priv"  class="lis-priv">
        <div class="pri-title">
          <h2>小米闪购</h2>
          <div class="pri-time">
            <p>12点场</p>
            <div class="tim-times">
              <span>00</span>
              <em>:</em>
              <span>00</span>
              <em>:</em>
              <span>00</span>
            </div>
          </div>
        </div>
        <div class="pri-uls">
          <ul class="uls-ul">
            <lis-priv-li :pri="s.priv"></lis-priv-li>
          </ul>
        </div>
      </div>
      <!--style="display: none"-->
      <!--此下方是回顾 下方模块需要拆分(已拆)-->
      <div v-if="s.look" class="lis-look">
        <ul class="loo-ul">
          <list-look-li :loo="s.look"></list-look-li>
        </ul>
      </div>
      <div v-if="s.pics02" class="lis-img">
        <img :src="s.pics02">
      </div>
      <div v-if="s.pics03" class="lis-img">
        <img class="image" :src="s.pics03">
      </div>
      <!--此下方的板块是商品列表需要拆分(已拆)-->
      <div class="lis-pruduct">
        <ul class="pru-ul">
          <lis-pruduct-li v-if="s.pruduct" :pru="s.pruduct"></lis-pruduct-li>
        </ul>
        <div v-if="s.more" class="pru-more">
          <a href="javascript:;">
            <span>{{s.more}}</span>
            <span class="mui-icon mui-icon-forward"></span>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

    import LisPrivLi from "./lisPrivLi";
    import LisPruductLi from "./lisPruductLi";
    import ListLookLi from "./listLookLi";
    export default {
        name: "sectionList",
      props:["li"],
      mounted(){
          console.log(this.li)
      },
      components: {ListLookLi, LisPruductLi, LisPrivLi}
    }
</script>
<style scoped>
  .list{
    width: 100%;
    /*height: 20rem;*/
    /*background-color: #0062cc;*/
  }
  .list .lis-img{
    width: 100%;
    /*height: 1.5rem;*/
  }
  .lis-img img{
    width: 100%;
    height: 1.5rem;
  }
  .lis-img .image{
    width: 100%;
    height: 2rem;
    margin-top: .1rem;
  }
  .list .lis-priv{
    width: 100%;
    height: 2rem;
    /*background: yellowgreen;*/
    margin:.1rem 0rem;
    display: -webkit-flex;
    flex-direction: column;
  }
  .lis-priv .pri-title{
    width: 100%;
    height: .5rem;
    background: white;
    display: -webkit-flex;
    box-sizing: border-box;
    padding: 0rem .2rem;
    justify-content: space-between;
  }
  .pri-title h2{
    /*height: 100%;*/
    font-size: .2rem;
    color: #ff6801;
    line-height: .5rem;
  }
  .pri-title .pri-time{
    display: -webkit-flex;
    align-items: center;
  }
  .pri-time p{
    color: black;
    margin-right: .1rem;
  }
  .pri-time .tim-times{
    /*width: 100%;*/
    display: -webkit-flex;
  }
  .tim-times span{
    width: .2rem;
    height: .2rem;
    background: #000;
    color: white;
    font-size: .12rem;
    text-align: center;
    border-radius: .05rem;
  }
  .tim-times em{
    margin: 0rem .02rem;
  }
  .lis-priv .pri-uls{
    width: 100%;
    height: 1.5rem;
  }
  .pri-uls .uls-ul{
    width: 100%;
    height: 100%;
  }
  .list .lis-look{
    width: 100%;
    height: 1.2rem;
    background: white;
    margin: .1rem 0rem;
  }
  .lis-look .loo-ul{
    width: 100%;
    height: 100%;
  }
  .list .lis-pruduct{
    width: 100%;
    margin-bottom: .1rem;
  }
  .lis-pruduct .pru-ul{
    width: 100%;
    height: 100%
  }
  .lis-pruduct .pru-more{
    width: 100%;
    height: .5rem;
    background-color: white;
    border-top: 1px solid #999999;
  }
  .pru-more a{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .pru-more a span{
    color: #737373;
    font-size: .14rem;
  }
</style>
