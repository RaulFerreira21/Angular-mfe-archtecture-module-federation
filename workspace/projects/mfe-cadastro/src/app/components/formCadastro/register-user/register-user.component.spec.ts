import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserComponent } from './register-user.component';
import { RegisterUserService } from '../../../services/register-user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ApiFeedback } from '../../../models/messages.enum';

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ RegisterUserComponent ],
      providers: [
        {provide: HttpClient},
        RegisterUserService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit function and return a success message', ()=>{
    const service = TestBed.inject(RegisterUserService);
    const spy = spyOn(service, 'postUser').and.returnValue(of(ApiFeedback.SUCCESS))
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
    expect(component.successOrErrorMessage).toEqual(ApiFeedback.SUCCESS);
  })
});
