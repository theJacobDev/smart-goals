<template>
  <el-container id="app">
    <el-aside width="200px">
      <side-menu />
    </el-aside>
    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import SideMenu from '@/components/SideMenu.vue'

  export default {
    name: 'smart-goals',
    components: { SideMenu },
    created () {
      // Init store data
      this.$store.dispatch('Goals/fetchGoals')
    }
  }
</script>

<style lang='scss'>
@import '~element-ui/lib/theme-chalk/index.css';
@import '@/assets/scss/palette.scss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro');

body,input {
  margin: 0;
  font-family: 'Source Sans Pro';
  color: $grey-dark-1;

  > section {
    min-height: 100vh;
  }
}

.img {
  &-full-width {
    width: 100%;
  }
}
</style>
