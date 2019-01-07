<template>
  <nav>
    <div class="nav-img">
      <img src="../../../../static/img/phna01.png" alt="">
    </div>
    <div v-if="ac" class="nav-ul">
      <ul class="uls">
        <li :key="c" v-for="(a,c) in ac" class="uls-li">
          <img :src="a.pic">
          <span>{{a.tit}}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "phoNav",
      props:["ac"],
    }
</script>

<style scoped>
  nav{
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
  nav .nav-img{
    width: 100%;
  }
  .nav-img img{
    width: 100%;
    height: 2rem;
  }
  nav .nav-ul{
    width: 100%;
    height: 1rem;
    background: #0031cc;
  }
  .nav-ul .uls{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
  }
  .uls .uls-li{
    width: 20%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .uls-li img{
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
  }
  .uls-li span{
    font-size: .14rem;
    color: white;
    margin-top: .05rem;
  }
</style>
