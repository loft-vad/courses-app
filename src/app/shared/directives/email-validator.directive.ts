import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { emailValidator } from '../utils/email-validator.validator';

@Directive({
  selector: "[emailValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
     }
  ]
})

export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)(control);
  }
}
