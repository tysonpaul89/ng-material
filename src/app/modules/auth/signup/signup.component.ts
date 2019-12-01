import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get repeatPassword() {
    return this.registerForm.get('repeatPassword');
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  getErrorMessage(inputControl: FormControl, inputName: string) {
    if (inputControl.hasError('required')) {
      return 'You must enter a value';
    } else {
      switch (inputName) {
        case 'email':
          return inputControl.hasError('email') ? 'Not a valid email' : '';
        case 'password':
          return inputControl.hasError('password') ? 'Not a valid password' : '';
        case 'repeatPassword':
          return inputControl.hasError('repeatPassword') ? 'Not a valid password' : '';
        default:
          // Intentionally left blank
          break;
      }
    }
  }

}
