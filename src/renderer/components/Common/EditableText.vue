<template>
  <div>
    <i :class="[ isEditing ? 'el-icon-check' : 'el-icon-edit' ]" @click="toggleEdit"></i>
    <el-input
      v-if="isEditing"
      v-model="model"
      :type="type"
      @keyup.enter.native="toggleEdit"
      :rows="[type === 'textarea' ? 5 : 1]"
      ></el-input>
    <span v-else>
      <h2 v-if="tag === 'h2'">{{ value }}</h2>
      <p v-else>{{ value }}</p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'editable-text',
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    tag: {
      type: String,
      default: 'h2'
    }
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

div {
  display: flex;
  align-content: center;
}

.el-input {
    width: auto;
  }

  i {
    margin-right: 0.6em;
    cursor: pointer;
    align-self: center;
  }

  h2 {
    margin: 0;
  }

  .el-icon-edit {
    color: $grey-light-1;
  }
  .el-icon-check {
    color: $elem-success;
  }
</style>
