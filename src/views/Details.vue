<template>
  <div id="detalhes">      
      <header id="details-header">
          <h1 class="">Detalhes</h1> 
          <router-link to="/">Home</router-link> 
      </header>      
      <div class="container datails-container">
          <p>{{details.Title}}</p>       
      </div>      
  </div>
</template>

<script>
import apiRoutes from '../../services/api-routes'
    export default {
        name: 'detalhes',
        data(){
            return{
                details: {},
                
            }
        },      
        async mounted(){
            await this.searchFilmByTitle()             
        },
        methods:{
            async searchFilmByTitle(){                 
                const res = await apiRoutes.searchFilmByTitle(this.$route.params.id)
                this.details = res.data   
                console.log(this.details)             
            },
        }
    }
</script>

<style>
#details-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>