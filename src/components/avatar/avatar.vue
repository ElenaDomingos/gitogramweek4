<template>
  <img :src="src" :size="size" >
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true,
      default: 'https://projects.hedomi.com/1.png'
    },
    size: {
      type: String,
      required: true
    }

  }

}

</script>
