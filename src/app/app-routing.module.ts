// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './car/car-add/car-add.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  // Define your other routes here
  { path: '', component: HomePageComponent },
  { path: 'car-add', component: CarAddComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
