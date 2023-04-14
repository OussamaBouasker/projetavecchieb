import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  loginForm: FormGroup;
  users: any;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
    this.users = localStorage.getItem('users');
    this.users = JSON.parse(this.users);
  }

  login(form: any) {
    this.users.forEach((element: any) => {
      if (element.email == form.value.email) {
        if (element.password == form.value.password) {
          alert("Logged in successfully!")
        }
        else {
          alert("Your password is wrong")
        }
      }
      else {
        alert("Account does not exist")
      }
    });
  }
}
