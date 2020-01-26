<template>
  <div class="films">
    <h2>Films</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Episode</th>
          <th>Director</th>
          <th>Producer</th>
          <th>Release Date</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="film in films" v-bind:key="film.episode_id">
          <td>
            <button type="button" @click="filmDetails(film)">{{film.title}}</button>
          </td>
          <td>{{film.episode_id}}</td>
          <td>{{film.director}}</td>
          <td>{{film.producer}}</td>
          <td>{{film.release_date}}</td>
          <td>{{film.created}}</td>
          <td>{{film.edited}}</td>
          <td>{{film.url}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./films.component.ts">
</script>
