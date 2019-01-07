<template>
  <div class="swip">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="a" v-for="(c,a) in ca"><img :src="c.pic"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    name: "housNavSwip",
    props:["ca"],
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
      });

    }
  }
</script>

<style scoped>
  .swip{
    width: 100%;
    height: 2rem;
    /*background: #ec971f;*/
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
