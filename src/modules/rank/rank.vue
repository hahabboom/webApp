<template>
  <div class="rank">
    <scroll class="rank-content" :data="rankList" ref="scroll2">
      <div>
        <div v-for="(item, i) in rankList" v-bind:key="i" class="item-rank">
          <img :src="item.coverImgUrl" alt="" class="cover">
          <div class="right-content">
            <ol>
              <li v-for="(item2, i2) in item.tracks" v-bind:key="i2" class="song">
                <span>{{i2+1}}.{{item2.first}}-{{item2.second}}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import rank from "@/api/rank";
import Scroll from "@/base/scroll";
export default {
  name: 'rank',
  components: { Scroll },
  data() {
    return {
      rankList: []
    }
  },
  props: {},
  watch: {},
  methods: {
    getRankList () {
      rank.getRank().then((data) => {
        this.rankList = data.list
        console.log(this.rankList)
        this.$refs.scroll2.refresh()
      })
    }
  },
  computed: {},
  created() {
    this.getRankList()

  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.rank{
  width: 100%;
  height: 100%;
  background-color: #222222;
  position: fixed;
  .rank-content{
    height: 100%;
    overflow: hidden;
    .item-rank{
      display: flex;
      margin: 0 20px;
      height: 100px;
      padding-top: 20px;
      .cover{
        width: 100px;
        height: 100px;
        flex: 0 0 100px;
      }
      .right-content{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        overflow: hidden;
        background: #333;
        color: rgba(255,255,255,0.3);
        font-size: 12px;
        ol{
          padding-left: 20px;
        }
        .song{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          line-height: 26px;
        }
      }
    }
  }
}
</style>
