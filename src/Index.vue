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
        <ul v-for="film in films" :key="film.id">
          <div>
            <div>
              <router-link :to="`/detalhes/${film.Title}`">
                <img :src="film.Poster"/>
              </router-link>
            </div>
          </div>
          <p>{{film.Title}}</p>                    
          <span  @click="addFavFilm(film)"><i class="far fa-heart"></i></span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import apiRoutes from "../services/api-routes";
import "bootstrap/dist/css/bootstrap.css";
import { mapMutations } from 'vuex'


export default {
  name: "home", 
  data() {
    return {
      films: [],      
      filmName: "",
      favFilms: [], 
         
    };
  },
  computed: {
    ...mapMutations([
      'ADD_FAV_FILM',
      
    ]),
  },
  methods: {
    
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
    }
   
  },
};
</script>

<style >
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul{    
    background-color: gainsboro;
    padding-left: .8rem;    
    font-family: sans-serif;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul span {
  cursor: pointer;
  
}
.list-content{
  padding: .3rem;
  border-radius: 50%;
}

img{
    width: 6rem;    
    margin-right: 0 auto;
    border-radius: 10%;
}

p{
    margin: 5px 0;
}

</style>