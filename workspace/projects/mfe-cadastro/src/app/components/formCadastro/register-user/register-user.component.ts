import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from '../../../services/register-user.service';
import { Users } from '../../../models/user.interface';
import { ApiFeedback } from '../../../models/messages.enum';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  public userForm!: FormGroup;
  public successOrErrorMessage = '';
  public feedBackMessage = ApiFeedback;
  public showMessage: boolean = false;

  constructor(
    private registerUserService: RegisterUserService,
    private fb: FormBuilder
  ){
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(): void {
    const newUser: Users = this.userForm.value;
    this.registerUserService.postUser(newUser).subscribe((data) => {
      this.successOrErrorMessage = data;
      this.showMessage = true;
      setInterval(() => {
        this.showMessage = false;
      },2500)
      this.userForm.reset();
    })
  }
}
