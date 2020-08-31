<template>  
    <div class="max-w-sm sm:w-full md:w-1/3 lg:w-1/4 overflow-hidden shadow-xl img-content">
      <router-link :to="`/detalhes/${film.Title}`">
          <img class="w-full img-card" :src="film.Poster"/>
      </router-link>
      <div class="flex">
        <div class="w-full sm:w-3/4 md:w-3/4 movie-name-container text-left">
          <div class="font-bold sm:text-sm lg:text-xl mb-2">
            <p class="movie-name">
              {{ film.Title }}
            </p>
          </div>           
        </div>
        <div class="sm:w-1/4 md:w-1/4 movie-name-container text-right">
          <span @click="$emit('add-fav-film', film)" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 fav-icon"><i class="far fa-heart" :class="{ 'fas fa-heart': isActive}"></i></span>          
        </div>        
      </div>
    </div>
</template>

<script>
import "../assets/css/tailwind.css";
export default {
  name: "card-film",
  props: {
    film: Object,
    isActive: Boolean,
  },
};
</script>

<style>
.img-content{
  border-radius: .8rem .8rem .5rem .5rem;
  margin: 10px 20px;
  width: auto;
}

.btn-search {
  padding-left: 20px;
  padding-right: 20px;
}

span{
  margin-left: 20px;
}
main{
  margin-top: 1rem; 
  padding-bottom: 1.3rem;
}

.img-card { 
  height: 350px !important;
  width: 240px !important;
  margin: 0 auto;
}

.movie-name-container {
  padding: 1rem 0.5rem !important;
}

.movie-name { 
  max-width: 105px;
  font-size: 0.7rem;
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