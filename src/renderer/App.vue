<template>
  <el-container id="app">
    <el-aside class="side-menu">
      <side-menu />
    </el-aside>
    <el-container>
      <el-main class="gradient-background">
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
@import '@/assets/scss/variables.scss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro');

body,input {
  margin: 0;
  font-family: 'Source Sans Pro';
  color: $grey-dark-1;

  > section {
    min-height: 100vh;
  }

  #app {
    margin-left: $side-menu-width;

    .side-menu {
      width: $side-menu-width !important;
      margin-left: -$side-menu-width;
      position: fixed;
    }

    .gradient-background {
      background: linear-gradient(-25deg, #eafaff, $white);
    }
  }
}

.img {
  &-full-width {
    width: 100%;
  }
}
</style>
