import axios from 'axios';

import { IStarship } from '@/model/starship.model';

const baseApiUrl = 'https://swapi.co/api/starships';

export default class StarshipService {
  public find(id: number): Promise<IStarship> {
    return new Promise<IStarship>(resolve => {
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
}
