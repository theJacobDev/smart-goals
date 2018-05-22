<template>
  <div>
    <el-row type="flex" justify="center">
      <page-header title="Add new goal" icon="edit-outline">
        <template slot="description">

        </template>
      </page-header>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-form :model="form" label-position="left" :rules="rules" :status-icon="true" ref="goalForm" label-width="7rem">
          <el-form-item label="Specific" prop="specific">
            <el-input placeholder="Name" v-model="form.specific"></el-input>
          </el-form-item>
          <el-form-item label="Measurable" prop="measurables">
            <el-input placeholder="Measurable" ref="measurable" @keyup.enter.native="addMeasurable" v-model="newMeasurement">
              <el-button @click="addMeasurable" slot="append" icon="el-icon-list">Add</el-button>
            </el-input>
            <p v-for="measurement in form.measurables">
              <i class="el-icon-circle-close-outline delete-icon" @click="removeItemFromList('measurables', measurement.id)" />
              {{ measurement.name }}
            </p>
          </el-form-item>
          <el-form-item label="Achievable" prop="achievables">
            <el-input placeholder="Achievable" ref="measurable" @keyup.enter.native="addAchievable" v-model="newAchievable">
              <el-button @click="addAchievable" slot="append" icon="el-icon-list">Add</el-button>
            </el-input>
            <p v-for="achievable in form.achievables">
              <i class="el-icon-circle-close-outline delete-icon" @click="removeItemFromList('achievables', achievable.id)" />
              {{ achievable.name }}
            </p>
          </el-form-item>
          <el-form-item label="Relevant" prop="relevant">
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" v-model="form.relevant"></el-input>
          </el-form-item>
          <el-form-item label="Time-bound" prop="timeBound">
            <el-radio-group v-model="dateSelectionType" class="date-type">
              <el-radio-button label="month"></el-radio-button>
              <el-radio-button label="year"></el-radio-button>
            </el-radio-group>
            <el-date-picker :type="dateSelectionType" placeholder="Pick a date" v-model="form.timeBound"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="createGoal" plain>Create</el-button>
            <el-button type="danger" @click="resetForm" plain>Reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import uuid from 'uuid/v4'

import PageHeader from '@/components/Common/PageHeader'

export default {
  name: 'create-goal',
  components: { PageHeader },
  data () {
    return {
      form: {
        specific: '',
        measurables: [],
        achievables: [],
        relevant: '',
        timeBound: null
      },
      rules: {
        specific: [
          { required: true, message: 'Please provide the name for your goal', trigger: 'blur' }
        ],
        measurables: [
          { validator: this.validateMeasurements, trigger: 'blur' }
        ],
        achievables: [
          { validator: this.validateAchievables, trigger: 'blur' }
        ],
        relevant: [
          { required: true, message: 'Please write why is it important to you', trigger: 'blur' }
        ],
        timeBound: [
          { type: 'date', required: true, message: 'Please select a date', trigger: 'change' }
        ]
      },
      dateSelectionType: 'month',
      newMeasurement: '',
      newAchievable: ''
    }
  },
  methods: {
    ...mapActions('Goals', ['createNewGoal']),
    createGoal () {
      this.$refs['goalForm'].validate((valid) => {
        if (valid) {
          this.createNewGoal({ ...this.form, created_at: new Date.Now() })
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs['goalForm'].resetFields()
      this.form.measurables = []
      this.form.achievable = []
    },
    addMeasurable () {
      if (this.newMeasurement !== '') {
        this.form.measurables.push({ name: this.newMeasurement, id: uuid(), completed: false })
        this.newMeasurement = ''
        this.$refs['goalForm'].validateField('measurables')
      }
    },
    addAchievable () {
      if (this.newAchievable !== '') {
        this.form.achievables.push({ name: this.newAchievable, id: uuid(), completed: false })
        this.newAchievable = ''
        this.$refs['goalForm'].validateField('achievables')
      }
    },
    removeItemFromList (listName, id) {
      this.form[listName].splice(this.form[listName].findIndex(item => item.id === id), 1)
    },
    validateMeasurements (rule, value, callback) {
      if (this.form.measurables.length === 0) {
        return callback(new Error('Please provide at least one measurable item'))
      } else {
        return callback()
      }
    },
    validateAchievables (rule, value, callback) {
      if (this.form.achievables.length === 0) {
        return callback(new Error('Please provide at least one achievable item'))
      } else {
        return callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/palette.scss';

.date-type {
  margin-bottom: 1rem;
}

.el-date-editor {
  width: 100%;
}

.el-form-item {
  margin-bottom: 2rem;
}

label {
  &:before {
    content: '';
  }
}

.delete-icon {
  color: $grey-dark-4;
  margin-right: 1em;
  cursor: pointer;
}
</style>
