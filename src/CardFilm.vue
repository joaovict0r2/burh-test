<template>  
    <div class="max-w-sm sm:w-full md:w-1/3 lg:w-1/4 overflow-hidden shadow-xl m-auto img-content">
      <router-link :to="`/detalhes/${film.Title}`">
          <img class="w-full img-card" :src="film.Poster"/>
      </router-link>
      <div class="flex ">
        <div class="w-full sm:w-3/4 md:w-3/4 p-4 text-left">
          <div class="font-bold text-xl mb-2">{{ film.Title }}</div>           
        </div>
        <div class=" sm:w-1/4 md:w-1/4 p-4 text-right">
          <span @click="$emit('add-fav-film', film)" class="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 "><i class="far fa-heart" :class="{ 'fas fa-heart': isActive}"></i></span>          
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
  margin: 0 20px;
}

span{
  margin-left: 20px;
}
main{
  margin-top: 1rem; 
  padding-bottom: 1.3rem;
}
@media(min-width: 700px){
 
}
</style>