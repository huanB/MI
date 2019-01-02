<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url(../static/css/common.css);
#app {
  width:100%;
  height:100%;
}
</style>
