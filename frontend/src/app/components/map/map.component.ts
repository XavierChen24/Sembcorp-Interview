import { environment } from './../../../../environments/environment';

import { Component, AfterViewInit, Input, OnInit } from '@angular/core';
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

    // //Markers
    // const marker = L.marker([51.505, -0.09]).addTo(this.map);
    // marker.bindPopup('A sample marker').openPopup();
  }

  ngOnInit(): void {
    this.map = this.configMap();
  }
}
