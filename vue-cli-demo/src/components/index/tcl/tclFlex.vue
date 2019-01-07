<template>
  <div class="box2">
    <tcl-nav :ac="pho.act"></tcl-nav>
    <tcl-section :ph="pho"></tcl-section>
  </div>
</template>

<script>
  import TclNav from "./tclNav";
  import TclSection from "./tclSection";
  export default {
    name: "tclFlex",
    data(){
      return{
        pho:{}
      }
    },
    components: {TclSection, TclNav},
    created(){
      fetch("http://localhost:3000/ind").then(res=>{
        res.json().then(data=>{
          this.pho=data[3]
          console.log(this.pho)
        })
      })
    }
  }
</script>

<style scoped>

</style>
