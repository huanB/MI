<template>
  <div class="sec-activ">
    <div class="ac-img">
      <img :src="ti.recOne">
    </div>
    <!--<div class="ac-cial"></div>-->
    <!--<div class="ac-cial"></div>-->
    <tcl-sec-activ-even :ev="ti.eve"></tcl-sec-activ-even>
    <div class="ac-prulis">
      <ul class="pru-ul">
        <tcl-sec-activ-pru-lis v-if="ti.pru" :pr="ti.pru"></tcl-sec-activ-pru-lis>
      </ul>
    </div>
  </div>
</template>
<script>
  import TclSecActivPruLis from "./tclSecActivPruLis";
  import TclSecActivEven from "./tclSecActivEven";
  export default {
    name: "tclSecActiv",
    props:["ti"],
    components: {TclSecActivEven, TclSecActivPruLis,}
  }
</script>
<style scoped>
  .sec-activ{
    width: 100%;
    background: #2653b8;
    display: -webkit-flex;
    flex-direction: column;
    /*padding-bottom: 1rem;*/
  }
  .sec-activ .ac-img {
    width: 100%;
  }
  .ac-img img{
    width: 100%;
    height: .5rem;
  }

  .sec-activ .ac-prulis{
    width: 100%;
    /*height: 3rem;*/
    /*background: palegreen;*/
    box-sizing: border-box;
    padding: 0rem .1rem;
  }
  .ac-prulis .pru-ul{
    width: 100%;
    height: 100%;
  }

</style>
