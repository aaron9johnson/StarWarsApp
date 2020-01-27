import { Component, Vue, Inject } from 'vue-property-decorator';

import { IFilm } from '@/model/film.model';
import { ICharacter } from '@/model/character.model';
import { ISpecies, Species } from '@/model/species.model';
import { IPlanet } from '@/model/planet.model';

import FilmService from '@/service/film.service';
import CharacterService from '@/service/character.service';
import SpeciesService from '@/service/species.service';
import PlanetService from '@/service/planet.service';

import { getIdfromUrl } from '@/util/util';

@Component
export default class SpeciesDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;
  @Inject('speciesService') private speciesService!: () => SpeciesService;
  @Inject('planetService') private planetService!: () => PlanetService;

  public species: ISpecies = new Species();
  public films: Array<IFilm> = [];
  public characters: Array<ICharacter> = [];
  public planet: IPlanet | null = null;

  beforeMount(): void {
    if (this.$router.currentRoute.params.species) {
      this.retrieveSpecies(Number(this.$router.currentRoute.params.species))
    }
  }
  public retrieveSpecies(id: number): void {
    this.speciesService()
      .find(id)
      .then(res => {
        this.species = res;
        Promise.all([
          this.retrieveFilms(),
          this.retrieveCharacters(),
          this.retrievePlanet()
        ]);
      });
  }

  // Films
  public async retrieveFilms(){
    if (this.species.films){
      this.films = [];
      let filmPromises: Array<Promise<IFilm>> = [];
      this.species.films.forEach(film => {
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

  // Characters
  public async retrieveCharacters(){
    if (this.species.people){
      this.characters = [];
      let characterPromises: Array<Promise<ICharacter>> = [];
      this.species.people.forEach(character => {
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
  public async retrievePlanet(){
    if (this.species.homeworld){
      this.planet = null;
      this.planetService()
        .find(getIdfromUrl(this.species.homeworld))
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
}
