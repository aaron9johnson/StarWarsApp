<template>
  <div class="vehicle-details">
    <h2>Vehicle Details</h2>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{vehicle.name}}</td>
        </tr>
        <tr>
          <th>Model</th>
          <td>{{vehicle.model}}</td>
        </tr>
        <tr>
          <th>Vehicle Class</th>
          <td>{{vehicle.vehicle_class}}</td>
        </tr>
        <tr>
          <th>Manufacturer</th>
          <td>{{vehicle.manufacturer}}</td>
        </tr>
        <tr>
          <th>Length</th>
          <td>{{vehicle.length}}</td>
        </tr>
        <tr>
          <th>Cost in Credits</th>
          <td>{{vehicle.cost_in_credits}}</td>
        </tr>
        <tr>
          <th>Crew</th>
          <td>{{vehicle.crew}}</td>
        </tr>
        <tr>
          <th>Passengers</th>
          <td>{{vehicle.passengers}}</td>
        </tr>
         <tr>
          <th>Max Atmosphering Speed</th>
          <td>{{vehicle.max_atmosphering_speed}}</td>
        </tr>
        <tr>
          <th>Cargo Capacity</th>
          <td>{{vehicle.cargo_capacity}}</td>
        </tr>
        <tr>
          <th>Consumables</th>
          <td>{{vehicle.consumables}}</td>
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
        <!-- <tr>
          <th>Created</th>
          <td>{{vehicle.created}}</td>
        </tr>
        <tr>
          <th>Edited</th>
          <td>{{vehicle.edited}}</td>
        </tr>
        <tr>
          <th>Url</th>
          <td>{{vehicle.url}}</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>


<script lang="ts" src="./vehicle-details.component.ts">
</script>