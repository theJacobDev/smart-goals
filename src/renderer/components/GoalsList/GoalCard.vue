<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ goal.specific }}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          {{ goal.achievable }}
          <!-- <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a> -->
          <br>
          <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item" @click="deleteGoal(goal._id)">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'goal-card',
  props: {
    goal: {
      type: Object,
      default: {}
    }
  },
  methods: {
    ...mapActions('Goals', ['deleteGoal'])
  }
}
</script>

<style lang="css">
</style>
