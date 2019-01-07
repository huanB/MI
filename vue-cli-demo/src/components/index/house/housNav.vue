<template>
  <nav>
    <hous-nav-swip :ca="cap.sw"></hous-nav-swip>
    <hous-nav-rec :ss="cap.rec"></hous-nav-rec>
  </nav>
</template>

<script>
  import HousNavSwip from "./housNavSwip";
  import HousNavRec from "./housNavRec";
  export default {
    name: "housNav",
    props:["cap"],
    components: {HousNavRec, HousNavSwip,  }
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
