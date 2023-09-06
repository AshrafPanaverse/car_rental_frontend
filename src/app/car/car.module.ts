import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAddComponent } from './car-add/car-add.component';

import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


@NgModule({
  declarations: [
    CarAddComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class CarModule { }
