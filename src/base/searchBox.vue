<template>
  <div class="search-box">
    <span class="iconfont icon-sousuo"></span>
    <input type="text" v-model="searchText" class="box" placeholder="请输入歌曲">
    <span class="iconfont icon-shanchu" v-show="searchText" @click="clear"></span>
  </div>
</template>

<script>
export default {
  name: 'searchBox',
  data() {
    return {
      searchText: ''
    }
  },
  props: {},
  watch: {},
  methods: {
    clear () {
      this.searchText = ''
    }
  },
  computed: {},
  created() {
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.search-box{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #333;
  padding: 0 6px;
  border-radius: 6px;
  .iconfont{
    color: rgba(255, 255, 255, 0.3);
  }
  .icon-sousuo{
    padding-right: 6px;
  }
  .box{
    height: 24px;
    flex: 1;
    line-height: 24px;
    background-color: #333333;
    border: none;
    color: #C6CEDA;
  }
}
</style>
