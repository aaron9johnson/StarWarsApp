import axios from 'axios';

import { ICharacter} from '@/model/character.model';

const baseApiUrl = 'https://swapi.co/api/people';

export default class CharacterService {
  public find(id: number): Promise<ICharacter> {
    return new Promise<ICharacter>(resolve => {
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
