<!--:key="n" v-for="(i,n) in inx"
{{i.nava}}
props:["inx"]
-->
<template>
    <header>
      <ul class="he-ul">
        <router-link tag="li" to="IndexPhone" class="he-li">
          <a class="li-a" href="javascript:;">推荐sdafdsgfdsg</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">小米感恩季</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">手机</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">智能</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">电视</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">笔记本</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">生活周边</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">家电</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">新款游戏本</a>
        </router-link>
        <router-link tag="li" to="" class="he-li">
          <a href="javascript:;">影音娱乐</a>
        </router-link>
      </ul>
      <div class="he-opt">
        <a href="javascript:;">
          <i class="iconfont icon-jiantou1"></i>
        </a>
      </div>
    </header>
</template>

<script>
    import $ from "jquery"
    export default {
        name: "indexHeader",
        mounted(){
          $(".he-li").click(function(){
            $(this).children().css({
              "color":"red",
              "border-bottom": ".03rem solid #ff4a00"
            })
            $(this).siblings().children().css({
              "color":"#999999",
              "border-bottom": "none"
            })
          })
        },
        methods:{

        }
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: .3rem;
    /*background: red;*/
    display: -webkit-flex;
  }
  header .he-ul{
    width: 4rem;
    height:100%;
    /*background: #4cd964;*/
    display: -webkit-flex;
    overflow: auto;
  }
  .he-ul .he-li{
    flex-shrink: 0;
    height: 100%;
    padding: 0rem .13rem;
    /*background: blue;*/
    display: -webkit-flex;
    /*align-items: center;*/
  }
  .he-ul .he-li:nth-of-type(1) a{
    color: #ff4a00;
    border-bottom: .03rem solid #ff4a00;
  }
  .he-li a{
    box-sizing: border-box;
    height: 100%;
    line-height: .3rem;
    font-size: .12rem;
    color: #999999;
  }
  header .he-opt{
    width: .6rem;
    height: 100%;
    /*background-color: #ffffff;*/
    /*box-shadow:   0rem  0rem .2rem -0.1rem red;*/
  }
  .he-opt a{
    display: block;
    width: 100%;
    height: 100%;
    /*background-color: chartreuse;*/
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  .he-opt a .iconfont{
    display: block;
    font-size: .15rem;
    color: #c0c0c0;
  }
</style>
