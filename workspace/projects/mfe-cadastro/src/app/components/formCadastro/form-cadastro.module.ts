import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCadastroRoutingModule } from './form-cadastro-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    FormCadastroRoutingModule
  ]
})
export class FormCadastroModule { }
