<template>
  <div class="slide" >
    <div class="slide__wrapper">
      <Progress :active="active" @onFinish="$emit('onProgressFinis')" />
      <div class="user">
        <user :username="data.username" :src="data.Avatar" />
      </div>
      <div class="slide-content">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div
            v-if="data.content?.lenght"
            class="content-text"
            v-html="data.content"
          ></div>
          <placeholder v-else :paragraphd="2" />
        </div>
        <div class="button">
          <Button />
        </div>
        <template v-if="active">
          <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
            <span class="icon">
              <icon name="arrow" />
            </span>
          </button>
          <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
            <span class="icon">
              <icon name="arrow" />
            </span>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import { button as Button } from '../../components/button'
import { progress as Progress } from '../../components/progress'
import { user } from '../../components/user'
import { spinner } from '../../components/spinner'
import { icon as Icon } from '../../icons'
import { placeholder } from '../../components/placeholder'

export default {
  components: {
    user,
    Button,
    Progress,
    spinner,
    Icon,
    placeholder

  },
  emits: ['onPrevSlide', 'onNextSlid', 'onProgressFinish'],
  props: {
    active: Boolean,
    loadign: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    }
  },
  data: function () {
    return {
      type: Object,
      required: true,
      default: () => ({})
    }
  }

}
</script>

<style src="./slide.scss" lang="scss"></style>
