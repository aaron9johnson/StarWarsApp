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
        Promise.all([
          this.retrieveCharacters(),
          this.retrievePlanets(),
          this.retrieveStarships(),
          this.retrieveVehicles(),
          this.retrieveSpecies()
        ]);
      });
  }

  // Characters
  public async retrieveCharacters(){
    if (this.film.characters){
      this.characters = [];
      let characterPromises: Array<Promise<ICharacter>> = [];
      this.film.characters.forEach(character => {
        characterPromises.push(
          this.characterService()
            .find(getIdfromUrl(character)));
        });
      Promise.all(characterPromises)
        .then(result => {
          this.characters = result;
        });
    }
  }
  public characterDetails(character:ICharacter){
    if (character.url){
      this.$router.push(`/character/${getIdfromUrl(character.url)}`); // grab swapi id from url
    }
  }

  // Planets
  public async retrievePlanets(){
    if (this.film.planets){
      this.planets = [];
      let planetPromises: Array<Promise<IPlanet>> = [];
      this.film.planets.forEach(planet => {
        planetPromises.push(
          this.planetService()
            .find(getIdfromUrl(planet)));
        });
      Promise.all(planetPromises)
        .then(result => {
          this.planets = result;
        });
    }
  }
  public planetDetails(planet:IPlanet){
    if (planet.url){
      this.$router.push(`/planet/${getIdfromUrl(planet.url)}`); // grab swapi id from url
    }
  }

  // Starships
  public async retrieveStarships(){
    if (this.film.starships){
      this.starships = [];
      let starshipPromises: Array<Promise<IStarship>> = [];
      this.film.starships.forEach(starship => {
        starshipPromises.push(
          this.starshipService()
            .find(getIdfromUrl(starship)));
        });
      Promise.all(starshipPromises)
        .then(result => {
          this.starships = result;
        });
    }
  }
  public starshipDetails(starship:IStarship){
    if (starship.url){
      this.$router.push(`/starship/${getIdfromUrl(starship.url)}`); // grab swapi id from url
    }
  }

  //Vehicles
  public async retrieveVehicles(){
    if (this.film.vehicles){
      this.vehicles = [];
      let vehiclePromises: Array<Promise<IVehicle>> = [];
      this.film.vehicles.forEach(vehicle => {
        vehiclePromises.push(
          this.vehicleService()
            .find(getIdfromUrl(vehicle)));
        });
      Promise.all(vehiclePromises)
        .then(result => {
          this.vehicles = result;
        });
    }
  }
  public vehicleDetails(vehicle:IVehicle){
    if (vehicle.url){
      this.$router.push(`/vehicle/${getIdfromUrl(vehicle.url)}`); // grab swapi id from url
    }
  }

  // Species
  public async retrieveSpecies(){
    if (this.film.species){
      this.species = [];
      let speciesPromises: Array<Promise<ISpecies>> = [];
      this.film.species.forEach(species => {
        speciesPromises.push(
          this.speciesService()
            .find(getIdfromUrl(species)));
        });
      Promise.all(speciesPromises)
        .then(result => {
          this.species = result;
        });
    }
  }
  public speciesDetails(species:ISpecies){
    if (species.url){
      this.$router.push(`/species/${getIdfromUrl(species.url)}`); // grab swapi id from url
    }
  }
}
