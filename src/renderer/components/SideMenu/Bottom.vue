<template>
  <div>
    <p class="creator">
      with 
      <font-awesome-icon icon="heart" /> 
      by 
      <a href="#" @click.prevent="openTwitter">@theJacobDev</a>
    </p>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import openOSBrowser from '../../helpers/openOSBrowser'

export default {
  name: 'SideMenuBottom',
  components: { FontAwesomeIcon },
  data () {
    return {
      twitterLink: 'https://twitter.com/thejacobdev'
    }
  },
  methods: {
    openTwitter () {
      openOSBrowser(this.twitterLink)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/../../../assets/scss/palette.scss';

div {
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;

  .creator {
    color: $grey-light-1;
    text-align: center;
    font-size: 0.85em;
    letter-spacing: 1px;

    a {
      color: $elem-blue;
      text-decoration: none;
    }

    svg {
      color: $elem-danger;
      margin-left: 2px;
      margin-right: 2px;
    }

  }
}
</style>
