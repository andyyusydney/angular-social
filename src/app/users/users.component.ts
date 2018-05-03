import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IUser } from '../user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['name', 'title', 'DOB', 'picture', 'phone', 'gender', 'country'];
  users: IUser[] = [];
  dataSource = new MatTableDataSource([]);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(5)
      .subscribe(loadedUsers => {
        this.users.push(...loadedUsers); 
        this.dataSource.data = this.users;
      })
  }

}