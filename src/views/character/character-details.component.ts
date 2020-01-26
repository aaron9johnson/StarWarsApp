import { Component, Vue, Inject } from 'vue-property-decorator';
import { ICharacter, Character } from '@/model/character.model';
import CharacterService from '@/service/character.service';
import FilmService from '@/service/film.service';
import { IFilm } from '@/model/film.model';
import { getIdfromUrl } from '@/util/util';

@Component
export default class CharacterDetails extends Vue {
  @Inject('characterService') private characterService!: () => CharacterService;
  @Inject('filmService') private filmService!: () => FilmService;

  public character: ICharacter = new Character();
  public films: Array<IFilm> = [];

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
      });
  }
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
}
