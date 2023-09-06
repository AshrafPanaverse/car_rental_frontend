import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  // Property to store the form data
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.carForm = this.formBuilder.group({
      price: ['', Validators.required],
      availability: [false],
      calendar: [''],
      carType: ['4x4'],
      make: [''],
      model: [''],
      premiumAd: [''],
      productionYear: [''],
      description: [''],
      images: [''],
      seats: [''],
      doors: [''],
      engineSize: [''],
      horsepower: [''],
      driveTrain: ['4x4'],
      gearbox: ['Automatic'],
      gasType: ['Diesel'],
      wedding: [false],
    });
  }
  ngOnInit(): void {
    // Initialize the form controls and validators
    
  }

  // Method to handle form submission
  onSubmit() {
    if (this.carForm.valid) {
      alert('Submitted succssfully!')
      // Handle form submission, access form values using this.carForm.value
      console.log(this.carForm.value); // Replace with your data submission logic
    } else {
      alert('Please fill the form carefully!')
      // Handle form validation errors or display messages to the user
    }
  }
}
