import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../models/user.interface';
import { urlConfig } from '../../config/url.config';
import { map, Observable, Subscribable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private httpClient:HttpClient) { }

  public getUsers(): Observable<any> {
    return new Observable<any>((observer: Subscriber<any>) => {
      this.httpClient.get(urlConfig.usersApi).subscribe((response) => {
        console.log(response);
        observer.next(response);
        observer.complete();
      })
    })
  }
}
