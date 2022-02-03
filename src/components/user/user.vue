<template>
<div class="user">
  <div class="user__avatar">
  <Avatar :src="src" :size="size"/>
  </div>
  <div class="user">
    <p class="user__name">{{name}}</p>
    <p v-if="type" class="user__type">{{type}}</p>
  </div>
</div>
</template>

<script>
import { avatar as Avatar } from '../../components/avatar'

export default {
  name: 'feed',
  components: {

    Avatar

  },

  props: {
    src: {
      type: String,
      default: 'https://projects.hedomi.com/1.png'
    },
    name: {
      type: String,
      default: 'Juan Pedro Alves'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 's'
    }

  },

  setup (props) {
    return {}
  }

}
</script>

<style lang="scss" scoped>
.user {
  display:flex;
  align-items: center;
  &__name {
    font-weight: bold;
    margin-left:10px;
  }

  &__avatar img{
    width:32px
  }
}
</style>
