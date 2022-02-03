<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="storie">
        <li class="stories-item"
        v-for="trending in trendings"
        :key="trending.id"
        ref="item"
        >
      </ul>
      <slide :data="getStroyData(trending)"
      :active="slideNdx === ndx"
      :loadign="slideNdx === ndx && loading"
      :btnsShown="activeBtns"
      @onNextSlid="handleSlider(ndx+1)"
      @onPrevSlide="handleSlider(ndx-1)"
      @onProgressFinish="handleSlider(ndx+1)" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { slide } from '../slide'
export default {
  components: {
    slide

  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      activeBtns: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),

    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.lenght - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/ferchReadme'
    }),
    async fetchReadmeForActiveSlider () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item).getPropertyValue('width'),
        10
      )

      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)

      slider.style.transform = `translateX(${this.skiderPosition})`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.ferchReadmeActiveSlider()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }

  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
    }
    await this.handleSlide(ndx)
  }

}
</script>

<style lang="scss">

</style>
