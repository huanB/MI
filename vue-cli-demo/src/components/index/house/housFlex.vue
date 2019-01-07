<template>
  <div class="box3">
    <hous-nav :cap="hous"></hous-nav>
    <hous-section v-if="hous.pru" :pru="hous.pru"></hous-section>
  </div>
</template>

<script>
  import HousNav from "./housNav";
  import HousSection from "./housSection";
  export default {
    name: "housFlex",
    data(){
      return{
        hous:{}
      }
    },
    components: {HousSection, HousNav,  },
    created(){
      fetch("http://localhost:3000/ind").then(res=>{
        res.json().then(data=>{
          this.hous=data[6]
        })
      })
    }
  }
</script>

<style scoped>
  .box3{
    /*height: 10rem;*/
    /*background-color: #ec971f;*/
  }
</style>
