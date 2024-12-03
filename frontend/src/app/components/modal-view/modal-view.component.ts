import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-modal-view',
  standalone: true,
  imports: [CommonModule,MatIconModule, MatCardModule, CanvasJSAngularChartsModule],
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.css'
})
export class ModalViewComponent {
  countryName: String = "test";
  capacity: number = 1234;
  inv: number = 12;
  scb: number = 12;
  irridiance: number = 345.1;
  days_online: number = 12;
  performance_ratio: number = 60;
  inverter_efficiency: number = 81;
  location: String = "12N15E"
  power_generation: number = 1000;

  private _data?: Data[]; // Example type

  lineChartOptions = {
    animationEnabled: true,
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'line',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
        ],
      },
    ],
  };

  @Input()
  set data(value: Data[] | undefined) {
    this._data = value;
  }

  get data() {
    return this._data;
  }

  @Output() closeDrawerEmitter = new EventEmitter<void>();

  closeDrawer() {
    this.closeDrawerEmitter.emit();
  }
}
