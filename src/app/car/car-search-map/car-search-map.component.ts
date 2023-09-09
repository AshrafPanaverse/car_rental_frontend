import { Component } from '@angular/core';

@Component({
  selector: 'app-car-search-map',
  templateUrl: './car-search-map.component.html',
  styleUrls: ['./car-search-map.component.css']
})
export class CarSearchMapComponent {
  carFilter = {
    address: '',
    radius: '',
    type: '',
    marka: '',
    model: '',
    naped: '',
    inneInformation: '',
    rodzajPaliwa: '',
    skyrzyniaBiegow: ''
  };

  // Create an array of cars with explicit typing
  cars: { make: string; model: string; year: number; price: number }[] = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      price: 25000,
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2022,
      price: 22000,
    },
    {
      make: 'Ford',
      model: 'Focus',
      year: 2020,
      price: 20000,
    },
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      price: 25000,
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2022,
      price: 22000,
    },
    {
      make: 'Ford',
      model: 'Focus',
      year: 2020,
      price: 20000,
    },
  ];

  onSubmit() {
    alert('Searching, Please Wait!');
    // Here, you can add code to handle the form submission
    // Typically, you would call your UserService to perform the signup operation
    console.log('User submitted:', this.carFilter);
    // Add your signup logic here, e.g., calling a service method
  }
}
