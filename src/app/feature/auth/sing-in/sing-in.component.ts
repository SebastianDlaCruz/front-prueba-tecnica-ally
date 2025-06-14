import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthHttpService } from '@core/http';
import { InputsSingIn } from '@core/models';
import { setToken } from '@core/store/actions/token.action';
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
  private readonly store = inject<Store<{ token: string }>>(Store);

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  isLoading = false;
  isDisable = false;


  constructor(private readonly toastService: ToastService) { }

  invalid(name: string) {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched
  }


  onSubmit() {

    if (this.form.valid) {

      this.isLoading = true;
      this.isDisable = true;

      this.authsService.singIn(this.form.value as InputsSingIn).subscribe({
        next: (value) => {
          const { token } = value;
          this.store.dispatch(setToken({ token }))
        },
        error: (error) => {

          this.toastService.open({
            title: 'Error',
            paragraph: 'al iniciar session',
            status: ToastStatus.ERROR,
            deration: 6000
          })
        },
        complete: () => {
          this.isDisable = false;
          this.isLoading = false
        }

      })

    } else {
      this.form.markAllAsTouched();
    }


  }
}
