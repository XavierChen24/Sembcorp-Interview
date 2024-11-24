import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from '../../components/map/map.component';
import { Latlang } from '../../services/latlang';
import { LatlangService } from '../../services/latlang.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  latlangs: Latlang[] = []

  constructor (private latlangService: LatlangService) {

    latlangService.latlangsObs.subscribe((newLatlangs) => {
      this.latlangs = [...newLatlangs]
    })

  }

  ngOnInit(): void {

    this.latlangService.getAll()
  }

}
