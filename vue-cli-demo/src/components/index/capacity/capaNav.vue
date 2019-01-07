<template>
  <nav>
    <nav-swip :ca="cap.sw"></nav-swip>
    <nav-rec :ss="cap.rec"></nav-rec>
  </nav>
</template>

<script>
    import NavSwip from "./navSwip";
    import NavRec from "./navRec";
    export default {
        name: "capaNav",
      props:["cap"],
      components: {NavRec, NavSwip}
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
