import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-daily-energy-generated',
  standalone: true,
  imports: [MatCardModule, CanvasJSAngularChartsModule],
  templateUrl: './daily-energy-generated.component.html',
  styleUrl: './daily-energy-generated.component.css',
})
export class DailyEnergyGeneratedComponent {
  constructor() {}

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
}
