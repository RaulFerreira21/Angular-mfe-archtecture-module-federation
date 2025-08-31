import { TestBed } from '@angular/core/testing';

import { GetUsersService } from './get-users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('GetUsersService', () => {
  let service: GetUsersService;
  const serviceMock = {
    get: () => of({
      users: [
        {id: 1, name:'teste', email: 'teste@email.com'}
      ]
    })
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{
        provide: HttpClient, useValue: serviceMock
      }]
    });
    service = TestBed.inject(GetUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUsers function and return a list of users', ()=> {
    service.getUsers().subscribe((data) => {
      expect(data.users).not.toBeUndefined();
    })
  })
});
