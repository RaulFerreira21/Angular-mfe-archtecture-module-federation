import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationListComponent } from './registration-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetUsersService } from '../../../services/get-users.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegistrationListComponent', () => {
  let component: RegistrationListComponent;
  let fixture: ComponentFixture<RegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
        provide: HttpClient
      },
      GetUsersService,
    ],
      declarations: [ RegistrationListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
