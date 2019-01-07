<template>
  <div class="paper">
    <div class="pa-top">
      <!--left-->
      <div class="per">
        <h2>商城早报</h2>
      </div>
      <!--right-->
      <div class="per-lis" :key="a" v-for="(p,a) in pa">
        <a class="lis-a" href="javascript:;">{{p.title}}</a>
        <!--此处应该是点击的数据

    {"title":"超爱&福利:米家"},
    {"title":"超爱&福利:米家小饭煲用户"},
    {"title":"超爱&福利:米家小饭煲用"},
    {"title":"超爱&福利:米家小"},
    {"title":"超爱&福利:米家小饭"},
    {"title":"超爱&福利:米家小饭煲"},
    {"title":"超爱&福利:米家"},
    {"title":"超爱&福利:米家小饭煲用户专享福利"},
    {"title":"超利:米家小户福利"}
        -->
      </div>
    </div>
    <div class="pa-bottom">
      <div class="bot-left">
        <img class="imgs" src="../../../../static/img/ifsep01.png" alt="">
      </div>
      <div class="bot-left bot-right">
          <div class="rig-top">
            <img src="../../../../static/img/ifsep02.png" alt="">
          </div>
          <div class="rig-top">
            <img src="../../../../static/img/ifsep03.png" alt="">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "sectionPaper",
      props:["pa"],
      mounted(){
        console.log(this.pa)
      }
    }
</script>

<style scoped>
  .paper{
    width: 100%;
    /*height: 3rem;*/
    background: white;
    display: -webkit-flex;
    flex-direction: column;
    box-sizing: border-box;
    border-top: 1px solid #999999;
    /*margin-bottom: .1rem;*/
  }
  .paper .pa-top{
    width: 100%;
    height: .5rem;
    /*background-color: #00B7FF;*/
    box-sizing: border-box;
    display: -webkit-flex;
    margin-bottom: .1rem;
  }
  .pa-top .per{
    height: 100%;
    /*width: ;*/
    /*padding: 0rem .15rem;*/
    display: -webkit-flex;
    align-items: center;
  }
  .per h2{
    font-size: .15rem;
    color: #f16137;
    line-height: .3rem;
    padding: 0rem .15rem;
    border-right: 1px solid #999999;
  }
  .pa-top .per-lis{
    height: 100%;
    /*background: #4cd964;*/
    margin-left: .15rem;
    /*align-items: center;*/
  }
  .per-lis a{
    height: 100%;
    line-height: .5rem;
    font-size: .14rem;
  }
  .paper .pa-bottom{
    width: 100%;
    /*background-color: yellow;*/
    display: -webkit-flex;
    justify-content: space-between;
  }
  .pa-bottom .bot-left{
    width: 49%;
    height: 100%;
    /*background: #0062cc;*/
    display: -webkit-flex;
    flex-direction: column;
  }
  .bot-left .imgs{
    width: 100%;
    height: 2.8rem;
  }
  .bot-right .rig-top{
    width: 100%;
    margin-bottom: .2rem;
  }
  .bot-right .rig-top:last-child{
    margin-bottom: 0rem;
  }
  .rig-top img{
    width: 100%;
    height: 1.3rem;
  }
</style>
