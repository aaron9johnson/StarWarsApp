import { Component, Vue, Inject } from 'vue-property-decorator';
import { IFilm, Film } from '@/model/film.model';
import FilmService from '@/service/film.service';

@Component
export default class FilmDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;

  public film: IFilm = new Film();

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
        console.log(res);
      });
  }
}
