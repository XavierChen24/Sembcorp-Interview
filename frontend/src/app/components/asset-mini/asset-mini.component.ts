import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-asset-mini',
  standalone: true,
  imports: [ MatCardModule],
  templateUrl: './asset-mini.component.html',
  styleUrl: './asset-mini.component.css'
})
export class AssetMiniComponent {
  assets: number = 123;
  generated: number = 123;
  constructor(){

  }
}
