import axios from 'axios';

import { IVehicle } from '@/model/vehicle.model';

const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/vehicles`;

export default class VehicleService {
  public find(id: number): Promise<IVehicle> {
    return new Promise<IVehicle>(resolve => {
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
