<template>
  <section>
    <!--下方需循环-->
    <note-sec-activ v-if="ph.tiv" :key="h" :ti="p" v-for="(p,h) in ph.tiv"></note-sec-activ>
  </section>
</template>
<script>
  import NoteSecActiv from "./noteSecActiv";
  export default {
    name: "noteSection",
    props:["ph"],
    components: {NoteSecActiv, }
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
