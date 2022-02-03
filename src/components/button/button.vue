<template>
  <button :class="['c-button', `theme-green`, {'hover-text': withHoverText}]"
  :data-hover-text="hoverText">
  <span class="btn-text"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText && this.hoverText.length
    }
  }
}
</script>
<style lang="scss" scoped>

.theme-green {
  background: #31ae54;
}

.c-button {
  width: 270px;
  height: 44px;
  border-radius: 5px;
  color:#fff;
  border:none;
  font-size:16px;
  font-weight: 700;
  margin:0 auto;
}
</style>
