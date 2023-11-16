<template>
  <div>
    <h1>About</h1>
    <div v-for="pokemon in pokemons" :key="pokemon.id">
      <img :src="pokemon.imageUrl" alt="Pokemon" />
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const pokemons = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/emb0dormo/PokHell/pokemons');
    pokemons.value = response.data;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
  }
});
</script>
