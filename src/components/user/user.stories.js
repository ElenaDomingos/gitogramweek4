import user from './user.vue'

export default {
  title: 'user',
  component: user
}
export const Primary = () => ({
  components: { user },
  template: '<user />'
})
