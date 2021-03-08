<template>
  <div class="search-box">
    <span class="iconfont icon-sousuo"></span>
    <input type="text" class="box" placeholder="请输入歌曲">
    <span class="iconfont icon-sousuo"></span>
  </div>
</template>

<script>
export default {
  name: 'searchBox',
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
.search-box{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #333;
  border-radius: 6px;
  .box{
    height: 24px;
    flex: 1;
    line-height: 24px;
    background-color: #333333;
    border: none;
  }
}
</style>
