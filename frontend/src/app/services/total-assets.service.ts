import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { EnergyService } from './energy.service';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { CommonService } from './common.service';
import { WeatherData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TotalAssetsService {
  todayDate: String;

  constructor(commonService: CommonService) {
    this.todayDate = commonService.formatDateToYYYYMMDD();
  }

  //Calculate Total Number of Assets
  getTotalAssets(): number {
    var totalAssets: number = 0;
    for (var country of environment.countriesLatLong) {
      totalAssets += country.assets;
    }
    return totalAssets;
  }

  //Calculate the Total Capacity of All Asset
  getTotalCapacity(): number {
    var totalCapacity: number = 0;
    for (var country of environment.countriesLatLong) {
      totalCapacity += country.capacity_kw;
    }
    return totalCapacity;
  }

  //Calculate the Total Generation Today Across all Assets
  getTotalGeneration = async (): Promise<number> => {
    var totalGeneration: number = 0;
    try {
      for (var country of environment.countriesLatLong) {
        const response = await axios.get<WeatherData>(
          `https://api.open-meteo.com/v1/forecast?latitude=${country.lat}&longitude=${country.long}&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=${this.todayDate}&end_date=${this.todayDate}`
        );
        totalGeneration = response.data.hourly.direct_radiation.reduce(
          (sum, value) => sum + value,
          0
        );
      }
      return totalGeneration;
    } catch (error) {
      console.log('Error Calculating Total Power Generation', error);
      throw error;
    }
  };
}


