import { Component, Vue, Inject } from 'vue-property-decorator';
import { IFilm } from '@/model/film.model';
import FilmService from '@/service/film.service';

@Component
export default class Films extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;

  public films: Array<IFilm> = [];

  public beforeMount(): void {
    this.filmService()
      .retrieve()
      .then(res => {
        this.films = res.data.results;
        console.log(res);
      });
  }
}
