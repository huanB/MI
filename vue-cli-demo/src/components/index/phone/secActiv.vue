<template>
  <div class="sec-activ">
    <div class="ac-img">
      <img :src="ti.recOne">
    </div>
    <!--<div class="ac-cial"></div>-->
    <!--<div class="ac-cial"></div>-->
    <acity-even :ev="ti.eve"></acity-even>
    <div class="ac-prulis">
      <ul class="pru-ul">
        <acity-pru-lis v-if="ti.pru" :pr="ti.pru"></acity-pru-lis>
      </ul>
    </div>
  </div>
</template>
<script>
    import AcityPruLis from "./acityPruLis";
    import AcityEven from "./acityEven";
    export default {
        name: "secActiv",
      props:["ti"],
      components: {AcityEven, AcityPruLis}
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
