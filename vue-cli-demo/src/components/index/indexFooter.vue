<template>
  <footer>
    <ul>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe67e;</i>
          <span>首页</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe635;</i>
          <span>分类</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="faxian">
          <i class="iconfont">&#xe629;</i>
          <span>发现</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe621;</i>
          <span>购物车</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe619;</i>
          <span>我的</span>
        </a>
      </li>
    </ul>
  </footer>

</template>

<script>
    export default {
        name: "indexFooter"
    }
</script>

<style scoped>
  footer{ height:.44rem; background:#fff; border-top:1px solid #ccc;}
  footer ul{ height:100%; display:flex;}
  footer ul li{ flex:1; text-align:center; padding-top:.05rem}
  footer ul li a{ display:block;}
  footer ul li a i{ display:block; font-size:.13rem;}
  footer ul li a span{ display:block; font-size:.08rem;}
  footer ul li a.faxian{ color:#ff6600;}
</style>
