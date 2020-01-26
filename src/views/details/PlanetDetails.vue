<template>
  <div class="planet-details">
    <h2>Planet Details</h2>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{planet.name}}</td>
        </tr>
        <tr>
          <th>Diameter</th>
          <td>{{planet.diameter}}</td>
        </tr>
        <tr>
          <th>Rotation Period</th>
          <td>{{planet.rotation_period}}</td>
        </tr>
        <tr>
          <th>Orbital Period</th>
          <td>{{planet.orbital_period}}</td>
        </tr>
        <tr>
          <th>Gravity</th>
          <td>{{planet.gravity}}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{{planet.population}}</td>
        </tr>
         <tr>
          <th>Climate</th>
          <td>{{planet.climate}}</td>
        </tr>
         <tr>
          <th>Terrain</th>
          <td>{{planet.terrain}}</td>
        </tr>
         <tr>
          <th>Surface Water</th>
          <td>{{planet.surface_water}}</td>
        </tr>
        <tr>
          <th>Residents</th>
          <td>
            <button v-for="character in characters" :key="character.name" type="button" @click="characterDetails(character)">{{character.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Films</th>
          <td>
            <button v-for="film in films" :key="film.title" type="button" @click="filmDetails(film)">{{film.title}}</button>
          </td>
        </tr>
        <tr>
          <th>Created</th>
          <td>{{planet.created}}</td>
        </tr>
        <tr>
          <th>Edited</th>
          <td>{{planet.edited}}</td>
        </tr>
        <tr>
          <th>Url</th>
          <td>{{planet.url}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./planet-details.component.ts">
</script>