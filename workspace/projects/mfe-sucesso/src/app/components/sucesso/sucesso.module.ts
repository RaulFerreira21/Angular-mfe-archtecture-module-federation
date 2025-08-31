import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucessoRoutingModule } from './sucesso-routing.module';
import { RegistrationListComponent } from './registration-list/registration-list.component';

import { MatTableModule } from '@angular/material/table'
import { GetUsersService } from '../../services/get-users.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegistrationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SucessoRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
],
  providers: [GetUsersService]
})
export class SucessoModule { }
