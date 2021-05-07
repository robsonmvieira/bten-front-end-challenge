import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { CreateUser } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {
    this.buildform()
  }


  buildform(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  get f() { return this.registerForm.controls; }

  submit(): void {
    const user = this.registerForm.getRawValue()

    this.store.dispatch( new CreateUser(user)).subscribe(response => {
      this.showSuccess()
    }, err => {
      if (err.status === 400) {
        this.showError()
      }
    })
  }

  showSuccess(): void {
    this.toastr.success('Seu cadastro foi efetuado com sucesso', 'Que Máximo!');
  }

  showError(): void {
    this.toastr.error('Alguma das informações estão incorreta', 'Que Bad!');
  }

}
