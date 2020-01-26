<template>
  <div class="starship-details">
    <h2>Starship Details</h2>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{starship.name}}</td>
        </tr>
        <tr>
          <th>Starship Class</th>
          <td>{{starship.starship_class}}</td>
        </tr>
        <tr>
          <th>Manufacturer</th>
          <td>{{starship.manufacturer}}</td>
        </tr>
        <tr>
          <th>Cost in Credits</th>
          <td>{{starship.cost_in_credits}}</td>
        </tr>
        <tr>
          <th>Length</th>
          <td>{{starship.length}}</td>
        </tr>
        <tr>
          <th>Crew</th>
          <td>{{starship.crew}}</td>
        </tr>
         <tr>
          <th>Passengers</th>
          <td>{{starship.passengers}}</td>
        </tr>
         <tr>
          <th>Max Atmosphering Speed</th>
          <td>{{starship.max_atmosphering_speed}}</td>
        </tr>
         <tr>
          <th>Hyperdrive Rating</th>
          <td>{{starship.hyperdrive_rating}}</td>
        </tr>
        <tr>
          <th>MGLT</th>
          <td>{{starship.MGLT}}</td>
        </tr>
        <tr>
          <th>Cargo Capacity</th>
          <td>{{starship.cargo_capacity}}</td>
        </tr>
        <tr>
          <th>Consumables</th>
          <td>{{starship.consumables}}</td>
        </tr>
        <tr>
          <th>Films</th>
          <td>
            <button v-for="film in films" :key="film.title" type="button" @click="filmDetails(film)">{{film.title}}</button>
          </td>
        </tr>
        <tr>
          <th>Pilots</th>
          <td>
            <button v-for="character in characters" :key="character.name" type="button" @click="characterDetails(character)">{{character.name}}</button>
          </td>
        </tr>
        <tr>
          <th>Created</th>
          <td>{{starship.created}}</td>
        </tr>
        <tr>
          <th>Edited</th>
          <td>{{starship.edited}}</td>
        </tr>
        <tr>
          <th>Url</th>
          <td>{{starship.url}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./starship-details.component.ts">
</script>