<template>
  <div class="films">
    <img alt="Vue logo" src="../assets/Star_Wars_Logo.svg">
    <p>Star Wars App</p>
    <table>
      <thead>
        <tr>
          <th v-for="(value, key) in films[0]" :key="value">{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="film in films" v-bind:key="film.episode_id">
          <td v-for="(value, key) in film" :key="key">{{value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./films.component.ts">
</script>
