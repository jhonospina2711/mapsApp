import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.10682678667843, 4.6086820158736685);

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado'

    this.map = new Map({

      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    //! Este código sirve para personalizar los marcadores
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Verona II';


    // const marker = new Marker({
    // color: 'red',
    //   element: markerHtml,
    // })
    //   .setLngLat( this.currentLngLat )
    //   .addTo( this.map! );
  }



}
