<template>
  <div class="film-details">
    <h2>Film Details</h2>
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <td>{{film.title}}</td>
        </tr>
        <tr>
          <th>Episode</th>
          <td>{{film.episode_id}}</td>
        </tr>
        <tr>
          <th>Opening Crawl</th>
          <td>{{film.opening_crawl}}</td>
        </tr>
        <tr>
          <th>Director</th>
          <td>{{film.director}}</td>
        </tr>
        <tr>
          <th>Producer</th>
          <td>{{film.producer}}</td>
        </tr>
        <tr>
          <th>Release Date</th>
          <td>{{film.release_date}}</td>
        </tr>
        <tr>
          <th>Characters</th>
          <td>
            <button v-for="character in characters" :key="character" type="button" @click="characterDetails(character)">{{character.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Planets</th>
          <td>{{film.planets}}</td>
        </tr>
        <tr>
          <th>Starships</th>
          <td>{{film.starships}}</td>
        </tr>
        <tr>
          <th>Vehicles</th>
          <td>{{film.vehicles}}</td>
        </tr>
        <tr>
          <th>Species</th>
          <td>{{film.species}}</td>
        </tr>
        <tr>
          <th>Created</th>
          <td>{{film.created}}</td>
        </tr>
        <tr>
          <th>Edited</th>
          <td>{{film.edited}}</td>
        </tr>
        <tr>
          <th>Url</th>
          <td>{{film.url}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./film-details.component.ts">
</script>