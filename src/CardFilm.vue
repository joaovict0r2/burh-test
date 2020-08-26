<template>
  <div class="main">    
      <div class="card-render">
        <router-link :to="`/detalhes/${film.Title}`">
          <img :src="film.Poster" />
        </router-link>
      </div>    
      <p class="poo">{{film.Title}}</p>
      <span @click="$emit('add-fav-film', film)"><i class="far fa-heart" :class="{ 'fas fa-heart': isActive}"></i></span>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "card-film",
  props:{
      film: Object,
      isActive: Boolean
  }
};
</script>

<style>
.card-render{    
    background-color: gainsboro;
    padding-left: .8rem;    
    font-family: sans-serif;

    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.card-render span {
  cursor: pointer;
  
}
</style>