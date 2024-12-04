import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getMarksData(): Observable<any> {
    return this.http.get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast').pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
