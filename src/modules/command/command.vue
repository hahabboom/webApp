<template>
  <div class="recommend">
    <scroll class="recommend-content" :data="commandList" ref="scroll">
      <div>
        <div class="banner">
          <div v-if="sliderData.length" class="slider-wrapper">
            <slider>
              <div v-for="(item,i) in sliderData" :key="i">
                <img @load="loadbanner" :src="item.coverImgUrl" :alt="item.name">
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="head">热门歌单推荐</h1>
          <ul>
            <li v-for="(item, i) in commandList" class="item" v-bind:key="i">
              <div class="icon">
                <img v-lazy="item.picUrl" alt="">
              </div>
              <div class="text">
                <span class="name">{{item.copywriter}}</span>
                <span class="copywriter">{{item.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import recommend from "@/api/recommend";
import Slider from "@/base/slider";
import Scroll from "@/base/scroll";
export default {
  name: 'command',
  components: { Scroll, Slider },
  data() {
    return {
      sliderData: [],
      commandList: null,
      bannerLoad: false
    }
  },
  props: {},
  watch: {},
  methods: {
    getbannberList () {
      recommend.getBanner().then((data)=>{
        this.sliderData = data.playlists
      })
    },
    getsongList () {
      recommend.getsongList().then((data) => {
        this.commandList = data.result
      })
    },
    loadbanner () {
      if (!this.bannerLoad) {
        this.$refs.scroll.refresh()
        this.bannerLoad = true
      }
    }
  },
  computed: {},
  created() {
    this.getbannberList()
    this.getsongList()
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.recommend{
  width: 100%;
  height: 100%;
  background-color: #333333;
  position: fixed;
  .recommend-content{
    height: 100%;
    overflow: hidden;
  }
  .banner{
    background-color: antiquewhite;
    overflow: hidden;
    .slider-wrapper{
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
  .recommend-list{
    .head{
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: 14px;
      color: #E2C77D;
    }
    ul{
      padding: 0;
      margin: 0;
      .item{
        display: flex;
        align-items: center;
        padding: 0 20px 20px 20px;
        .icon{
          width: 60px;
          height: 60px;
          padding-right: 20px;
          img{
            width: 60px;
            height: 60px;
          }
        }
        .text{
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 20px;
          overflow: hidden;
          .name{
            margin-bottom: 10px;
            color: #ffffff;
            font-size: 14px;
          }
          .copywriter{
            color: #bebebe;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
