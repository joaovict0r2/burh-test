import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favFilms: [],
    details: '',
  },
  mutations: {

    ADD_FAV_FILM: (state, film) => {
      const filteredFilm = state.favFilms.filter(
        (filmID) => filmID.imdbID == film.imdbID,
      );

      if (filteredFilm.length == 0) {
        state.favFilms.push(film);
      } else {
        state.favFilms = state.favFilms.filter(
          (filmID) => filmID.imdbID != film.imdbID,
        );
      }
    },
    REMOVE_FAV_FILM: (state, film) => {
      state.favFilms.splice(film, 1);
    },
  },
  getters: {

  },
  actions: {
    removeFavFilm: (context, film) => {
      context.commit('REMOVE_FAV_FILM', film);
    },

  },
});
