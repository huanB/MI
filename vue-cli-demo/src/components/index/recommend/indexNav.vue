<template>
    <nav>
      <ul class="na-ul">
        <li v-if="na" :key="a" v-for="(n,a) in na" class="na-li">
          <a href="javascript:;">
            <img :src="n.pic">
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "indexNav",
      props:["na"]
    }
</script>

<style scoped>
  nav{
    width: 100%;
    height: 1.5rem;
    /*background-color: #4cd964;*/
  }
  nav .na-ul{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-wrap: wrap;
  }
  .na-ul .na-li{
    width: 20%;
    height: 50%;
    /*background-color: #00B7FF;*/
  }
  .na-li a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .na-li a img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
