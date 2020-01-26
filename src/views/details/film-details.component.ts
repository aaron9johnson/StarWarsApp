import { Component, Vue, Inject } from 'vue-property-decorator';

import { IFilm, Film } from '@/model/film.model';
import { ICharacter } from '@/model/character.model';
import { IVehicle } from '@/model/vehicle.model';
import { ISpecies } from '@/model/species.model';
import { IPlanet } from '@/model/planet.model';
import { IStarship } from '@/model/starship.model';

import FilmService from '@/service/film.service';
import CharacterService from '@/service/character.service';
import VehicleService from '@/service/vehicle.service';
import SpeciesService from '@/service/species.service';
import PlanetService from '@/service/planet.service';
import StarshipService from '@/service/starship.service';

import { getIdfromUrl } from '@/util/util';

@Component
export default class FilmDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;
  @Inject('vehicleService') private vehicleService!: () => VehicleService;
  @Inject('speciesService') private speciesService!: () => SpeciesService;
  @Inject('planetService') private planetService!: () => PlanetService;
  @Inject('starshipService') private starshipService!: () => StarshipService;

  public film: IFilm = new Film();
  public characters: Array<ICharacter> = [];
  public vehicles: Array<IVehicle> = [];
  public species: Array<ISpecies> = [];
  public planets: Array<IPlanet> = [];
  public starships: Array<IStarship> = [];
  
  beforeMount(): void {
    if (this.$router.currentRoute.params.film) {
      this.retrieveFilm(Number(this.$router.currentRoute.params.film))
    }
  }
  public retrieveFilm(id: number): void {
    this.filmService()
      .find(id)
      .then(res => {
        this.film = res;
        this.retrieveCharacters();
        this.retrievePlanets();
        this.retrieveStarships();
        this.retrieveVehicles();
        this.retrieveSpecies();
      });
  }

  // Characters
  public retrieveCharacters(){
    if (this.film.characters){
      this.characters = [];
      this.film.characters.forEach(character => {
        this.characterService()
          .find(getIdfromUrl(character))
          .then(res => {
            this.characters.push(res)
          });
      });
    }
  }
  public characterDetails(character:ICharacter){
    if (character.url){
      this.$router.push(`/character/${getIdfromUrl(character.url)}`); // grab swapi id from url
    }
  }

  // Planets
  public retrievePlanets(){
    if (this.film.planets){
      this.planets = [];
      this.film.planets.forEach(planet => {
        this.planetService()
          .find(getIdfromUrl(planet))
          .then(res => {
            this.planets.push(res)
          });
      });
    }
  }
  public planetDetails(planet:IPlanet){
    if (planet.url){
      this.$router.push(`/planet/${getIdfromUrl(planet.url)}`); // grab swapi id from url
    }
  }

  // Starships
  public retrieveStarships(){
    if (this.film.starships){
      this.starships = [];
      this.film.starships.forEach(starship => {
        this.starshipService()
          .find(getIdfromUrl(starship))
          .then(res => {
            this.starships.push(res)
          });
      });
    }
  }
  public starshipDetails(starship:IStarship){
    if (starship.url){
      this.$router.push(`/starship/${getIdfromUrl(starship.url)}`); // grab swapi id from url
    }
  }

  //Vehicles
  public retrieveVehicles(){
    if (this.film.vehicles){
      this.vehicles = [];
      this.film.vehicles.forEach(vehicle => {
        this.vehicleService()
          .find(getIdfromUrl(vehicle))
          .then(res => {
            this.vehicles.push(res)
          });
      });
    }
  }
  public vehicleDetails(vehicle:IVehicle){
    if (vehicle.url){
      this.$router.push(`/vehicle/${getIdfromUrl(vehicle.url)}`); // grab swapi id from url
    }
  }

  // Species
  public retrieveSpecies(){
    if (this.film.species){
      this.species = [];
      this.film.species.forEach(species => {
        this.speciesService()
          .find(getIdfromUrl(species))
          .then(res => {
            this.species.push(res)
          });
      });
    }
  }
  public speciesDetails(species:ISpecies){
    if (species.url){
      this.$router.push(`/species/${getIdfromUrl(species.url)}`); // grab swapi id from url
    }
  }
}
