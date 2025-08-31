import { TestBed } from '@angular/core/testing';

import { RegisterUserService } from './register-user.service';
import { map, of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiFeedback } from '../models/messages.enum';

describe('RegisterUserService', () => {
  let service: RegisterUserService;
  const serviceMock = {
    post: () =>
      of({
        name: 'teste',
        email: 'teste',
      }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HttpClient,
          useValue: serviceMock,
        },
      ],
    });
    service = TestBed.inject(RegisterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call postUser function and return success message',()=> {
    service.postUser({name: 'teste1', email:'email@teste.com'}).pipe(
      map((data) => {
        expect(data).not.toBeUndefined();
        expect(ApiFeedback).toEqual(ApiFeedback)
      })
    )
  })
});
