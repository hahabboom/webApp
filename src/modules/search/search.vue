<template>
  <div class="search">
    <div class="search-wrapper">
      <search-box></search-box>
    </div>
    <div class="search-content">
      <div class="title">热门搜索</div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/base/searchBox";
export default {
  name: 'search',
  components: { SearchBox },
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
    .title{
      margin-bottom: 20px;
      font-size: 14px;
      color: rgba(255,255,255,0.5);
    }
  }
}
</style>
