import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker{
  color: string;
  lngLat: number[]
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];
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

    this.readFormLocalStorage();

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

  createMarker() {

    if( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker( lngLat: LngLat, color: string ) {
    if (!this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })

    .setLngLat( lngLat )
    .addTo( this.map );

    this.markers.push({ color, marker});
    this.saveToLocalStorage();

     // Escuchar el evento dragend
    marker.on('dragend', () => {
    const index = this.markers.findIndex(m => m.marker === marker);
    if (index !== -1) {
      this.markers[index].marker.setLngLat(marker.getLngLat());
      this.saveToLocalStorage();
      }
    });
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice( index, 1)
  }

  flyTo( marker: Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });
  }


  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map( ({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ));
  }

  readFormLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString ); //! Ojo

    plainMarkers.forEach( ({color, lngLat}) => {
      const [ lng, lat] = lngLat;
      const coords = new LngLat( lng, lat)
      this.addMarker(coords, color)
    })
  }



}
