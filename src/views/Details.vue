<template>
  <div id="detalhes">      
    <header>
        <button class="btn bg-white rounded-full absolute text-black  py-2 px-3 button-back">
          <router-link to="/"><span><i class="fas fa-arrow-left "></i></span></router-link>
        </button>
        <img class="w-full object-cover object-top img-header " :src="details.Poster">
    </header> 
    <div class="content">
      <div class="text-center content-title">
          <h1 class="text-xl star-strg">{{details.Title}}</h1>
          <p class="text-xs opacity-50 genre">{{details.Genre}}</p>
          <p class="text-xl"><i class="fas fa-star"></i> {{details.imdbRating}}</p>
      </div>  
      <div class="px-2 grid-country">
        <div class="flex -mx-2">
          <div class="w-1/3 text-center">
            <div class="py-1 h-12 text-xs">
              <p class="opacity-50">Ano</p>
              <p class="text-xl">{{details.Year}}</p>
            </div>
          </div>
          <div class="w-1/3 text-center box2">
            <div class="py-1 h-12 text-xs">
              <p class="opacity-50">País</p>
              <p class="text-xl">{{details.Country}}</p>
            </div>
          </div>
          <!-- mudar a ordem de font size -->
          <div class="w-1/3 text-center">
            <div class="py-1 h-12 text-xs">
              <p class="opacity-50">Duração</p>
              <p class="text-xl">{{details.Runtime}}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-sm text-justify">{{details.Plot}}</p><br>
        <div>
          <p class="font-bold">Diretor(a):</p>
          <p>{{details.Director}}</p>
          <br>
        </div>
        <div>
          <p class="font-bold">Escritor(a):</p>
          <p>{{details.Writer}}</p>
          <br>
        </div>
        <div>
          <p class="font-bold">Elenco:</p>
          <p>{{details.Actors}}</p>
          <br>
        </div>
        <div>
          <p class="font-bold">Idioma Original:</p>
          <p>{{details.Language}}</p>
          <br>
        </div>
        <div>
          <p class="font-bold">Premios:</p>
          <p>{{details.Awards}}</p>
          <br>
        </div>
        <div>
          <p class="font-bold">Receita:</p>
          <p>{{details.BoxOffice}}</p>
          <br>
        </div>
        <div>
          <p class="font-bold">Produtora:</p>
          <p>{{details.Production}}</p>
          <br>
        </div>
      </div>
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
            },
        }
    }
</script>

<style>
.button-back{
  margin-left: -1.4rem;
}
header img{
  border-bottom-left-radius: 910px 300px;
  border-bottom-right-radius: 210px 990px ;
  box-shadow: 0px 0px 18px 7px rgb(104, 104, 104);
}
.img-header{
    height: 24rem;
}
.star-strg, .genre {
  margin: 0 auto;
}
.content{
  margin: 0 10%;
}
.content-title{
  margin-top: 2rem;
}
.grid-country{
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.grid-country .box2{
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
@media(min-width: 700px){
  header img{
    border-radius: none;
    width: 80%;
  }

}

</style>