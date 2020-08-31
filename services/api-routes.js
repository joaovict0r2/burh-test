import { api } from './api';
export const apiKey = 'a609aef1';

export default {
  searchFilm: (filmName) => {
    return api.get(`/?apikey=${apiKey}&s=${filmName}`);
  },
  searchFilmByTitle: (filmTitle)=>{
    return api.get(`/?apikey=${apiKey}&t=${filmTitle}`);
  },
};
