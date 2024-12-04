import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  formatDateToYYYYMMDD = (): string => {
    const date: Date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns month index (0 for January, 11 for December)
    const day = date.getDate().toString().padStart(2, '0'); // getDate() returns the day of the month
    return `${year}-${month}-${day}`;
  }
}
