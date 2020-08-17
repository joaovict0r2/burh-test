<template>
  <div id="main">
    <header id="header-content">
      <input type="text" placeholder="Buscar por um Filme" v-model="filmName" />
      <button v-on:click="searchFilm(filmName)" @keyup.enter="searchFilm(filmName)">Pesquisar</button>
    </header>
    <div class="list-content">
      <div class="content-box">
        <ul v-for="film in films" :key="film.id">
          <img :src="film.Poster"/>
          <p>{{film.Title}}</p>          
          <p>{{film.Year}}</p>
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
  data: () => {
    return {
      films: [],
      filmName: "",
    };
  },
  methods: {
    async searchFilm(filmName) {
      const res = await apiRoutes.searchFilm(filmName);
      const { Search } = res.data;
      console.log(res.data);
      Search.forEach((value) => {
        this.films.push(value);
      });
    },
  },
};
</script>

<style >

ul{
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

img{
    width: 80px;    
    margin-right: 10px;
    border-radius: 15%;
}

p{
    margin: 5px 0;
}

</style>