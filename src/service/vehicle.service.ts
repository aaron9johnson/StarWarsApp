import axios from 'axios';

import { IVehicle} from '@/model/vehicle.model';

const baseApiUrl = 'https://swapi.co/api/vehicles';

export default class VehicleService {
  public find(id: number): Promise<IVehicle> {
    return new Promise<IVehicle>(resolve => {
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
