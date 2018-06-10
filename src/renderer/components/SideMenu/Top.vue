<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'SideMenuTop'
}
</script>
