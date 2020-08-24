import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favFilms:[],
        
    },
    mutations: {        
        
        ADD_FAV_FILM: (state, film) =>{                                                                        
            state.favFilms.push(film)
            console.log(film)
            alert('Filme adicionado')                                   
        },
        REMOVE_FAV_FILM: (state, film) =>{
            state.favFilms.splice(film, 1)
            alert('Filme removido')
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
 