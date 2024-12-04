import { Data } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../services/common.service';
import { EnergyService } from '../../services/energy.service';
import moment from 'moment';

@Component({
  selector: 'app-daily-energy-generated',
  standalone: true,
  imports: [MatCardModule, CanvasJSAngularChartsModule],
  templateUrl: './daily-energy-generated.component.html',
  styleUrl: './daily-energy-generated.component.css',
})
export class DailyEnergyGeneratedComponent implements OnInit {
  lineChartOptions: any = {
    animationEnabled: true,
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'line',
        dataPoints: [],
      },
    ],
  };
  constructor(
    public commonService: CommonService,
    public energyService: EnergyService
  ) {}

  ngOnInit(): void {
    const params = {
      lat: environment.countriesLatLong[0].lat,
      long: environment.countriesLatLong[0].long,
      startDate: this.commonService.formatDateToYYYYMMDD(),
      endDate: this.commonService.formatDateToYYYYMMDD(),
    };
    this.energyService.getEnergyData(params).then((response) => {
      const dailyData = response.hourly.direct_radiation.map(
        (irridiance: string, index: number) => ({
          label: moment(response.hourly.time[index]).format('HH:mm'),
          y: irridiance,
        })
      );
      this.lineChartOptions = {
        color: 'teal',
        backgroundColor: 'transparent',
        axisX: {
          titleFontColor: 'white', // White color for the X-axis title
          labelFontColor: 'white', // White color for the X-axis labels
          lineColor: 'white', // White color for X-axis line
        },
        axisY: {
          titleFontColor: 'white', // White color for the Y-axis title
          labelFontColor: 'white', // White color for the Y-axis labels
          lineColor: 'white', // White color for Y-axis line
        },
        animationEnabled: true,
        theme: 'light2', // "light1", "dark1", "dark2"
        data: [
          {
            color: "#01F9C6",
            type: 'area',
            dataPoints: dailyData,
          },
        ],
      };
    });
  }
}
