<template>
  <el-card class="list">
    <div slot="header">
      <h2>{{ title }}</h2>
    </div>
    <div v-for="item in list" class="list__item">
      <i class="el-icon-circle-close-outline" @click="updateGoal('delete', item.id)" />
      <i class="el-icon-check" @click="updateGoal('complete', item.id)" />
      <span :class="{ completed: item.completed }">{{ item.name }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'editable-list',
  props: {
    title: String,
    list: Array
  },
  methods: {
    updateGoal (action, id) {
      // Spread operator creates only shallow copy so we have to "hack" with json operations to deep copy-webpack-plugin
      // For now it's okay but change in case we use dates in this list to prevent it from losing its type
      let newList = JSON.parse(JSON.stringify(this.list))
      let index = newList.findIndex(item => item.id === id)
      if (action === 'delete') {
        newList.splice(index, 1)
      } else {
        newList[index].completed = !newList[index].completed
      }
      this.$emit('update', newList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/palette.scss';

.el-card {
  h2 {
    margin-bottom: 0.2em;
    margin-top: 0.2em;
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
