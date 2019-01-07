<template>
  <section>
    <!--icspri01.png-->
    <div v-if="pru" :key="r" v-for="(p,r) in pru" class="prudoc">
      <div v-if="p.pics" class="pru-tit">
        <img :src="p.pics">
      </div>
      <div v-if="p.mend" class="pru-mend">
        <aro-sec-pru-mend :men="p.mend"></aro-sec-pru-mend>
      </div>
      <div v-if="p.pruLis" class="pru-lis">
        <ul class="lis-ul">
          <aro-sec-pru-lis :prl="p.pruLis"></aro-sec-pru-lis>
        </ul>
      </div>
      <!--此处加图片-->
      <div v-if="p.picbott" class="pru-bott">
        <img :src="p.picbott">
      </div>
    </div>
  </section>
</template>

<script>
  import AroSecPruMend from "./aroSecPruMend";
  import AroSecPruLis from "./aroSecPruLis";
  export default {
    name: "aroSection",
    props:["pru"],
    components: {AroSecPruLis, AroSecPruMend,  }
  }
</script>

<style scoped>
  section{
    width: 100%;
    /*background-color: #8a6de9;*/
    /*padding-bottom: .2rem;*/
  }
  section .prudoc{
    width: 100%;
    /*height: 5rem;*/
    /*background: white;*/
    display: -webkit-flex;
    flex-direction: column;
  }
  .prudoc .pru-tit{
    width: 100%;
  }
  .pru-tit img{
    width: 100%;
    height: .45rem;
  }
  .prudoc .pru-mend{
    width: 100%;
    height: 2.5rem;
    background-color: white;
  }


  .prudoc .pru-lis{
    width: 100%;
    /*background: red;*/
  }
  .pru-lis .lis-ul{
    width: 100%;
  }
  .prudoc .pru-bott{
    width: 100%;
    margin-bottom: .1rem;
    /*height: 2rem;*/
    /*background-color: #8a6de9;*/
  }
  .pru-bott img{
    width: 100%;
    height:1.5rem;
  }
</style>
