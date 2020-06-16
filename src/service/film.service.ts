import axios from 'axios';

import { IFilm } from '@/model/film.model';

const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/films`;

export default class FilmService {
  public find(id: number): Promise<IFilm> {
    return new Promise<IFilm>(resolve => {
      axios.get(`${apiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(apiUrl).then(function(res) {
        resolve(res);
      });
    });
  }
}
