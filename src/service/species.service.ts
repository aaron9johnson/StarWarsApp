import axios from 'axios';

import { ISpecies } from '@/model/species.model';

const baseApiUrl = 'https://swapi.co/api/species';

export default class SpeciesService {
  public find(id: number): Promise<ISpecies> {
    return new Promise<ISpecies>(resolve => {
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
