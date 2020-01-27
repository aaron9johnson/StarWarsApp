import axios from 'axios';

import { IFilm } from '@/model/film.model';

const baseApiUrl = 'https://swapi.co/api/films';

export default class FilmService {
  public find(id: number): Promise<IFilm> {
    return new Promise<IFilm>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl).then(function(res) {
        resolve(res);
      });
    });
  }
  public search(searchText: string): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(`${baseApiUrl}?search=${searchText}`).then(function(res) {
        resolve(res);
      });
    });
  }
}
