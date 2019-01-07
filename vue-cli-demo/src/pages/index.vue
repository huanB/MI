<!-- :inx="ind.hea"



-->

<template>

  <div class="box">
    <!--<index-header>IndexPhone</index-header>-->
    <header>
      <ul class="he-ul">
        <router-link tag="li" to="/IndexRecommend" class="he-li">
          <a class="li-a" href="javascript:;">推荐</a>
        </router-link>
        <router-link tag="li" to="/IndexPhone" class="he-li">
          <a class="li-a" href="javascript:;">手机</a>
        </router-link>
        <router-link tag="li" to="/IndexCapacity" class="he-li">
          <a class="li-a" href="javascript:;">智能</a>
        </router-link>
        <router-link tag="li" to="/IndexTcl" class="he-li">
          <a class="li-a" href="javascript:;">电视</a>
        </router-link>
        <router-link tag="li" to="/IndexNote" class="he-li">
          <a class="li-a" href="javascript:;">笔记本</a>
        </router-link>
        <router-link tag="li" to="/IndexAround" class="he-li">
          <a class="li-a" href="javascript:;">生活周边</a>
        </router-link>
        <router-link tag="li" to="/IndexHouse" class="he-li">
          <a class="li-a" href="javascript:;">家电</a>
        </router-link>
      </ul>
      <div class="he-opt">
        <a href="javascript:;">
          <i class="iconfont icon-jiantou1"></i>
        </a>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <!--<index-footer></index-footer>-->
  </div>
</template>
<script>
  import IndexCapacity from "../components/index/capacity/capaFlex.vue"
  // import IndexFooter from "../components/index/indexFooter";
    export default {
        name: "index",
      components: {IndexCapacity,},
      //IndexFooter
      data(){
          return{
            ind:{}
          }
      },
      mounted(){
          // var str
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
      created(){
        fetch("http://localhost:3000/ind").then(res=>{
          res.json().then(data=>{
            this.ind=data[0]
            // console.log(this.ind)
          })
        })
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    overflow: auto;
  }
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
  main{
    flex: 1;
    overflow: auto;
    position: relative;
  }
</style>








   <!--此下面是 is 跳转方法-->
<!--<div class="box">-->
    <!--<index-header>IndexPhone</index-header>-->
<!--<header>-->
  <!--<ul class="he-ul">-->
    <!--<li v-if="h.nava" :key="e" v-for="(h,e) in ind.hea" class="he-li">-->
      <!--<a class="li-a" href="javascript:;">{{h.nava}}</a>-->
    <!--</li>-->
  <!--</ul>-->
  <!--<div class="he-opt">-->
    <!--<a href="javascript:;">-->
      <!--<i class="iconfont icon-jiantou1"></i>-->
    <!--</a>-->
  <!--</div>-->
<!--</header>-->
<!--<main>-->
  <!--<router-view></router-view>-->
<!--</main>-->
<!--&lt;!&ndash;<index-footer></index-footer>&ndash;&gt;-->
<!--</div>-->


