<template>
  <div>
    <i :class="[ isEditing ? 'el-icon-check' : 'el-icon-edit' ]" @click="toggleEdit"></i>
    <el-input
      v-if="isEditing"
      v-model="model"
      type="text"
      @keyup.enter.native="toggleEdit"
      ></el-input>
    <span v-else>
      <h2>{{ value }}</h2>
    </span>
  </div>
</template>

<script>
export default {
  name: 'editable-text',
  props: {
    value: String
  },
  data () {
    return {
      isEditing: false,
      newValue: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (newValue) {
        this.newValue = newValue
      }
    }
  },
  methods: {
    toggleEdit () {
      if (this.isEditing === true && this.newValue !== '') { this.$emit('update', this.newValue) }
      this.isEditing = !this.isEditing
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/palette.scss';

.el-card__header {

  .el-input {
    width: auto;
  }

  i {
    margin-right: 0.75em;
    cursor: pointer;
  }

  .el-icon-edit {
    color: $grey-light-1;
  }
  .el-icon-check {
    color: $elem-success;
  }
}
</style>
