import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
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
          default:
            // Intentionally left blank
            break;
        }
      }
  }

}
