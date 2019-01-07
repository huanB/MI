<template>
  <div class="flexs">
    <index-swiper v-if="recom.sw" :swi="recom.sw"></index-swiper>
    <index-nav v-if="recom.nav" :na="recom.nav"></index-nav>
    <index-section v-if="recom" :se="recom"></index-section>
  </div>

</template>

<script>
  import IndexSwiper from "./indexSwiper";
  import IndexNav from "./indexNav";
  import IndexSection from "./indexSection";
    export default {
        name: "indexFlex",
      data(){
          return{
            recom:{}
          }
      },
      components: {IndexSection, IndexNav, IndexSwiper,},
      created(){
        fetch("http://10.35.167.46:3000/ind").then(res=>{
          res.json().then(data=>{
            this.recom=data[0]
            // console.log(this.recom)
          })
        })
      }
    }
</script>

<style scoped>

</style>
