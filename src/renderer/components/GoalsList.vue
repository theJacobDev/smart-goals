<template>
  <div>
    <el-row type="flex" justify="center">
      <page-header title="Goals list" icon="tickets">
        <template slot="description">
        </template>
      </page-header>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-table
          :data="goals"
          @row-click="goToGoal"
          stripe>
          <el-table-column
            prop="specific"
            label="Name"
            width="flex">
          </el-table-column>
          <el-table-column
            prop="timeBound"
            label="Time"
            width="flex"
            :formatter="dateFormatter"
            sortable>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '@/components/Common/PageHeader'

export default {
  name: 'goals-list',
  components: { PageHeader },
  computed: {
    ...mapState('Goals', ['goals'])
  },
  methods: {
    dateFormatter (row) {
      return this.$options.filters.moment(row.timeBound, 'MM/YYYY')
    },
    goToGoal (goal) {
      this.$router.push({name: 'goal', params: { id: goal._id }})
    }
  }
}
</script>

<style lang="css">
</style>
