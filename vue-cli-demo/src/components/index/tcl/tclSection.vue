<template>
  <section>
    <!--下方需循环-->
    <tcl-sec-activ v-if="ph.tiv" :key="h" :ti="p" v-for="(p,h) in ph.tiv"></tcl-sec-activ>
  </section>
</template>
<script>
  import TclSecActiv from "./tclSecActiv";
  export default {
    name: "tclSection",
    props:["ph"],
    components: {TclSecActiv}
  //  SecActiv
  }
</script>
<style scoped>
  section{
    width: 100%;
    /*height: 8rem;*/
    /*background-color: #8a6de9;*/
    display: -webkit-flex;
    flex-direction: column;
    /*padding-bottom: .2rem;*/
  }

</style>
