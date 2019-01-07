<template>
  <div class="box3">
    <aro-nav :cap="aro"></aro-nav>
    <aro-section v-if="aro.pru" :pru="aro.pru"></aro-section>
  </div>
</template>

<script>
  import AroNav from "./aroNav";
  import AroSection from "./aroSection";
  export default {
    name: "aroFlex",
    data(){
      return{
        aro:{}
      }
    },
    components: {AroSection, AroNav,},
    created(){
      fetch("http://localhost:3000/ind").then(res=>{
        res.json().then(data=>{
          this.aro=data[5]
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
