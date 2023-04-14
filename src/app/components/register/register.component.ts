import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  users: any;
  emailExists = false;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
    this.users = localStorage.getItem('users');
    this.users = JSON.parse(this.users);
  }

  register(form: any) {
    if (form.value.password == form.value.confirmPassword) {
      if (this.users) {
        this.users.forEach((element: any) => {
          if (element.email == form.value.email) {
            this.emailExists = true;
          }
        });
        if (this.emailExists) {
          alert("Account already exists!")
        }
        else {
          this.users.push(form.value)
          localStorage.setItem('users', JSON.stringify(this.users))
          alert("Your account is created successfully")
        }
      }
      else {
        this.users = [];
        this.users.push(form.value)
        localStorage.setItem('users', JSON.stringify(this.users))
        alert("Your account is created successfully")
      }
    }
    else {
      alert("Check your password")
    }
  }
}
