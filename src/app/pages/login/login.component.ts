import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/state/user/user.action';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store) { }

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
    this.store.dispatch(new Login(userProps)).subscribe(response =>  {
      this.showSuccess()
      if (response.users) {
        this.router.navigate(['admin'])
      }
    }, err => {
      if (err.status === 400) {
        this.showError()
      }
    })
  }

  showSuccess(): void {
    this.toastr.success('Login efetuado com sucesso', 'Que Máximo!');
  }

  showError(): void {
    this.toastr.error('Email ou senha está incorreto ', 'Que Bad!');

  }

}
// https://coderthemes.com/hyper/saas/index.html
