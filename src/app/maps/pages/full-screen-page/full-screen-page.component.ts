import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).config.ACCESS_TOKEN = 'pk.eyJ1Ijoiam9zcGluYS0xIiwiYSI6ImNtODE5bDRkdDE1ODIya29rNGpqdmdhN20ifQ.c6bncfdVHbrO3duS_oplsA';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({

      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }




}
