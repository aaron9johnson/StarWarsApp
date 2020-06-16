import axios from 'axios';

import { ISpecies } from '@/model/species.model';

const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/species`;

export default class SpeciesService {
  public find(id: number): Promise<ISpecies> {
    return new Promise<ISpecies>(resolve => {
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
