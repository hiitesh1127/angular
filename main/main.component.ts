import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users : User[] = []
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() : void {
    this.userService.getUsers().subscribe(
      (res) =>
        this.users = res,
      (err : any) => console.log(err),
      () => console.log(this.users)
    )
  }



}
