<template>
  <div class="nav-rec">
    <ul class="rec-ul">
      <li :key="e" v-for="(r,e) in ss" class="rec-li">
        <a href="javascript:;">
          <img :src="r.pic">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "housNavRec",
    props:["ss"],
  }
</script>

<style scoped>
  .nav-rec{
    width: 100%;
    height: .8rem;
  }
  .nav-rec .rec-ul{
    width: 100%;
    height:100% ;
    display: -webkit-flex;
  }
  .rec-ul .rec-li{
    width: 20%;
    height: 100%;
    /*background: palegreen;*/
  }
  .rec-li a{
    width: 100%;
    height: 100%;
  }
  .rec-li a img{
    width: 100%;
    height: 100%;
  }
</style>
