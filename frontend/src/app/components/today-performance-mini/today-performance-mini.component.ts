import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Timestamp } from 'rxjs';
import { TotalAssetsService } from '../../services/total-assets.service';

@Component({
  selector: 'app-today-performance-mini',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './today-performance-mini.component.html',
  styleUrl: './today-performance-mini.component.css',
})
export class TodayPerformanceMiniComponent {
  timestamp: Date = new Date('18 Jan 2023 10:38am');
  energy: number = 0;
  capacity: number = 0;

  constructor(private totalAssetsService: TotalAssetsService){
    this.capacity = this.totalAssetsService.getTotalCapacity();
    this.loadTotalGeneration();
  }

  // Load total generation
  async loadTotalGeneration() {
    try {
      this.energy = await this.totalAssetsService.getTotalGeneration();
    } catch (error) {
      console.error(error);
    }
  }


}
