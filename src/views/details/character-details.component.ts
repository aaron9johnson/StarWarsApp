import { Component, Vue, Inject } from 'vue-property-decorator';

import { IFilm } from '@/model/film.model';
import { ICharacter, Character } from '@/model/character.model';
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
export default class CharacterDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;
  @Inject('vehicleService') private vehicleService!: () => VehicleService;
  @Inject('speciesService') private speciesService!: () => SpeciesService;
  @Inject('planetService') private planetService!: () => PlanetService;
  @Inject('starshipService') private starshipService!: () => StarshipService;

  public character: ICharacter = new Character();
  public films: Array<IFilm> = [];
  public vehicles: Array<IVehicle> = [];
  public species: Array<ISpecies> = [];
  public planet: IPlanet | null = null;
  public starships: Array<IStarship> = [];

  beforeMount(): void {
    if (this.$router.currentRoute.params.character) {
      this.retrieveCharacter(Number(this.$router.currentRoute.params.character))
    }
  }
  public retrieveCharacter(id: number): void {
    this.characterService()
      .find(id)
      .then(res => {
        this.character = res;
        Promise.all([
          this.retrieveFilms(),
          this.retrievePlanet(),
          this.retrieveStarships(),
          this.retrieveVehicles(),
          this.retrieveSpecies()
        ]);
      });
  }

  // Films
  public async retrieveFilms(){
    if (this.character.films){
      this.films = [];
      let filmPromises: Array<Promise<IFilm>> = [];
      this.character.films.forEach(film => {
        filmPromises.push(
          this.filmService()
            .find(getIdfromUrl(film)));
        });
      Promise.all(filmPromises)
        .then(result => {
          this.films = result;
        });
    }
  }
  public filmDetails(film:IFilm){
    if (film.url){
      this.$router.push(`/film/${getIdfromUrl(film.url)}`); // grab swapi id from url
    }
  }

  // Planets
  public async retrievePlanet(){
    if (this.character.homeworld){
      this.planet = null;
      this.planetService()
        .find(getIdfromUrl(this.character.homeworld))
        .then(res => {
          this.planet = res;
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
    if (this.character.starships){
      this.starships = [];
      let starshipPromises: Array<Promise<IStarship>> = [];
      this.character.starships.forEach(starship => {
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
    if (this.character.vehicles){
      this.vehicles = [];
      let vehiclePromises: Array<Promise<IVehicle>> = [];
      this.character.vehicles.forEach(vehicle => {
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
    if (this.character.species){
      this.species = [];
      let speciesPromises: Array<Promise<ISpecies>> = [];
      this.character.species.forEach(species => {
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
