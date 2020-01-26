import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FilmService from './service/film.service';
import CharacterService from './service/character.service';
import VehicleService from './service/vehicle.service';

Vue.config.productionTip = false

new Vue({
  router,
  provide: {
    filmService: () => new FilmService(),
    characterService: () => new CharacterService(),
    vehicleService: () => new VehicleService()
  },
  render: h => h(App)
}).$mount('#app')
