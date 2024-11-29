import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-today-performance-mini',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './today-performance-mini.component.html',
  styleUrl: './today-performance-mini.component.css',
})
export class TodayPerformanceMiniComponent {
  timestamp: Date = new Date('18 Jan 2023 10:38am');
  energy: number = 123;
  power: number = 123;
}
