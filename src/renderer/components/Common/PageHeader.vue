<template>
  <el-col :span="20" class="page-header">
    <h1 class="title">{{ title }}</h1>
    <i v-if="icon" :class="[`el-icon-${icon}`]" />
    <p class="subtitle">
      <slot name="description"></slot>
    </p>
  </el-col>
</template>

<script>
export default {
  name: 'page-header',
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
  position: relative;

  i {
    position: absolute;
    color: $grey-light-4;
    z-index: -1;
    font-size: 6em;
    top: -0.2em;
    left: -0.4em;
    transform: rotate(-10deg);
  }

  h1 {
    font-size: 1em
  }

  p {
    font-size: 0.4em;
  }
}
</style>
