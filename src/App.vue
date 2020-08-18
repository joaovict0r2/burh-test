<template>
  <div id="main">
    <header id="header-content">
      <input type="text" placeholder="Buscar por um Filme" v-model="filmName" />
      <button v-on:click="searchFilm(filmName)" @keyup.enter="searchFilm(filmName)">Pesquisar</button>
      <button v-on:click="sortFilms()">Ordenar por titulo</button>          
    </header>       
    <div class="list-content">
      <div class="content-box">
        <ul v-for="film in films" :key="film.id">
          <div>
            <img :src="film.Poster"/>
          </div>
          <p>{{film.Title}} <br> {{film.Year}}</p>                    
          <span v-on:click="addFavFilm(film)"><i class="far fa-heart"></i></span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import apiRoutes from "../services/api-routes";
import "bootstrap/dist/css/bootstrap.css";


export default {
  name: "App", 
  data() {
    return {
      films: [],      
      filmName: "",
      favFilms: [], 
         
    };
  },
  methods: {
    async searchFilm(filmName) {
      const res = await apiRoutes.searchFilm(filmName);
      const { Search } = res.data;      
      Search.forEach((value) => {
        this.films.push(value);        
      });
    },
    sortFilms(){
      this.films.sort((a, b) => {
        if (a.Title < b.Title) return -1;
        if (a.Title > b.Title) return 1;
        return 0;
      })
      this.films
    },
    addFavFilm(film){
      this.favFilms.push( film )
      console.log(this.favFilms)
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