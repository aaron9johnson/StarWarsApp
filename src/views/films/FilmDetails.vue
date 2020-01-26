<template>
  <div class="film-details">
    <img alt="Vue logo" src="../../assets/Star_Wars_Logo.svg">
    <p>Star Wars App</p>
    <h1>Film Details</h1>
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <td row>{{film.title}}</td>
        </tr>
        <tr>
          <th>Episode</th>
          <td row>{{film.episode_id}}</td>
        </tr>
        <tr>
          <th>Opening Crawl</th>
          <td row>{{film.opening_crawl}}</td>
        </tr>
        <tr>
          <th>Director</th>
          <td row>{{film.director}}</td>
        </tr>
        <tr>
          <th>Producer</th>
          <td row>{{film.producer}}</td>
        </tr>
        <tr>
          <th>Release Date</th>
          <td row>{{film.release_date}}</td>
        </tr>
        <tr>
          <th>Characters</th>
          <td row>{{film.characters}}</td>
        </tr>
        <tr>
          <th>Planets</th>
          <td row>{{film.planets}}</td>
        </tr>
        <tr>
          <th>Starships</th>
          <td row>{{film.starships}}</td>
        </tr>
        <tr>
          <th>Vehicles</th>
          <td row>{{film.vehicles}}</td>
        </tr>
        <tr>
          <th>Species</th>
          <td row>{{film.species}}</td>
        </tr>
        <tr>
          <th>Created</th>
          <td row>{{film.created}}</td>
        </tr>
        <tr>
          <th>Edited</th>
          <td row>{{film.edited}}</td>
        </tr>
        <tr>
          <th>Url</th>
          <td row>{{film.url}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./film-details.component.ts">
</script>

<style lang="scss" scoped>
  [row]{
    border-bottom: 1px solid rgba(0,0,0,0.12);
  }
</style>