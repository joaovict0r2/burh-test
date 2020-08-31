<template>
  <div id="main" >
    <div id="header" class=" bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
      <dropdown/>
      <p class="flex text-white font-bold ">
        Bem-Vindo(a).
        <br>
        Milhões de Filmes para Descobrir. Explore já.
      </p>
    </div>
    <form id="search" @submit.prevent="" class="w-full max-w-sm m-auto">
      <div class="flex -mt-5">
        <input v-model="filmName" class="bg-white focus:outline-none font-semibold border rounded-full py-2 px-4 block w-full" type="text" placeholder="Buscar por um filme...">
        <button v-on:click="searchFilm(filmName)" class="-ml-16 text-white focus:outline-none font-semibold no-outline border bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full">
          Buscar
        </button>
      </div>     
    </form>
      <div class="max-w-sm m-auto icon-sort" v-show="sortfilm == true" >
        <button class="btn border rounded-full " v-on:click="sortFilms()"><i class="fas fa-sort-alpha-up"> Ordenar por titulo</i></button>
      </div> 
      <div class="container">
        <div class="row">
          <!-- <div class="col-sm" > -->
            <card-film v-for="(film, index) in films" :key="index" :film="film" :isActive="verifyFav(film)" @add-fav-film="addFavFilm"></card-film>
          <!-- </div> -->
        </div>
      </div>
      <div class="text-center not-found" v-show="notfound == true">
        <p class="text-gray-900 text-opacity-50" ><i class="far fa-sad-tear"></i> Filme não encontrado</p>
      </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown'
import CardFilm from './CardFilm'
import "bootstrap/dist/css/bootstrap.css";
import apiRoutes from "../services/api-routes";
import { mapMutations, mapActions } from 'vuex'


export default {
  name: "home", 
  components:{
    CardFilm,
    Dropdown
  },
  data() {
    return {
      films: [],      
      filmName: "",
      favFilms: [],
      sortfilm: false,
      notfound : false               
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
    searchFilm(filmName){
      this.notfound = false
      this.sortfilm = false
      this.films = []
      apiRoutes.searchFilm(filmName).then(res =>{
        const { Search }  = res.data 
        if (Search == undefined) {
          this.notfound = true
        } else {
          this.films = Search
          this.sortfilm = true        
      }
    })
  },
    sortFilms(){
      this.films.sort((a, b) => {
        a = a.Title.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
        b = b.Title.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
        return a < b ? -1 : a > b ? 1 : 0;
      })
      
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
}

#header{
  height: 12rem;
}
#header p{
  
  padding-top: 2.2rem;
  font-size: 1.7rem;
  padding-left: 2rem;

  display: flex;
  justify-content: center;

}
#search button {
  height: 2.6rem;
  width: 4rem;
}
.btn{
  border-radius: 2rem;
}
.icon-sort{    
  padding-top: 2.2rem;
}
.not-found{
  padding-top: 2rem;
}

.app-content{
  margin: 0 5%;
}

.film-content {
  justify-content: center;
}
@media (max-width: 368px){
  #header p{
    padding-top: .4rem;
  }
}

</style>