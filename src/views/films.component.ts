import { Component, Vue, Inject } from 'vue-property-decorator';
import { IFilm, Film } from '@/model/film.model';
import FilmService from '@/service/film.service';
import { getIdfromUrl } from '@/util/util';

@Component
export default class Films extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;

  public films: Array<IFilm> = [];

  beforeMount(): void {
    this.filmService()
      .retrieve()
      .then(res => {
        this.films = res.data.results;
        console.log(res);
      });
  }
  public filmDetails(film:IFilm){
    if (film.url){
      this.$router.push(`/film/${getIdfromUrl(film.url)}`); // grab swapi id from url
    }
  }
}
