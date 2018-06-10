<template>
  <el-menu :default-active="defaultRoute" :router="true">
    <side-menu-top />
    <side-menu-bottom />
  </el-menu>
</template>

<script>
import SideMenuTop from './SideMenu/Top'
import SideMenuBottom from './SideMenu/Bottom'

export default {
  name: 'side-menu',
  components: {
    SideMenuTop,
    SideMenuBottom
  },
  data () {
    return {
      defaultRoute: 'dashboard'
    }
  },
  created () {
    this.defaultRoute = '/' + this.$route.name
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/palette.scss';

.el-menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-right: none;
  background-color: $rich-black;

  &-item {
    color: $white;
    &:hover {
      color: $blue-dark;
      background-color: $blue-light;
    }
    &:focus {
      color: $blue-light;
      background-color: $rich-black;
    }
    &.is-active {
      color: $blue-light;
      &:hover {
        color: $blue-dark;
        background-color: $blue-light;
      }
      &:focus {
        color: $blue-light;
        background-color: $rich-black;
      }
    }
  }

  img {
    width: calc(100% - 2rem);
    margin: 1rem;
  }
}
</style>
