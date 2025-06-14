import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthFormComponent, CustomButtonComponent, ToastComponent } from '@shared/components';
import { ToastService } from '@shared/components/toast';

@Component({
  selector: 'app-sing-up',
  imports: [AuthFormComponent, CustomButtonComponent, ToastComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
  providers: [ToastService]
})
export class SingUpComponent {

  isDisable = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  invalid(name: string) {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched
  }

  onSubmit() {

  }
}
