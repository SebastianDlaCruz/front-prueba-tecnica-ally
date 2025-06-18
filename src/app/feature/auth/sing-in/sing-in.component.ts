import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthHttpService, InputsSingIn, LocalStoreService, setTokens } from '@core/index';
import { Store } from '@ngrx/store';
import { AuthFormComponent, CustomButtonComponent, ToastComponent } from '@shared/components';
import { ToastService, ToastStatus } from '@shared/components/toast';

@Component({
  selector: 'app-sing-in',
  imports: [AuthFormComponent, ReactiveFormsModule, CustomButtonComponent, ToastComponent, RouterLink],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css',
  providers: [ToastService]
})
export class SingInComponent {

  private readonly authsService = inject(AuthHttpService);
  private readonly localStoreService = inject(LocalStoreService);
  private readonly router = inject(Router);
  private readonly store = inject<Store<{ token: string }>>(Store);

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
  });

  isLoading = false;
  isDisable = false;


  constructor(private readonly toastService: ToastService) { }

  invalid(name: string) {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched
  }

  error(name: string, error: string) {
    return this.form.get(name)?.getError(error);
  }

  onSubmit() {

    if (this.form.valid) {

      this.isLoading = true;
      this.isDisable = true;

      this.authsService.singIn(this.form.value as InputsSingIn).subscribe({
        next: (value) => {
          const { token, refreshToken } = value;
          console.log(value);
          this.localStoreService.setTokens(token, refreshToken);
          this.store.dispatch(setTokens({ token, refreshToken }));
          this.router.navigate(['']);
        },
        error: (error) => {
          /* console.log(error.error.code_error) */
          this.isDisable = false;
          this.isLoading = false
          this.toastService.open({
            title: 'Error',
            paragraph: error.error.code_error,
            status: ToastStatus.ERROR,
            deration: 6000
          })
        },


      })

    } else {
      this.form.markAllAsTouched();
    }


  }
}
