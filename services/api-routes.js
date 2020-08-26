import { api } from './api'
export const api_key = 'a609aef1'


export default {
    searchFilm:(filmName) => {
        return api.get(`/?apikey=${api_key}&s=${filmName}`)
    },
    searchFilmByTitle:(filmTitle)=>{
        return api.get(`/?apikey=${api_key}&t=${filmTitle}`)
    }
}