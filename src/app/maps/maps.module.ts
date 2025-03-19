import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).config.ACCESS_TOKEN = 'pk.eyJ1Ijoiam9zcGluYS0xIiwiYSI6ImNtODE5bDRkdDE1ODIya29rNGpqdmdhN20ifQ.c6bncfdVHbrO3duS_oplsA';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';

import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    MapsRoutingModule,
    SideMenuComponent
  ]
})
export class MapsModule { }
