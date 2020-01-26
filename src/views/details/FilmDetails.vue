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
            <button v-for="character in characters" :key="character.name" type="button" @click="characterDetails(character)">{{character.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Planets</th>
          <td>
            <button v-for="planet in planets" :key="planet.name" type="button" @click="planetDetails(planet)">{{planet.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Starships</th>
          <td>
            <button v-for="starship in starships" :key="starship.name" type="button" @click="starshipDetails(starship)">{{starship.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Vehicles</th>
          <td>
            <button v-for="vehicle in vehicles" :key="vehicle.name" type="button" @click="vehicleDetails(vehicle)">{{vehicle.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Species</th>
          <td>
            <button v-for="spec in species" :key="spec.name" type="button" @click="speciesDetails(spec)">{{spec.name}}</button>
          </td>
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