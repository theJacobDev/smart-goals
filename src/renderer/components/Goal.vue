<template>
  <div class="goal">
    <el-card>
      <div slot="header">
        <editable-text :value="goal.specific" @update="updateGoal('specific', $event)" class="title" />
      </div>
      <el-row type="flex">
        <el-col :span="12">
        </el-col>
        <el-col :span="12">
          <p>I've created this goal on {{ goal.created_at | moment('DD/MM/YYYY') }}</p>
        </el-col>
      </el-row>
    </el-card>
    <el-row :gutter="20" type="flex">
      <el-col :span="12">
        <editable-list title="Measurable" :list="goal.measurables" @update="updateGoal('measurables', $event)" />
      </el-col>
      <el-col :span="12">
        <editable-list title="Achievable" :list="goal.achievables" @update="updateGoal('achievables', $event)" />
      </el-col>
    </el-row>
    <el-card>
      <div slot="header">
        <h2>Relevant</h2>
      </div>
      <div>
        <p>{{ goal.relevant }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EditableText from '@/components/Common/EditableText'
import EditableList from '@/components/Goal/EditableList'

export default {
  name: 'goal',
  components: { EditableText, EditableList },
  data () {
    return {
      isEditing: {
        specific: false
      }
    }
  },
  computed: {
    ...mapGetters('Goals', ['goalById']),
    goal () {
      return this.goalById(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions('Goals', ['updateGoalSingleField']),
    updateGoal (key, newValue) {
      this.updateGoalSingleField({ id: this.goal._id, key: key, newValue: newValue })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/palette.scss';

.goal {
  .title {
    i, .el-input {
      font-size: 2em;
    }
    h2 {
      font-size: 2em;
      display: inherit;
    }
  }
  .el-card {
    margin-bottom: 20px;
    h2 {
      margin-bottom: 0.2em;
      margin-top: 0.2em;
    }
  }
}
</style>
