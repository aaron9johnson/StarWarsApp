import { Component, Vue, Inject } from 'vue-property-decorator';
import { IFilm, Film } from '@/model/film.model';
import { ICharacter } from '@/model/character.model';
import FilmService from '@/service/film.service';
import CharacterService from '@/service/character.service';
import { getIdfromUrl } from '@/util/util';

@Component
export default class FilmDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;

  public film: IFilm = new Film();
  public characters: Array<ICharacter> = [];
  
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
      });
  }
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
}
