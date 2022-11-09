import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent, HeaderComponent, InfoComponent, ModalComponent } from './components/index';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [ButtonComponent, HeaderComponent, InfoComponent, ModalComponent];
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
