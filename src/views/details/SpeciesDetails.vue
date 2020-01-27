<template>
  <div class="species-details">
    <h2>Species Details</h2>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{species.name}}</td>
        </tr>
        <tr>
          <th>Classification</th>
          <td>{{species.classification}}</td>
        </tr>
        <tr>
          <th>Designation</th>
          <td>{{species.designation}}</td>
        </tr>
        <tr>
          <th>Average Height</th>
          <td>{{species.average_height}}</td>
        </tr>
        <tr>
          <th>Average Lifespan</th>
          <td>{{species.average_lifespan}}</td>
        </tr>
        <tr>
          <th>Eye Colors</th>
          <td>{{species.eye_colors}}</td>
        </tr>
         <tr>
          <th>Hair Colors</th>
          <td>{{species.hair_colors}}</td>
        </tr>
         <tr>
          <th>Skin Colors</th>
          <td>{{species.skin_colors}}</td>
        </tr>
         <tr>
          <th>Language</th>
          <td>{{species.language}}</td>
        </tr>
         <tr>
          <th>Homeworld</th>
          <td>
            <button v-if="planet" type="button" @click="planetDetails(planet)">{{planet.name}}</button>
          </td>
        </tr>
        <tr>
          <th>People</th>
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
        <!-- <tr>
          <th>Created</th>
          <td>{{species.created}}</td>
        </tr>
        <tr>
          <th>Edited</th>
          <td>{{species.edited}}</td>
        </tr>
        <tr>
          <th>Url</th>
          <td>{{species.url}}</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./species-details.component.ts">
</script>