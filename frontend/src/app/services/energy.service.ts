import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import axios from 'axios';
import { WeatherData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  constructor(private http: HttpClient) { }

  getEnergyData = async (params: any): Promise<any> => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.long}&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=${params.startDate}&end_date=${params.endDate}`
      );
      return response.data;
    }catch(error) {
      console.log(`Error fetching energy info`, error);
      throw error;
    }
  }


}
