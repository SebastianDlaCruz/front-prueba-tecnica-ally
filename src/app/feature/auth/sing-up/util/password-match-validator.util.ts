import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {

  const password = formGroup.get('password')?.value as string;
  const confirmPassword = formGroup.get('confirmPassword')?.value;


  if (password === confirmPassword) return null;
  return { passwordMatch: true };

};
