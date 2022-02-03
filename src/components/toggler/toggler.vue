<template>
  <button :class="['button', {'active': isOpened}]" @click="toggle" >
    <span class="text">{{isOpened ? "Hide" : "Show"}} issues</span>
    <span class="icon-toggler">
      <icon name="triangle" />
    </span>
  </button>
</template>
<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  emits: ['toggle'],
  data () {
    return {
      isOpened: true
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>
<style src="./toggler.scss" lang="scss" ></style>
<style lang="scss" scoped>
button {
  margin-bottom:24px;
  border:none;
  background:transparent;
  outline: none;
  margin-top:20px;
  font-size:14px;
  display:flex;
}

</style>
