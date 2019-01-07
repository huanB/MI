<template>
    <div class="box3">
      <capa-nav :cap="capa"></capa-nav>
      <capa-section v-if="capa.pru" :pru="capa.pru"></capa-section>
    </div>
</template>

<script>
    import CapaNav from "./capaNav";
    import CapaSection from "./capaSection";
    export default {
        name: "capaFlex",
      data(){
          return{
            capa:{}
          }
      },
      components: {CapaSection, CapaNav},
      created(){
          fetch("http://localhost:3000/ind").then(res=>{
            res.json().then(data=>{
              this.capa=data[2]
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
