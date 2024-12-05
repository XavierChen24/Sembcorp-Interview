import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
// Angular Chart Component
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-enterprise';
import 'ag-charts-enterprise';
import { environment } from '../../../../environments/environment';
import { EnergyService } from '../../services/energy.service';
import { CommonService } from '../../services/common.service';
import moment from 'moment';

@Component({
  selector: 'app-modal-view',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    CanvasJSAngularChartsModule,
    AgCharts,
  ],
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.css',
})
export class ModalViewComponent implements OnInit{
  params = {
    lat: environment.countriesLatLong[0].lat,
    long: environment.countriesLatLong[0].long,
    startDate: this.commonService.formatDateToYYYYMMDD(),
    endDate: this.commonService.formatDateToYYYYMMDD(),
  };
  countryName: String = environment.countriesLatLong[0].name;
  capacity: number = environment.countriesLatLong[0].capacity_kw;
  inv: number = 12;
  scb: number = 12;
  irridiance: number = 345.1;
  today = moment();
  date_online_configured = moment(environment.countriesLatLong[0].date_online);
  days_online: number = this.today.diff(this.date_online_configured, 'days');
  performance_ratio: number = 60;
  inverter_efficiency: number = 81;
  power_generation: number = 1135;

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
  ngOnInit(): void {
    this.energyService.getEnergyData(this.params).then((response) => {
      const dailyData = response.hourly.direct_radiation.map(
        (irridiance: string, index: number) => ({
          label: moment(response.hourly.time[index]).format('HH:mm'),
          y: irridiance,
        })
      );
      this.lineChartOptions = {
        options: {
          responsive: true,
        },
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
            color: '#01F9C6',
            type: 'area',
            dataPoints: dailyData,
          },
        ],
      };
    });
  }

  //Passing data into modal is still WIP
  //Start of passing data
  private _data: Data[] | undefined;

  @Input()
  setdata(value: Data[] | undefined) {
    this._data = value;
  }

  getdata() {
    return this._data;
  }

  @Output() closeDrawerEmitter = new EventEmitter<void>();

  closeDrawer() {
    this.closeDrawerEmitter.emit();
  }
  //End of passing data

  //Start of Radial bar
  public options: AgChartOptions;

  constructor(
    public commonService: CommonService,
    public energyService: EnergyService
  ) {
    const todayGeneration = energyService.getEnergyData(this.params);
    this.options = {
      data: [
        {
          quarter: ``,
          services: this.power_generation,
        },
      ],
      background: { fill: 'rgb(0, 0, 0, 0)' },
      height:200,
      width: 200,
      series: [
        {
          type: 'radial-bar',
          radiusKey: 'quarter',
          angleKey: 'services',
        },
      ],
    } as AgChartOptions;
  }
  //End of Radial Bar
}
