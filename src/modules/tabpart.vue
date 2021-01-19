<template>
  <div class="tab">
    <router-link tag="div" v-for="(item, i) in menuList" v-bind:key="i" :to="item.path">
      <span class="iconfont" :class="item.icon"></span>
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tabpart',
  data () {
    return {
      menuList: [
        {
          name: '推荐',
          path: '/command',
          icon: 'icon-tuijian'
        },
        {
          name: '歌手',
          path: '/singer',
          icon: 'icon-yunyinle-geshou'
        },
        {
          name: '排行',
          path: '/rank',
          icon: 'icon-ziyuan'
        },
        {
          name: '搜索',
          path: '/search',
          icon: 'icon-sousuo'
        }
      ]
    }
  },
  props: {},
  watch: {},
  methods: {},
  computed: {},
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.tab{
  width: 100%;
  height: 30px;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  >div{
    width: calc(100% / 4);
    height: 100%;
    font-size: 14px;
    font-family: "Agency FB";
    display: flex;
    justify-content: center;
    align-items: center;
    color: palegoldenrod;
    .iconfont{
      color: palegoldenrod;
      margin-right: 5px;
    }
  }
  .router-link-active{
    border-bottom: 3px solid palegoldenrod;
  }
}
</style>
