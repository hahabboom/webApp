<template>
  <div id="app">
    <main-top></main-top>
    <tabpart></tabpart>
    <router-view></router-view>
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
#id{
  background-color: #333333;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
