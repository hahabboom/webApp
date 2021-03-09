<template>
  <div class="search">
    <div class="search-wrapper">
      <search-box></search-box>
    </div>
    <div class="search-content">
      <div class="title">热门搜索</div>
      <suggest></suggest>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/base/searchBox";
import Suggest from "@/base/suggest";
export default {
  name: 'search',
  components: { Suggest, SearchBox },
  data() {
    return {}
  },
  props: {},
  watch: {},
  methods: {},
  computed: {},
  created() {
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.search{
  width: 100%;
  height: 100%;
  background-color: #222222;
  position: fixed;
  display: flex;
  flex-direction: column;
  .search-wrapper{
    margin: 20px;
  }
  .search-content{
    margin: 0 20px 20px 20px;
    .title{
      margin-bottom: 20px;
      font-size: 14px;
      color: rgba(255,255,255,0.5);
    }
  }
}
</style>
