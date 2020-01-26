import { Component, Vue, Inject } from 'vue-property-decorator';

import { IFilm } from '@/model/film.model';
import { ICharacter } from '@/model/character.model';
import { IStarship, Starship } from '@/model/starship.model';

import FilmService from '@/service/film.service';
import CharacterService from '@/service/character.service';
import StarshipService from '@/service/starship.service';

import { getIdfromUrl } from '@/util/util';

@Component
export default class StarshipDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;
  @Inject('starshipService') private starshipService!: () => StarshipService;

  public starship: IStarship = new Starship();
  public films: Array<IFilm> = [];
  public characters: Array<ICharacter> = [];
  

  beforeMount(): void {
    if (this.$router.currentRoute.params.starship) {
      this.retrieveStarship(Number(this.$router.currentRoute.params.starship))
    }
  }
  public retrieveStarship(id: number): void {
    this.starshipService()
      .find(id)
      .then(res => {
        this.starship = res;
        this.retrieveFilms();
        this.retrieveCharacters();
      });
  }

  //Films
  public retrieveFilms(){
    if (this.starship.films){
      this.films = [];
      this.starship.films.forEach(film => {
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
    if (this.starship.pilots){
      this.characters = [];
      this.starship.pilots.forEach(character => {
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
