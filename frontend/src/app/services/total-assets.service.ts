import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { EnergyService } from './energy.service';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TotalAssetsService {
  constructor() {}

  getTotalAssets(): number {
    var totalAssets: number = 0;
    for (var country of environment.countriesLatLong) {
      totalAssets += country.assets;
    }
    return totalAssets;
  }

  getTotalCapacity() : number {
    var totalCapacity: number = 0;
    for (var country of environment.countriesLatLong) {
      totalCapacity += country.capacity_kw;
    }
    return totalCapacity;
  }

  formatDateToYYYYMMDD = (): string => {
    const date: Date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns month index (0 for January, 11 for December)
    const day = date.getDate().toString().padStart(2, '0'); // getDate() returns the day of the month

    return `${year}-${month}-${day}`;
  }

  getTotalGeneration = async (): Promise<number> => {
    var totalGeneration: number = 0;
    const todayDate = this.formatDateToYYYYMMDD();
    try {
      for (var country of environment.countriesLatLong) {
        const response = await axios.get<WeatherData>(
          `https://api.open-meteo.com/v1/forecast?latitude=${country.lat}&longitude=${country.long}&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=${todayDate}&end_date=${todayDate}`
        );
        totalGeneration = response.data.hourly.direct_radiation.reduce(
          (sum, value) => sum + value,
          0
        );
      }
      console.log('getTotalGeneration function ran');
      return totalGeneration;
    } catch (error) {
      console.log('Error Calculating Total Power Generation', error);
      throw error;
    }
  };
}

interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    relativehumidity_2m: string;
    direct_radiation: string;
  };
  hourly: {
    time: string[];
    relativehumidity_2m: number[];
    direct_radiation: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}
