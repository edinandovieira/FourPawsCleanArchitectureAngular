import { UserService } from './../../../../../data/sys/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  title = "Consultar Usuários"
  user: any;

  constructor(
    private userService: UserService
  ){

  }

  ngOnInit(){
    this.userService.GetAll()
      .subscribe(
        (response) => {
          this.user = response;
        }
      )
  }
}
