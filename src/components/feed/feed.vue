 <template>
<div class="feed__user">
    <user :name="username" :src="avatar" />
</div>

<div class="post__card">
  <slot name="card" />
</div>
<toggler @onToggle="toggleClick" />
<div v-if="showComment">
  <ul class="post__comment comment__list">
     <li class="comment__item" v-for="item in 5" :key="item">
      <p>
       <span class="comment__user">Joan Doe</span>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam vero neque nobis consequatur recusandae temporibus doloribus excepturi odit quae dolor fugiat nihil tenetur reprehenderit quia corporis, voluptates tempore consectetur.

      </p>
    </li>
  </ul>
</div>
</template>

<script>
import { user } from '../../components/user'
import { toggler } from '../../components/toggler'
export default {
  name: 'Feed',
  props: {
    avatar: String,
    username: String,
    stars: Number,
    dark: Boolean
  },
  components: {
    user,
    toggler
  },
  data () {
    return {
      showComment: true
    }
  },
  methods: {
    toggleClick (state) {
      this.showComment = state
    }
  }
}
</script>

<style lang="scss" >

.comment {
  &__user {
    margin-top:32px;
    font-weight: bold;
    margin-right: 10px;
  }
}
 .feed__user .user {
  display:flex;
  justify-content: flex-start;
  align-items: center;

  & img {
    width:44px;
    margin-right:20px;
  }
}

.posts__list {
  margin-top:32px;
}
</style>
