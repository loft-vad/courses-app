import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent, HeaderComponent, InfoComponent, ModalComponent, SearchComponent } from './components/index';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EmailValidatorDirective } from './directives/email-validator.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FormatDatePipe } from './pipes/formatDate.pipe';

const COMPONENTS = [ButtonComponent, HeaderComponent, InfoComponent, ModalComponent, SearchComponent, EmailValidatorDirective, DurationPipe, FormatDatePipe];
// or using spread

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: COMPONENTS
})
export class SharedModule { }
