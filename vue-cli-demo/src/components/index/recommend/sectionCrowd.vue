<template>
  <!--此模块在第七行有个图标没写-->
  <div class="crowd">
    <div class="crow-tit">
      <div class="tit-top">
        <h2>小米众筹</h2>
        <a class="tit-a" href="javascript:;">
          <span>更多</span>
          <!--此下方是个箭头-->
          <!--<i class="iconfont icon-xxx"></i>-->
          <!--<span class="mui-icon mui-icon-forward"></span>-->
        </a>
      </div>
      <div class="tit-img">
        <img src="../../../../static/img/indsw03.png" alt="">
      </div>
    </div>
    <div class="crow-title">
      <span class="title">米家投影仪&nbsp;青春版</span>
      <div class="tage">
        <span></span>
      </div>
      <div class="sustan">
        <span>62651支持</span>
        <p>70%</p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "sectionCrowd"
    }
</script>
<style scoped>
  .crowd{
    width: 100%;
    height: 3rem;
    background: white;
    margin: .1rem 0rem;
    display: -webkit-flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0rem .1rem;
  }
  .crowd .crow-tit{
    width: 100%;
    height: 2.2rem;
    /*background-color: #0062cc;*/
  }
  .crow-tit .tit-top{
    width: 100%;
    height: .5rem;
    /*background: #8a6de9;*/
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .tit-top h2{
    font-size: .2rem;
  }
  .tit-top .tit-a{
    display: -webkit-flex;

  }
  .tit-a span{
    font-size: .16rem;
    color: #999999;
    margin-right: .2rem;
  }
  .tit-a .iconfont{
    display:block;
    font-size: .16rem;
  }
  .crow-tit .tit-img{
    width: 100%;
    /*height: 1.7rem;*/
    /*background: #0062cc;*/
  }
  .tit-img img{
    width: 100%;
    height: 1.7rem;
    border-radius: .2rem;
  }
  .crowd .crow-title{
    width: 100%;
    height: .7rem;
    /*background: palegoldenrod;*/
    display: -webkit-flex;
    flex-direction: column;
  }
  .crow-title .title{
    font-size: .18rem;
    line-height: .4rem;
  }
  .crow-title .tage{
    width: 100%;
    height: .05rem;
    /*background: pink;*/
    border-radius: .1rem;
  }
  .tage span{
    display: block;
    width: 70%;
    height: 100%;
    background: #ff7400;
    border-radius: .1rem;
  }
  .crow-title .sustan{
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .sustan span{
    font-size: .12rem;
    color: #999999;
    line-height: .3rem;
  }
  .sustan p{
    color: #ff7400;
    line-height: .3rem;
  }
</style>
