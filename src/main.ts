import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FilmService from './service/film.service';
import CharacterService from './service/character.service';
import VehicleService from './service/vehicle.service';
import SpeciesService from './service/species.service';
import StarshipService from './service/starship.service';
import PlanetService from './service/planet.service';

Vue.config.productionTip = false

new Vue({
  router,
  provide: {
    filmService: () => new FilmService(),
    characterService: () => new CharacterService(),
    vehicleService: () => new VehicleService(),
    speciesService: () => new SpeciesService(),
    starshipService: () => new StarshipService(),
    planetService: () => new PlanetService()
  },
  render: h => h(App)
}).$mount('#app')
