<template>
  <div>
    <el-row type="flex" justify="center">
      <page-header title="Goals list" icon="list">
        <template slot="description">
        </template>
      </page-header>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-card>
          <el-table
            :data="goals"
            @row-click="goToGoal"
            class="table-goal-list"
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
              sortable>
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                {{ scope.row.timeBound | moment('MM/YYYY') }}
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '@/components/Common/PageHeader'

export default {
  name: 'goals',
  components: { PageHeader },
  computed: {
    ...mapState('Goals', ['goals'])
  },
  methods: {
    goToGoal (goal) {
      this.$router.push({name: 'goal', params: { id: goal._id }})
    }
  }
}
</script>

<style lang="scss">
.table-goal-list {
  tr {
    cursor: pointer;
  }

  i {
    &.el-icon-time {
      margin-right: 10px;
    }
  }
}
</style>
