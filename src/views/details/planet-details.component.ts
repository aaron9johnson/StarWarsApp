import { Component, Vue, Inject } from 'vue-property-decorator';

import { IFilm } from '@/model/film.model';
import { ICharacter } from '@/model/character.model';
import { IPlanet, Planet } from '@/model/planet.model';

import FilmService from '@/service/film.service';
import CharacterService from '@/service/character.service';
import PlanetService from '@/service/planet.service';

import { getIdfromUrl } from '@/util/util';

@Component
export default class PlanetDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;
  @Inject('planetService') private planetService!: () => PlanetService;

  public planet: IPlanet = new Planet();
  public films: Array<IFilm> = [];
  public characters: Array<ICharacter> = [];
  

  beforeMount(): void {
    if (this.$router.currentRoute.params.planet) {
      this.retrievePlanet(Number(this.$router.currentRoute.params.planet))
    }
  }
  public retrievePlanet(id: number): void {
    this.planetService()
      .find(id)
      .then(res => {
        this.planet = res;
        Promise.all([
          this.retrieveFilms(),
          this.retrieveCharacters()
        ]);
      });
  }

  // Films
  public async retrieveFilms(){
    if (this.planet.films){
      this.films = [];
      let filmPromises: Array<Promise<IFilm>> = [];
      this.planet.films.forEach(film => {
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
    if (this.planet.residents){
      this.characters = [];
      let characterPromises: Array<Promise<ICharacter>> = [];
      this.planet.residents.forEach(character => {
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
}
