<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import IconCss from "../static/css/iconfont.css"
export default {
  name: 'App',
  components:{IconCss,},
}
</script>

<style>
@import url(../static/css/common.css);
#app {
  width:100%;
  height:100%;
}
</style>
