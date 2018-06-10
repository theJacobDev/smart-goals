<template>
  <el-card class="list">
    <div slot="header">
      <h2>{{ title }}</h2>
      <i @click="toggleAddItemMode" class="header-icon" :class="[ isAdding ? 'el-icon-close' : 'el-icon-plus' ]" />
    </div>
    <el-input v-if="isAdding" :placeholder="title" :ref="title" @keyup.enter.native="updateGoal('add')" v-model="newItem">
      <el-button @click="updateGoal('add')" slot="append" icon="el-icon-list">Add</el-button>
    </el-input>
    <div v-for="item in list" :key="item.id" class="list__item">
      <i class="el-icon-circle-close-outline" @click="updateGoal('delete', item.id)" />
      <i class="el-icon-check" @click="updateGoal('complete', item.id)" />
      <span :class="{ completed: item.completed }">{{ item.name }}</span>
    </div>
  </el-card>
</template>

<script>
import { completeItem, deleteItem, addItem } from './../../helpers/goalListEdit'

export default {
  name: 'editable-list',
  props: {
    title: String,
    list: Array
  },
  data () {
    return {
      isAdding: false,
      newItem: ''
    }
  },
  methods: {
    updateGoal (action, id) {
      switch (action) {
        case 'complete':
          this.$emit('update', completeItem(id, this.list))
          break
        case 'delete':
          this.$emit('update', deleteItem(id, this.list))
          break
        case 'add':
          this.$emit('update', addItem(this.newItem, this.list))
          this.newItem = ''
          break
      }
    },
    toggleAddItemMode () {
      this.isAdding = !this.isAdding
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/palette.scss';

.el-card {
  .el-card__header {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin-bottom: 0.2em;
        margin-top: 0.2em;
      }

      .header-icon {
        font-size: 1.3em;
        color: $grey-dark-2;
        cursor: pointer;
        transition: color 300ms ease-in-out;

        &.el-icon-plus {
          &:hover {
            color: $elem-success;
          }
        }

        &.el-icon-close {
          &:hover {
            color: $elem-danger;
          }
        }
      }
    }
  }
}

.list {
  &__item {
    margin-top: 0.7em;
    margin-bottom: 0.7em;

    i {
      margin-right: 0.5em;
      color: $grey-dark-4;

      &.el-icon-check {
        color: $elem-success;
      }
    }

    span {
      &.completed {
        text-decoration: line-through;
      }
    }
  }
}
</style>
