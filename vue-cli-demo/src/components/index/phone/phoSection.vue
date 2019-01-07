<template>
  <section>
    <!--下方需循环-->
    <sec-activ v-if="ph.tiv" :key="h" :ti="p" v-for="(p,h) in ph.tiv"></sec-activ>
  </section>
</template>

<script>
    import SecActiv from "./secActiv";
    export default {
        name: "phoSection",
      props:["ph"],
      components: {SecActiv}
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
