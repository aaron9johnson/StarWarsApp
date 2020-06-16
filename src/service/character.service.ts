import axios from 'axios';

import { ICharacter } from '@/model/character.model';

const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/people`;

export default class CharacterService {
  
  public find(id: number): Promise<ICharacter> {
    return new Promise<ICharacter>(resolve => {
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
