import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from '../../components/map/map.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { AssetMiniComponent } from '../../components/asset-mini/asset-mini.component';
import { TodayPerformanceMiniComponent } from '../../components/today-performance-mini/today-performance-mini.component';
import { DailyEnergyGeneratedComponent } from "../../components/daily-energy-generated/daily-energy-generated.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MapComponent,
    ToolbarComponent,
    AssetMiniComponent,
    TodayPerformanceMiniComponent,
    DailyEnergyGeneratedComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
