import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
}

function formatNumber(value: number) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatDate(date: Date) {
  const format = 'dd MMM yyyy hh:mma';
  return moment(date, 'DD MMM YYYY hh:mma').format(format);
}
