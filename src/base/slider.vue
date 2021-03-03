<template>
  <div class="sliderGroup" ref="sliderGroup">
    <div class="slider" ref="slider">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, i) in dots" :key="i" :class="{active: cIndex === i}"></span>
    </div>
  </div>
</template>

<script>
import { addClass } from "@/utils/js/dom";
import BScroll from 'better-scroll'
export default {
  name: 'slider',
  data() {
    return {
      cIndex: 0,
      dots: [],
      timer: null
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  watch: {},
  methods: {
    setSliderWideth (isResize) {
      this.children = this.$refs.slider.children
      this.dots = new Array(this.children.length)
      let width = 0
      let sliderWidth = this.$refs.sliderGroup.clientWidth
      for (let i =0; i< this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      // 如果loop，前后复制两个DOM
      if (this.loop && !isResize) {
        width += 2*sliderWidth
      }
      this.$refs.slider.style.width = width + 'px'
    },
    _play () {
      let pageIndex = this.cIndex + 1
      if (this.loop) {
        pageIndex += 1
      }
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400)
      }, this.interval)
    },
    initSlider () {
      this.slider = new BScroll(this.$refs.sliderGroup, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.cIndex = pageIndex
        if (this.autoplay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    }
  },
  computed: {},
  created() {
  },
  mounted() {
    // 因为浏览器刷新一般是17毫秒一次
    setTimeout(() => {
      this.setSliderWideth()
      this.initSlider()
      if (this.autoplay) {
        this._play()
      }
    }, 20)

    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this.setSliderWideth(true)
      this.slider.refresh()
    })
  }
}
</script>

<style scoped lang="scss">
.sliderGroup{
  min-height: 1px;
  .slider{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slider-item{
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      img{
        display: block;
        width: 100%
      }
    }
  }
  .dots{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;
    .dot{
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: RGBA(198,206,218, 0.5);
      &.active{
        width: 20px;
        border-radius: 5px;
        background: #C6CEDA;
      }
    }
  }
}


</style>
