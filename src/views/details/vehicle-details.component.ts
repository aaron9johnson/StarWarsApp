import { Component, Vue, Inject } from 'vue-property-decorator';
import { IVehicle, Vehicle } from '@/model/vehicle.model';
import VehicleService from '@/service/vehicle.service';
import FilmService from '@/service/film.service';
import CharacterService from '@/service/character.service';
import { IFilm } from '@/model/film.model';
import { getIdfromUrl } from '@/util/util';
import { ICharacter } from '@/model/character.model';

@Component
export default class VehicleDetails extends Vue {
  @Inject('vehicleService') private vehicleService!: () => VehicleService;
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;

  public vehicle: IVehicle = new Vehicle();
  public films: Array<IFilm> = [];
  public characters: Array<ICharacter> = [];

  beforeMount(): void {
    if (this.$router.currentRoute.params.vehicle) {
      this.retrieveVehicle(Number(this.$router.currentRoute.params.vehicle))
    }
  }
  public retrieveVehicle(id: number): void {
    this.vehicleService()
      .find(id)
      .then(res => {
        this.vehicle = res;
        Promise.all([
          this.retrieveFilms(),
          this.retrieveCharacters()
        ]);
      });
  }

  // Films
  public async retrieveFilms(){
    if (this.vehicle.films){
      this.films = [];
      let filmPromises: Array<Promise<IFilm>> = [];
      this.vehicle.films.forEach(film => {
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
    if (this.vehicle.pilots){
      this.characters = [];
      let characterPromises: Array<Promise<ICharacter>> = [];
      this.vehicle.pilots.forEach(character => {
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
