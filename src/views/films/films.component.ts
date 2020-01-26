import { Component, Vue, Inject } from 'vue-property-decorator';
import { IFilm, Film } from '@/model/film.model';
import FilmService from '@/service/film.service';

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
  public filmDetails(film:Film){
    if (film.url){
      this.$router.push(`/film/${film.url.charAt(film.url.length-2).toString()}`.toString()) // grab swapi id from url
    }
  }
}
