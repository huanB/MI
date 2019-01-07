<template>
    <div class="sec-set">
      <!--下方是获取最新宣传的物品-->
      <section-paper v-if="se.pap" :pa="se.pap"></section-paper>
      <!--下方是从购物车取出时间点的结构-->
      <!--此模块有个图标没写-->
      <section-crowd></section-crowd>
      <!--下方是商品详情的列表-->
      <section-list v-if="se.lis" :li="se.lis"></section-list>
      <!-- v-for="(s,e) in " :key="e"-->
    </div>
</template>

<script>
    import SectionPaper from "./sectionPaper";
    import SectionCrowd from "./sectionCrowd";
    import SectionList from "./sectionList";
    export default {
        name: "indexSection",
      props:["se"],
      components: {SectionList, SectionCrowd, SectionPaper}
    }
</script>

<style scoped>
  .sec-set{
    width: 100%;
    /*height: 10rem;*/
    /*background: #4cd964;*/
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
