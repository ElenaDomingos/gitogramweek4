import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: avatar
}
export const Primary = () => ({
  components: { avatar },
  template: '<avatar />'
})
