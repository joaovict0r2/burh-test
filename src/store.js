import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        favFilms: [],
        details: '',
        isFav: false

    },
    mutations: {

        ADD_FAV_FILM: (state, film) => {
            let filteredFilm = state.favFilms.filter(filmID => filmID.imdbID == film.imdbID)

            if (filteredFilm.length == 0) {
                state.favFilms.push(film)
            } else {
                state.favFilms = state.favFilms.filter(filmID => filmID.imdbID != film.imdbID)
                state.isFav = true

            }
        },
        REMOVE_FAV_FILM: (state, film) => {
            state.favFilms.splice(film, 1)
        },
        VERIFY_FILM: (state, film) => {
            let filteredFilm = state.favFilms.filter(filmID => filmID.imdbID == film.imdbID)

            if (filteredFilm.length == 0) {
                return false
            }
            return true
        }

    },
    getters: {

    },
    actions: {
        removeFavFilm: (context, film) => {
            context.commit('REMOVE_FAV_FILM', film)
        }

    }
})