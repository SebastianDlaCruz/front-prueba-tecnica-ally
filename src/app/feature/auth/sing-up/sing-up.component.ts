import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthHttpService } from '@core/http';
import { InputsSingUp } from '@core/models';
import { AuthFormComponent, CustomButtonComponent, ToastComponent } from '@shared/components';
import { ToastService } from '@shared/components/toast';
import { passwordMatchValidator } from './util/password-match-validator.util';

@Component({
  selector: 'app-sing-up',
  imports: [AuthFormComponent, CustomButtonComponent, ToastComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
  providers: [ToastService]
})
export class SingUpComponent {

  isDisable = false;
  isLoading = false;


  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  }, { validators: passwordMatchValidator })

  private readonly authHttpServices = inject(AuthHttpService);
  private readonly router = inject(Router);

  invalid(name: string) {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched
  }

  error(name: string, error: string) {
    return this.form.get(name)?.getError(error);
  }

  showPasswordMatchError(): boolean {

    return this.form.hasError('passwordMatch')
  }

  onSubmit() {


    if (this.form.valid) {

      this.isDisable = true;
      this.isLoading = true;

      const { confirmPassword, ...singUp } = this.form.value;

      this.authHttpServices.singUp(singUp as InputsSingUp).pipe().subscribe({
        next: (value) => {
          this.router.navigate(['/sing-in']);
        },
        error: (error) => {
          this.isDisable = false;
          this.isLoading = false;
        }, complete: () => {
          this.isDisable = false;
          this.isLoading = false;
        },

      })

    } else {
      this.form.markAllAsTouched();
    }



  }
}
