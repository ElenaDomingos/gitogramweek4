<template>
<div class="stats">
  <div class="stats__border stats__right">
    <div class="stats__icon">
     <span class="stats__icon-img"> <icon name="stars" /></span>
      <span>Star</span>
    </div>
  </div>
    <div class="stats__border">
        {{stars}}
    </div>

     <div class="stats__border">
      <div class="stats__icon ">
        <span class="stats__icon-img"><icon name="forks" /></span>
        <span>Fork</span>
      </div>
     </div>
      <div class="stats__border stats__left">
        {{forks}}
      </div>

    </div>

</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },

  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  },
  seturp () {
    return {}
  }

}
</script>
<style lang="scss">
.stats {
  display:flex;
  align-items: center;
  margin-top:32px;

  &__border {
   background: #FAFBFC;
   border: 1px solid rgba(27, 31, 35, 0.15);
   padding:7px;
   width:auto;

  }

  &__icon {
       display:flex !important;

  }

  &__icon-img {

         height:16px;
         width:14px;
         margin-right:5px;
  }

  &__left {
    border-radius:0 4px 4px 0;
  }
  &__right {
    border-radius:4px 0 0 4px;

  }

}
</style>
