import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchValues(controlName: string): ValidatorFn {
  return (control: AbstractControl) => {
    return control?.value === control?.parent?.get(controlName)?.value
      ? null
      : { match: true };
  };
}
