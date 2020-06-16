import axios from 'axios';

import { IStarship } from '@/model/starship.model';

const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/starships`;

export default class StarshipService {
  public find(id: number): Promise<IStarship> {
    return new Promise<IStarship>(resolve => {
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
