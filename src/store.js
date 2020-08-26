import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        favFilms:[],
        details: '',
        
    },
    mutations: {        
        
        ADD_FAV_FILM: (state, film) =>{             
            let filteredFilm = state.favFilms.filter(filmID => filmID.imdbID  == film.imdbID)

            if(filteredFilm.length == 0 ){
                state.favFilms.push(film)                        
            } else{ 
                state.favFilms = state.favFilms.filter(filmID => filmID.imdbID  != film.imdbID)
                // const index = state.favFilms.indexOf(film);
                // console.log(index)
                // console.log(state.favFilms)
                // if (index > -1) {
                //     state.favFilms.splice(index, 1);
                // }
                
            }
        },
        REMOVE_FAV_FILM: (state, film) =>{
            state.favFilms.splice(film, 1)
            alert('Filme removido')
        },
        VERIFY_FILM: (state, film) => {
            let filteredFilm = state.favFilms.filter(filmID => filmID.imdbID  == film.imdbID)

            if(filteredFilm.length == 0 ){
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
 