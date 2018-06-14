<template>
  <div>
    <el-row type="flex" justify="center">
      <page-header title="Settings" icon="cogs">
        <template slot="description">

        </template>
      </page-header>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-card>
          <div slot="header">
            <h2>General</h2>
          </div>
          <div>
            <p>test</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PageHeader from '@/components/Common/PageHeader'

export default {
  name: 'settings',
  components: { PageHeader }
}
</script>

<style lang="scss">
.el-card {
  margin-bottom: 20px;
  h2 {
    margin-bottom: 0.2em;
    margin-top: 0.2em;
  }
}
</style>
