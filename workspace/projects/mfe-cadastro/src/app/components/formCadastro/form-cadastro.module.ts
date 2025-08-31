import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterUserService } from '../../services/register-user.service';

import { FormCadastroRoutingModule } from './form-cadastro-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormCadastroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [RegisterUserService]
})
export class FormCadastroModule { }
