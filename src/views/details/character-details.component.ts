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
  public planet?: IPlanet = undefined;
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
        this.retrieveFilms();
        this.retrievePlanet();
        this.retrieveStarships();
        this.retrieveVehicles();
        this.retrieveSpecies();
      });
  }

  //Films
  public retrieveFilms(){
    if (this.character.films){
      this.films = [];
      this.character.films.forEach(film => {
        this.filmService()
          .find(getIdfromUrl(film))
          .then(res => {
            this.films.push(res)
          });
      });
    }
  }
  public filmDetails(film:IFilm){
    if (film.url){
      this.$router.push(`/film/${getIdfromUrl(film.url)}`); // grab swapi id from url
    }
  }

  // Planets
  public retrievePlanet(){
    if (this.character.homeworld){
      this.planet = undefined;
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
  public retrieveStarships(){
    if (this.character.starships){
      this.starships = [];
      this.character.starships.forEach(starship => {
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
    if (this.character.vehicles){
      this.vehicles = [];
      this.character.vehicles.forEach(vehicle => {
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
    if (this.character.species){
      this.species = [];
      this.character.species.forEach(species => {
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
