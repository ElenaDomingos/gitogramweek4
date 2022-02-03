<template>
<div >
  <div class="topline">

  <topline>
    <template #headline>
      <div class="headline">
        <div class="headline__container">
          <h1>Gitogram /</h1>
            <div class="icons">

              <span class="icon">
                <icon name="home"/>
              </span>
              <span class="icon">
                <icon name="avatar" />
              </span>
              <span class="icon">
                <icon name="exit" />
              </span>

            </div>
          </div>

      </div>
    </template>
    <template #content>
      <div class="container">
      <ul class="stories">
          <li class="stories-item" v-for="{id, owner, name} in trendings" :key="id">
            <story-user-item
            :avatar="owner.avatar_url"
            :username="name"
            @onPress="$router.push({name: 'stories', params: {initialSlide: id}})"/>

          </li>

        </ul>

      </div>
    </template>
  </topline>
</div>
<div class="container">
   <ul class="posts__list">
          <li v-for="item in items" :key="item.id" class="posts__item">
            <feed
              :avatar="item.owner.avatar_url"
              :username="item.owner.login">
              <template #card><card
              :stars="item.stargazers_count"
              :forks="item.forks"
              :title="item.name"
              :description="item.description"
              /></template>
            </feed>
          </li>
        </ul>
</div>

    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'
import { card } from '../../components/card'
import * as api from '../../api'

export default {
  name: 'Feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    feed,
    card
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks,
        avatar: item.owner.avatar_url
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
    api.trandings.getTrendings()
  }
}

</script>
<style lang="scss">
.headline {
  padding-left:5px

  &__container {
    width:1280px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
  }
}

.container {
   width:1280px;
    margin:0 auto;
}

.users {
  display:flex;
  justify-content: flex-start;
  padding:0;

}

.stories-item {
  margin-right:50px;
}
</style>
