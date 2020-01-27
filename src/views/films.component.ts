import { Component, Vue, Inject, Watch } from 'vue-property-decorator';
import { IFilm } from '@/model/film.model';
import FilmService from '@/service/film.service';
import { getIdfromUrl } from '@/util/util';

@Component
export default class Films extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;

  public films: Array<IFilm> = [];

  // Filter
  public filmsFiltered: Array<IFilm> = [];
  public filterText: string | null = null;
  public filterAll: boolean = false;

  @Watch('filterText')
  onPropertyChanged(value: string) {
    this.filmsFiltered = this.films.filter(film => this.isFilmFiltered(film, value.toLowerCase()));
  }

  public toggleFilter(){
    this.filterAll = !this.filterAll;
    this.filmsFiltered = this.films.filter(film => !this.filterText || this.isFilmFiltered(film, this.filterText.toLowerCase()));
  }

  public isFilmFiltered(film: IFilm, filterText: string): boolean {
    if (this.filterAll) { // filter by all fields
      if (film.title && film.title.toLowerCase().includes(filterText)) {
        return true;
      }
      if (film.episode_id && film.episode_id.toString().includes(filterText)) {
        return true;
      }
      if (film.opening_crawl && film.opening_crawl.toLowerCase().includes(filterText)) {
        return true;
      }
      if (film.producer && film.producer.toLowerCase().includes(filterText)) {
        return true;
      }
      if (film.director && film.director.toLowerCase().includes(filterText)) {
        return true;
      }
      if (film.release_date && film.release_date.toString().includes(filterText)) {
        return true;
      }
      return false;
    }
    return film.title != null && film.title.toLowerCase().includes(filterText); // filter by title
 }

  beforeMount(): void {
    this.filmService()
      .retrieve()
      .then(res => {
        this.films = res.data.results;
        this.filmsFiltered = this.films.filter(film => !this.filterText || this.isFilmFiltered(film, this.filterText.toLowerCase()));
      });
  }
  public filmDetails(film:IFilm){
    if (film.url){
      this.$router.push(`/film/${getIdfromUrl(film.url)}`); // grab swapi id from url
    }
  }
}
