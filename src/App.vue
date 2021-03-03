<template>
  <div id="app">
    <main-top></main-top>
    <tabpart></tabpart>
<!--    使用keep-alive 缓存  避免重复调接口，以及出现闪屏的问题-->
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>

import MainTop from "@/modules/main-top";
import Tabpart from "@/modules/tabpart";
export default {
  name: 'App',
  components: { Tabpart, MainTop }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
#id{
  background-color: #333333;
  width: 100%;
  height: 100%;
}
</style>
