<template>
  <el-menu :default-active="defaultRoute" :router="true">
    <img src="static/imgs/logo.png">
    <el-menu-item index="/dashboard">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>Dashboard</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/create-goal">
      <template slot="title">
        <i class="el-icon-edit-outline" />
        <span>Add goal</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/goals-list">
      <template slot="title">
        <i class="el-icon-tickets" />
        <span>Goals list</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/settings">
      <template slot="title">
        <i class="el-icon-setting" />
        <span>Settings</span>
      </template>
    </el-menu-item>
    <!-- <el-submenu index="goals-list">
      <template slot="title">
        <i class="el-icon-list" />
        <span>Goals list</span>
      </template>
    </el-submenu> -->
  </el-menu>
</template>

<script>
export default {
  name: 'side-menu',
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
  height: 100%;
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
