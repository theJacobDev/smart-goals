<template>
  <div class="goal">
    <el-card>
      <div slot="header">
        <editable-text :value="goal.specific" @update="updateGoal('specific', $event)" class="title" />
      </div>
      <el-row type="flex">
        <el-col :span="2" class="info-icon">
          <font-awesome-icon icon="calendar-alt" />
        </el-col>
        <el-col :span="20" class="goal-settings">
          <div>
            <p>Created <span class="color--info">{{ goal.created_at | moment('DD/MM/YYYY') }}</span></p>
            <p>Time-bound <span class="color--warning">{{ goal.timeBound | moment('MM/YYYY') }}</span></p>
            <p>Remaining <span :class="[ timeLeft.isDue ? 'color--danger' : 'color--success' ]">
              {{ timeLeft.isDue ? '- ' : ''  }}{{ timeLeft.time }}</span></p>
          </div>
          <font-awesome-icon @click="deleteDialogVisible = true"  icon="trash-alt" class="color--danger" />
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
        <editable-text type="textarea" tag="p" :value="goal.relevant" @update="updateGoal('relevant', $event)" />
      </div>
    </el-card>
    <el-dialog
      title="Delete goal"
      :visible.sync="deleteDialogVisible"
      width="30%">
      <span>Are you sure you wanna delete this goal?</span>
      <span><br>You won't be able to restore it </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">Cancel</el-button>
        <el-button type="danger" @click="confirmDelete">Delete</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import EditableText from '@/components/Common/EditableText'
import EditableList from '@/components/Goal/EditableList'

export default {
  name: 'goal',
  components: { EditableText, EditableList, FontAwesomeIcon },
  data () {
    return {
      isEditing: {
        specific: false
      },
      deleteDialogVisible: false
    }
  },
  computed: {
    ...mapGetters('Goals', ['goalById']),
    goal () {
      return this.goalById(this.$route.params.id) || {}
    },
    timeLeft () {
      let now = moment()
      let deadline = moment(this.goal.timeBound)
      let timeLeft = now.to(deadline, true)
      let isDue = deadline.unix() - now.unix() < 0
      return { time: timeLeft, isDue: isDue }
    }
  },
  methods: {
    ...mapActions('Goals', ['updateGoalSingleField', 'deleteGoal']),
    updateGoal (key, newValue) {
      this.updateGoalSingleField({ id: this.goal._id, key: key, newValue: newValue })
    },
    confirmDelete () {
      this.deleteGoal(this.goal._id)
        .then(response => {
          this.$router.push({ name: 'goals' })
        }, err => {
          alert(err)
        })
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
  .info-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    svg {
      transform: rotate(5deg);
      opacity: 0.5;
      color: $blue-light;
    }
  }
  .el-card {
    margin-bottom: 20px;
    h2 {
      margin-bottom: 0em;
      margin-top: 0em;
    }

    p {
      word-break: normal;
    }
  }
  .goal-settings {
    display: flex;
    justify-content: space-between;

    svg {
      font-size: 2em;
      align-self: center;
      cursor: pointer;
    }
  }
}
</style>
