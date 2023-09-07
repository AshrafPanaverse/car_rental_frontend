import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    companyName: '',
    vatNumber: '',
    agree: false,
  };

  onSubmit() {
    alert('Submited Successfully!')
    // Here, you can add code to handle the form submission
    // Typically, you would call your UserService to perform the signup operation
    console.log('User submitted:', this.user);
    // Add your signup logic here, e.g., calling a service method
  }
}
