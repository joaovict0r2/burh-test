<template>
  <div>
    <header id="header-content">      
      <input type="text" placeholder="Buscar por um Filme" v-model="filmName" @keyup.enter="searchFilm(filmName)" />
      <button v-on:click="searchFilm(filmName)" >Pesquisar</button>
      <button v-on:click="sortFilms()">Ordenar por titulo</button> 
      <button><router-link to="/favoritos">Favoritos</router-link></button>          
    </header>       
    <div class="list-content">
      <div class="content-box">
        <ul v-for="(film, index) in films" :key="index">
          <card-film :film="film" :isActive="verifyFav(film)" @add-fav-film="addFavFilm"></card-film>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CardFilm from './CardFilm'
import apiRoutes from "../services/api-routes";
import "bootstrap/dist/css/bootstrap.css";
import { mapMutations, mapActions } from 'vuex'


export default {
  name: "home", 
  components:{
    CardFilm
  },
  data() {
    return {
      films: [],      
      filmName: "",
      favFilms: [],
      isActive: false               
    };
    
  },
  computed: {
    ...mapMutations([
      'ADD_FAV_FILM', 
      'VERIFY_FILM'           
    ]),
    
  },
  methods: {
    ...mapActions([
      'removeFavFilm'
    ]),
    async searchFilm(filmName) {
      try {   
        this.films = []          
      const res = await apiRoutes.searchFilm(filmName);
      const { Search } = res.data;    
      Search.forEach((value) => {
        this.films.push(value);        
      }); 
       } catch (error) {
         alert('Filme não encontrado')
      }     
    },    
    sortFilms(){
      this.films.sort((a, b) => {
        a = a.Title.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
        b = b.Title.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
        return a < b ? -1 : a > b ? 1 : 0;
      })
      this.films
    },
    addFavFilm(film){ 
      this.$store.commit('ADD_FAV_FILM', film)
    },
    verifyFav(film){ //passar para utils
        let filteredFilm = this.$store.state.favFilms.filter(filmID => filmID.imdbID  == film.imdbID)

        if(filteredFilm.length == 0 ){
            return false
        }
        return true
    },
  },
};
</script>

<style >
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.list-content{
  padding: .3rem;
  border-radius: 50%;
}
img{
    width: 16rem;    
    margin-right: 0 auto;
    border-radius: 2%;
}
p{
    margin: 5px 0;
}

</style>