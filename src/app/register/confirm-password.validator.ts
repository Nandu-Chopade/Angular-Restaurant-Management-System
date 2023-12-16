import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password1 = control.get('password1')?.value;
  const password2 = control.get('password2')?.value;

  return password1 === password2 ? null : { PasswordNoMatch: true };
};
