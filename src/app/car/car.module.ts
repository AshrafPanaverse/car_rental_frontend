import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAddComponent } from './car-add/car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import both modules
import { CarSearchComponent } from './car-search/car-search.component'; // Import ReactiveFormsModule


@NgModule({
  declarations: [
    CarAddComponent,
    CarSearchComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ]
})
export class CarModule { }
