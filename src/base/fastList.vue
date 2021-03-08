<template>
  <ul class="fastBox">
    <li :class="{'click' : now === i }" v-for="(item, i) in fastClick" v-bind:key="i" >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'fastList',
  data() {
    return {
      fastClick: ['热','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      now: 0
    }
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
.fastBox{
  text-align: center;
  li{
    padding: 3px;
    line-height: 1;
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    list-style: none;
  }
  .click{
    color: #E2C77D;
  }
}
</style>
