<template>
  <div class="singer">
    <fast-list class="fast-click"></fast-list>
    <scroll class="singer-content" :data="singerList" ref="scroll">
      <div>
        <div class="s-title">热门</div>
        <div v-for="(item, i) in singerList" v-bind:key="i" class="item-s">
          <img v-lazy="item.picUrl" alt="" class="img">
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import singer from "@/api/singer";
import FastList from "@/base/fastList";
import Scroll from "@/base/scroll";
export default {
  name: 'singer',
  components: { Scroll, FastList },
  data() {
    return {
      singerList: []
    }
  },
  props: {},
  watch: {},
  methods: {
    getSingerData () {
      singer.getSInger(
          {
        type: -1,
        area: -1
      }
      ).then((data) => {
        this.singerList= data.artists
        this.$refs.scroll.refresh()
      })
    }
  },
  computed: {},
  created() {
  },
  mounted() {
    this.getSingerData()
  }
}
</script>

<style scoped lang="scss">
.singer{
  width: 100%;
  height: 100%;
  background-color: #333333;
  position: fixed;
  .fast-click{
    position: absolute;
    right: 0;
    top: 44%;
    Z-index: 33;
    transform: translateY(-50%);
    padding: 20px 0;
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px;
  }
  .singer-content{
    height: 100%;
    overflow: hidden;
    .s-title{
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 12px;
      color: rgba(255,255,255,0.5);
      background: #222;
    }
    .item-s{
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name{
        padding-left: 20px;
        color: rgba(255,255,255,0.5);
        font-size: 14px;
      }
    }
  }
}
</style>
