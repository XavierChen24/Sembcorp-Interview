import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  constructor(private http: HttpClient) { }

  getEnergyData(params: any): Observable<any> {
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.long}&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=${params.start_date}&end_date=${params.end_date}`).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
