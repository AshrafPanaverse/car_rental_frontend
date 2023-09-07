import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  onSubmit() {
    alert('I am Login Method')
    // Here, you can add code to handle the form submission
    // Typically, you would call your UserService to perform the login operation
    console.log('User submitted:', this.user);
    // Add your login logic here, e.g., calling a service method
  }
}
