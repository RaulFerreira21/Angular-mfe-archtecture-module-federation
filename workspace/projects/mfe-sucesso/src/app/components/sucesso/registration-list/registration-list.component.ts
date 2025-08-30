import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../../services/get-users.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {

  constructor(private getUsersService: GetUsersService){

  }

  public displayedColumns:string[] = ['name', 'email'];
  public dataUsers = []
  
  ngOnInit(): void {
   this.getUsersService.getUsers().subscribe((data)=>{
    this.dataUsers = data;
   })
  }

}
