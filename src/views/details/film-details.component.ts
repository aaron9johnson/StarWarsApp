import { Component, Vue, Inject } from 'vue-property-decorator';
import { IFilm, Film } from '@/model/film.model';
import { ICharacter } from '@/model/character.model';
import FilmService from '@/service/film.service';
import CharacterService from '@/service/character.service';
import { getIdfromUrl } from '@/util/util';
import { IVehicle } from '@/model/vehicle.model';
import VehicleService from '@/service/vehicle.service';

@Component
export default class FilmDetails extends Vue {
  @Inject('filmService') private filmService!: () => FilmService;
  @Inject('characterService') private characterService!: () => CharacterService;
  @Inject('vehicleService') private vehicleService!: () => VehicleService;

  public film: IFilm = new Film();
  public characters: Array<ICharacter> = [];
  public vehicles: Array<IVehicle> = [];
  
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
        this.retrieveVehicles();
      });
  }

  //Characters
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

  //Vehicles
  public retrieveVehicles(){
    if (this.film.vehicles){
      this.vehicles = [];
      this.film.vehicles.forEach(vehicle => {
        this.vehicleService()
          .find(getIdfromUrl(vehicle))
          .then(res => {
            this.vehicles.push(res)
          });
      });
    }
  }
  public vehicleDetails(vehicle:IVehicle){
    if (vehicle.url){
      this.$router.push(`/vehicle/${getIdfromUrl(vehicle.url)}`); // grab swapi id from url
    }
  }
}
