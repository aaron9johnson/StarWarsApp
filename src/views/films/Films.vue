<template>
  <div class="films">
    <img alt="Vue logo" src="../../assets/Star_Wars_Logo.svg">
    <p>Star Wars App</p>
    <h1>Films</h1>
    <table table>
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
          <td>
            <div info>{{film.episode_id}}</div>
          </td>
          <td>
            <div info>{{film.director}}</div>
          </td>
          <td>
            <div info>{{film.producer}}</div>
          </td>
          <td>
            <div info>{{film.release_date}}</div>
          </td>
          <td>
            <div info>{{film.created}}</div>
          </td>
          <td>
            <div info>{{film.edited}}</div>
          </td>
          <td>
            <div info>{{film.url}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./films.component.ts">
</script>

<style scoped lang='scss'>
  [table] {
    width: 100%;
  }
  [info] {
    height: 20px;
    overflow: hidden;
    word-wrap: break-word;
  }
</style>
