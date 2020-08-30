<template>
  <div id="main">
    <div>    
      <button id="button-back" class="btn bg-white rounded-full absolute text-black  py-2 px-3">
        <router-link to="/"><span class="pr-1"><i class="fas fa-arrow-left"></i></span></router-link>
      </button>      
      <div id="header" class=" bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <p class="text-white font-bold p-8 pt-10">Meus favoritos</p>
      </div>
    </div>
    <div class="cards-content  bg-gray-200 -mt-10"> 
      <ul class="ul-card" v-for="(film, index) in $store.state.favFilms" :key="index">
        <div class="max-w-sm bg-white border rounded-lg overflow-hidden shadow-xl m-auto">
          <div>
            <router-link :to="`/detalhes/${film.Title}`">
              <img class="w-full" :src="film.Poster" />
            </router-link>
          </div>
          <div class="flex">
            <div class="w-full sm:w-3/4 md:w-3/4 p-4 text-left">
              <div class="font-bold text-xl mb-2">{{ film.Title }}</div>
            </div>
            <div class="sm:w-1/4 md:w-1/4 p-4 text-right">
              <span id="pointer-trash" @click="removeFavFilm(index)">
                <i class="fas fa-trash"></i>
              </span>
            </div>
            
          </div>
        </div>
      </ul>  
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
.cards-content{
  min-height: 200px;
  padding-top: 2rem;
  border-radius: 2.5rem 2.5rem 0 0;
  background-color: white;
}
#main{  
  padding-bottom: 1.3rem;
}
.ul-card{
  margin-top: 1rem;

}
#pointer-trash{
  cursor: pointer;
}
#button-back{
  margin-left: -1.4rem;
}
</style>