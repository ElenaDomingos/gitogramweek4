<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
    <img :src="avatar" class="img" alt="username avatar" />
    <div class="username">{{ username }} </div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>
<style src="./storyUserItem.scss" lang="scss"></style>
