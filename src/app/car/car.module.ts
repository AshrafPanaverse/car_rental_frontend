import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAddComponent } from './car-add/car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import both modules
import { CarSearchComponent } from './car-search/car-search.component';
import { CarSearchMapComponent } from './car-search-map/car-search-map.component';
import { MapComponent } from './map/map.component'; // Import ReactiveFormsModule
import { GoogleMapsModule } from '@angular/google-maps'; // Import the module


@NgModule({
  declarations: [
    CarAddComponent,
    CarSearchComponent,
    CarSearchMapComponent,
    MapComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,GoogleMapsModule
  ]
})
export class CarModule { }
