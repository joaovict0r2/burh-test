<template>
  <div>
    <div class="list-content">
      <div class="content-box">
        <ul v-for="(film, index) in $store.state.favFilms" :key="index">
          <div>
            <a href="detalhes"><img :src="film.Poster"/></a>
          </div>
          <p>{{film.Title}}<br/>{{film.Year}}</p> 
          <span @click="removeFilm(index)"><i class="fas fa-trash"></i></span>       
        </ul>
      </div>
    </div>
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import {  mapActions } from 'vuex';

export default {
  name: "Favorites",
  computed: {
      
  },
  methods:{
      ...mapActions([
          'removeFavFilm'
      ]),
      removeFilm(film) {
        this.$store.commit('REMOVE_FAV_FILM', film)
      }
  }
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