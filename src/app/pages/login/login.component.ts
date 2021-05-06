import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.buildform()
  }

  buildform(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  submit(): void {
    const userProps = this.loginForm.getRawValue()

    this.store.dispatch(new Login(userProps)).subscribe(el => console.log(el))

  }

}
// https://coderthemes.com/hyper/saas/index.html
