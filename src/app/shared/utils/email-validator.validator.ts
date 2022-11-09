import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function emailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {email: {value: control.value}} : null;
  };
}
