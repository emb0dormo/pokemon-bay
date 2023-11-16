<template>
    <div>
      <h2>{{ pokemon.Name }}</h2>
      <!-- Add your content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'PokemonCard',
    props: {
      pokemon: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  