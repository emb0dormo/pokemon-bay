<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import axios from 'axios'

const pokemons = ref(null)

onMounted(() => {
  // Make a request to your Pokemon server
  axios.get('https://my-json-server.typicode.com/emb0dormo/PokHell/pokemons')
    .then((response) => {
      pokemons.value = response.data.pokemons
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <div class="pokemons">
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>
