import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Films from '../views/Films.vue'
import FilmDetails from '../views/details/FilmDetails.vue';
import CharacterDetails from '../views/details/CharacterDetails.vue';
import VehicleDetails from '../views/details/VehicleDetails.vue';
import SpeciesDetails from '../views/details/SpeciesDetails.vue';
import StarshipDetails from '../views/details/StarshipDetails.vue';
import PlanetDetails from '../views/details/PlanetDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/films',
    name: 'films',
    component: Films
  },
  {
    path: '/film/:film',
    name: 'film-details',
    component: FilmDetails
  },
  {
    path: '/character/:character',
    name: 'character-details',
    component: CharacterDetails
  },
  {
    path: '/vehicle/:vehicle',
    name: 'vehicle-details',
    component: VehicleDetails
  },
  {
    path: '/species/:species',
    name: 'species-details',
    component: SpeciesDetails
  },
  {
    path: '/starship/:starship',
    name: 'starship-details',
    component: StarshipDetails
  },
  {
    path: '/planet/:planet',
    name: 'planet-details',
    component: PlanetDetails
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
