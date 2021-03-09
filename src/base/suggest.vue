<template>
  <div class="search-box">
    <div v-for="(item, i) in hotList" v-bind:key="i" class="search-item">
      {{item.first}}
    </div>
  </div>
</template>

<script>
import search from "@/api/search";
export default {
  name: 'suggest',
  data() {
    return {
      hotList: []
    }
  },
  props: {},
  watch: {},
  methods: {
    getHotSearch () {
      search.getHotSearch().then((data) => {
        this.hotList = data.result.hots
      })
    }
  },
  computed: {},
  created() {
  },
  mounted() {
    this.getHotSearch()
  }
}
</script>

<style scoped lang="scss">
.search-box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .search-item{
    color: rgba(255, 255, 255, 0.3);
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    border-radius: 6px;
    background: #333;
    font-size: 14px;
  }
}
</style>
