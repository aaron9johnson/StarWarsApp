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
        this.retrieveFilms();
        this.retrieveCharacters();
      });
  }

  //Films
  public retrieveFilms(){
    if (this.planet.films){
      this.films = [];
      this.planet.films.forEach(film => {
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

  // Characters
  public retrieveCharacters(){
    if (this.planet.residents){
      this.characters = [];
      this.planet.residents.forEach(character => {
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
}
