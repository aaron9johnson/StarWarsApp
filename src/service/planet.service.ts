import axios from 'axios';

import { IPlanet } from '@/model/planet.model';

const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/planets`;

export default class PlanetService {
  public find(id: number): Promise<IPlanet> {
    return new Promise<IPlanet>(resolve => {
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
