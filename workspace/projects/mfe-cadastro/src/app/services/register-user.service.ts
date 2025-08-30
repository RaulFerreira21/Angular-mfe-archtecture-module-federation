import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Users } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '../config/url.config';
import { ApiFeedback } from '../models/messages.enum';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private httpClient: HttpClient) { }

  public postUser(newUser: Users): Observable<string> {
   return this.httpClient.post(urlConfig.usersApi, newUser).pipe(
    map(() => ApiFeedback.SUCCESS),
    catchError(() => of(ApiFeedback.ERROR))
   )
  }
}
