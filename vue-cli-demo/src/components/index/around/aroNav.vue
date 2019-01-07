<template>
  <nav>
    <aro-nav-swip :ca="cap.sw"></aro-nav-swip>
    <aro-nav-rec :ss="cap.rec"></aro-nav-rec>
  </nav>
</template>

<script>
  import AroNavSwip from "./aroNavSwip";
  import AroNavRec from "./aroNavRec";
  export default {
    name: "aroNav",
    props:["cap"],
    components: {AroNavRec, AroNavSwip, }
  }
</script>

<style scoped>
  nav{
    width: 100%;
    background-color: white;
    display: -webkit-flex;
    flex-direction: column;
    margin-bottom: .1rem;
  }
</style>
