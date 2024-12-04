import { environment } from './../../../../environments/environment';

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any;
  defaultZoom = environment.mapDefaultZoom;
  latlng = new L.LatLng(environment.mapCenter.lat, environment.mapCenter.long);

  configMap() {
    this.map = L.map('map', {
      center: this.latlng,
      zoom: this.defaultZoom,
      zoomControl: false,
    });

    //Base image layer. The land and sea with colour.
    const Esri_WorldImagery = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      }
    ).addTo(this.map);

    //Added the border markings
    const Stadia_StamenTerrainLabels = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/stamen_terrain_labels/{z}/{x}/{y}{r}.png',
      {
        minZoom: 0,
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.map);

    //Added the cities/countries names.
    const Stadia_StamenTerrainLines = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/stamen_terrain_lines/{z}/{x}/{y}{r}.png',
      {
        minZoom: 0,
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.map);

    //Markers
    for( var country of environment.countriesLatLong) {
      var latlng = new L.LatLng(country.lat, country.long);
      const marker = L.marker(latlng).addTo(this.map);
      marker.on("click", e => {
        this.openModal(country);
      })
    }

  }

  ngOnInit(): void {
    this.map = this.configMap();
  }

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  closeModal() {
    this.dialog.nativeElement.close();
    this.dialog.nativeElement.classList.remove('opened');
  }

  openModal(country: { name: string; lat: number; long: number; assets: number; days_online: number; }) {
    this.dialog.nativeElement.showModal();
    this.dialog.nativeElement.classList.add('opened');
  }

  ngAfterViewInit() {
    this.dialog.nativeElement.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as Element;
      if (target.nodeName === 'DIALOG') {
        this.closeModal();
      }
    });
  }
}
