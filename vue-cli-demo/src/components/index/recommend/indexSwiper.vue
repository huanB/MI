<template>
    <div class="swip">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="w" v-for="(s,w) in swi"><img :src="s.pic"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from "swiper"
    export default {
        name: "indexSwiper",
      props:["swi"],
      mounted(){
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop:true,
          autoplay: {
            delay: 1000,//1秒切换一次
          },
          zoom : true,
          touchRatio : 2,
        });
      }
    }
</script>

<style scoped>
  .swip{
    width: 100%;
    height: 2rem;
    /*background: yellow;*/
  }
  .swip img{
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
