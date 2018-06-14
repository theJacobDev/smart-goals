<template>
  <el-col :span="20" class="page-header">
    <h1 class="title">{{ title }}</h1>
    <font-awesome-icon v-if="icon" :icon="icon" />
    <p class="subtitle">
      <slot name="description"></slot>
    </p>
  </el-col>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'page-header',
  components: { FontAwesomeIcon },
  props: {
    title: String,
    icon: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/palette.scss';

.page-header {
  font-size: 42px;
  margin-bottom: 0.7em;

  svg {
    position: absolute;
    color: $grey-light-4;
    font-size: 5em;
    top: 0rem;
    left: -1rem;
    transform: rotate(-10deg);
  }

  h1 {
    font-size: 1em;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 0.4em;
  }
}
</style>
