import slide from './slide.vue'

export default {
  title: 'slide',
  component: slide
}
export const Primary = () => ({
  components: { slide },
  template: '<slide />'
})
