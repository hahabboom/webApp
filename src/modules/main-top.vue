<template>
  <div class="top-box">
    <div class="pic"></div>
    <div class="title">hahabboom's music box</div>
  </div>
</template>

<script>
export default {
  name: 'mainTop',
  data () {
    return {}
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
.top-box{
  width: 100%;
  height: 40px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  .pic{
    width: 40px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    background-image: url('~@/assets/lemon.png');
  }
  .title{
    color: #E2C77D;
    font-family: fantasy;
  }
}
</style>
