<template>
  <div class="character-details">
    <h2>Character Details</h2>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{character.name}}</td>
        </tr>
        <tr>
          <th>Birth Year</th>
          <td>{{character.birth_year}}</td>
        </tr>
        <tr>
          <th>Eye Color</th>
          <td>{{character.eye_color}}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{{character.gender}}</td>
        </tr>
        <tr>
          <th>Hair Color</th>
          <td>{{character.hair_color}}</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{{character.height}}</td>
        </tr>
         <tr>
          <th>Mass</th>
          <td>{{character.mass}}</td>
        </tr>
         <tr>
          <th>Skin Color</th>
          <td>{{character.skin_color}}</td>
        </tr>
         <tr>
          <th>Homeworld</th>
          <td>
            <button v-if="planet" type="button" @click="planetDetails(planet)">{{planet.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Films</th>
          <td>
            <button v-for="film in films" :key="film.title" type="button" @click="filmDetails(film)">{{film.title}}</button>
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
        <!-- <tr>
          <th>Created</th>
          <td>{{character.created}}</td>
        </tr>
        <tr>
          <th>Edited</th>
          <td>{{character.edited}}</td>
        </tr>
        <tr>
          <th>Url</th>
          <td>{{character.url}}</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./character-details.component.ts">
</script>