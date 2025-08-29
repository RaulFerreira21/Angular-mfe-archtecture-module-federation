import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucessoRoutingModule } from './sucesso-routing.module';
import { RegistrationListComponent } from './registration-list/registration-list.component';


@NgModule({
  declarations: [
    RegistrationListComponent
  ],
  imports: [
    CommonModule,
    SucessoRoutingModule
  ]
})
export class SucessoModule { }
