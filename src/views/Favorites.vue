<template>
  <div id="main">
    <div>    
      <button id="button-back" class="btn bg-white rounded-full absolute text-black  py-2 px-3">
        <router-link to="/"><span class="pr-1"><i class="fas fa-arrow-left"></i></span></router-link>
      </button>      
      <div id="header" class=" bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <p class="flex text-white font-bold">Meus favoritos</p>
      </div>
    </div>
    <div class="app-content">
      <div class="cards-content flex flex-wrap bg-gray-200 -mt-10 film-content"> 
        <ul class="ul-card" v-for="(film, index) in $store.state.favFilms" :key="index">
          <div class=" sm:w-full md:w-1/3 lg:w-1/4  overflow-hidden shadow-xl img-content">
            <router-link :to="`/detalhes/${film.Title}`">
              <img class="w-full img-card" :src="film.Poster" />
            </router-link>
            <div class="flex">
              <div class="w-full sm:w-3/4 md:w-3/4 movie-name-container text-left">
                <div class="font-bold sm:text-xl lg:text-xl mb-2">
                  <p class="name-movie">
                  {{ film.Title }}
                  </p>
                </div>
              </div>
              <div class="sm:w-1/4 md:w-1/4 movie-name-container text-right">
                <span class="fav-icon" id="pointer-trash" @click="removeFavFilm(index)">
                  <i class="fas fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        </ul>  
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/tailwind.css";
import { mapActions } from "vuex";

export default {
  name: "Favorites",
  data(){
    return{      
    }
  },
  computed: {},
  methods: {
    ...mapActions([
      "removeFavFilm"
    ]),
      removeFavFilm(film) {  
      this.$store.commit("REMOVE_FAV_FILM", film);      
    },            
  },
};
</script>

<style >
.film-content{
  height: 100px;
}
#header p{
  padding-top: 2rem;
}
.img-content{
  border-radius: .8rem .8rem .5rem .5rem;
  margin: 10px 20px;
  width: auto;
}
.cards-content{
  
  padding-top: 2rem;
  border-radius: 2.5rem 2.5rem 0 0;
  background-color: white;
  
}
.movie-name-container {
  padding: 1rem 0.5rem !important;
  height: 4rem
}
#main{  
  padding-bottom: 1.3rem;
}
.ul-card{
  margin-top: 1rem;
}
.name-movie { 
  max-width: 105px;
  font-size: 0.7rem;
}
.img-card { 
  height: 350px !important;
  width: 240px !important;
  margin: 0 auto;
}
#pointer-trash{
  cursor: pointer;
}
#button-back{
  margin-left: -1.4rem;
}
@media(min-width: 700px){
  .img-card { 
    height: 430px !important;
  }

  .fav-icon {
    margin: 0 auto;
  }
}
</style>