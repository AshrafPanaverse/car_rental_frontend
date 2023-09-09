import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAddComponent } from './car-add/car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import both modules
import { CarSearchComponent } from './car-search/car-search.component';
import { CarSearchMapComponent } from './car-search-map/car-search-map.component'; // Import ReactiveFormsModule


@NgModule({
  declarations: [
    CarAddComponent,
    CarSearchComponent,
    CarSearchMapComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ]
})
export class CarModule { }
