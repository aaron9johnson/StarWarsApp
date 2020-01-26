import axios from 'axios';

import { IPlanet } from '@/model/planet.model';

const baseApiUrl = 'https://swapi.co/api/planets';

export default class PlanetService {
  public find(id: number): Promise<IPlanet> {
    return new Promise<IPlanet>(resolve => {
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
