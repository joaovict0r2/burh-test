<template>
  <div class="">
    <span @click="isOpen = !isOpen" class="absolute right-0 p-6"><i class="fas fa-stream"></i></span>
    <button id="bg-black" v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0  h-full w-full bg-black opacity-25 "></button>
    <div id="drop-fav" v-if="isOpen" class="absolute right-0  w-48 py-2 bg-white rounded-lg shadow-xl">
      <router-link to="/favoritos">
        <a class="block px-4 py-2 text-gray-800">Favoritos</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Dropdown',
    data(){
        return{
            isOpen: false
        }
    },
    
    created(){
        const handleEscape = (e) =>{
            if (e.key === 'Esc' || e.key === 'Escape'){
                this.isOpen = false
            }
        }

        document.addEventListener('keydown', handleEscape)

        this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('keydown', handleEscape)
        })
    }
}
</script>

<style>
#bg-black{
    cursor: unset;
}
#drop-fav{
    margin-top: 3.4rem;
    margin-right: 1rem;
}   
span {
    cursor: pointer;
}
</style>