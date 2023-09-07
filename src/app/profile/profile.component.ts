import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    email: '',
    company: '',
    phoneNumber: '',
    address: '',
    companyName: '',
    vatNumber: '',
    agree: false,
    city:'',
    Wojewodztwo:''
  };

  onSubmit() {
    alert('Changes Saved Successfully!')
    // Here, you can add code to handle the form submission
    // Typically, you would call your UserService to perform the signup operation
    console.log('User submitted:', this.user);
    // Add your signup logic here, e.g., calling a service method
  }
}