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
        Promise.all([
          this.retrieveFilms(),
          this.retrieveCharacters()
        ]);
      });
  }

  // Films
  public async retrieveFilms(){
    if (this.starship.films){
      this.films = [];
      let filmPromises: Array<Promise<IFilm>> = [];
      this.starship.films.forEach(film => {
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
    if (this.starship.pilots){
      this.characters = [];
      let characterPromises: Array<Promise<ICharacter>> = [];
      this.starship.pilots.forEach(character => {
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
