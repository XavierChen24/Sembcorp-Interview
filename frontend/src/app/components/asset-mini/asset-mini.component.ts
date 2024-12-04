import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TotalAssetsService } from '../../services/total-assets.service';

@Component({
  selector: 'app-asset-mini',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './asset-mini.component.html',
  styleUrl: './asset-mini.component.css',
})
export class AssetMiniComponent {

  assets: number = 0;
  generated: number = 0;

  constructor(private totalAssetsService: TotalAssetsService){
    this.assets = this.totalAssetsService.getTotalAssets();
    this.loadTotalGeneration();
  }

  // Load total generation
  async loadTotalGeneration() {
    try {
      this.generated = await this.totalAssetsService.getTotalGeneration();
    } catch (error) {
      console.error(error);
    }
  }

}
