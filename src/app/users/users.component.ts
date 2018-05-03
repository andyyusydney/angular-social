import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { IUser } from '../user.interface';
import { UserService } from '../services/user.service';
const NUM_OF_USERS_TO_LOAD = 5;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['name', 'title', 'DOB', 'picture', 'phone', 'gender', 'country'];
  users: IUser[] = [];
  dataSource = new MatTableDataSource([]);
  numOfUsersToLoad = NUM_OF_USERS_TO_LOAD;
  
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'DOB': return new Date(item.DOB);
        default: return item[property];
      }
    };
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers(this.numOfUsersToLoad);
  }

  getUsers(numOfUsers: number): void {
    this.userService.getUsers(numOfUsers)
      .subscribe(loadedUsers => {
        this.users.push(...loadedUsers); 
        this.dataSource.data = this.users;
      })
  }

}