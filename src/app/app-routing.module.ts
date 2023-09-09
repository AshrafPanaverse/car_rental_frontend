// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './car/car-add/car-add.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CarSearchComponent } from './car/car-search/car-search.component';
import { CarSearchMapComponent } from './car/car-search-map/car-search-map.component';

const routes: Routes = [
  // Define your other routes here
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'car-add', component: CarAddComponent },
  { path: 'car-search', component: CarSearchComponent },
  { path: 'car-search-map', component:CarSearchMapComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
