import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    date: []
  },
  mutations: {
    SET_TRENDINGS (state, payload) {
      state.data = trendings
    },

    SET_README (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.readme
        }
        return repo
      })
    }

  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find((item) => item.id === id)
    }
  },
  actions: {
    async fetchTrendings ({ state, commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', {
          starred: rootState.starred.starred,
          trendings: data.items
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
