import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['name', 'title', 'DOB', 'picture', 'phone', 'gender', 'country'];
  dataSource = new MatTableDataSource(USER_DATA);

  constructor() { }

  ngOnInit() {
  }

}




const USER_DATA: User[] = [
	{
		"name": "Hailie Runte",
		"title": "Ms",
		"DOB": "June 3, 1991",
		"picture": "http://lorempixel.com/200/200/sports/1/",
		"phone": "+58 957 4893 1512",
		"gender": "male",
		"country": "Iceland"
	},
	{
		"name": "Hilton Lueilwitz",
		"title": "Dr",
		"DOB": "December 7, 2015",
		"picture": "http://lorempixel.com/200/200/sports/0/",
		"phone": "+00 172 8544 6776",
		"gender": "male",
		"country": "Latvia"
	},
	{
		"name": "Adonis Haley",
		"title": "Dr",
		"DOB": "January 20, 2017",
		"picture": "http://lorempixel.com/200/200/sports/1/",
		"phone": "+08 366 0744 2015",
		"gender": "female",
		"country": "Guam"
	},
	{
		"name": "Mr. Danika Herzog",
		"title": "Mr",
		"DOB": "September 18, 2016",
		"picture": "http://lorempixel.com/200/200/sports/7/",
		"phone": "+98 679 1827 7561",
		"gender": "female",
		"country": "Liberia"
	},
	{
		"name": "Kennith Braun",
		"title": "Mrs",
		"DOB": "September 22, 2016",
		"picture": "http://lorempixel.com/200/200/sports/3/",
		"phone": "+51 801 0227 8391",
		"gender": "female",
		"country": "Kyrgyz Republic"
	},
	{
		"name": "Mr. Carolina Cremin",
		"title": "Prof",
		"DOB": "February 14, 2017",
		"picture": "http://lorempixel.com/200/200/sports/2/",
		"phone": "+41 656 4165 7905",
		"gender": "female",
		"country": "Uganda"
	},
	{
		"name": "Miss Gus Tremblay",
		"title": "Miss",
		"DOB": "May 18, 2017",
		"picture": "http://lorempixel.com/200/200/sports/3/",
		"phone": "+34 335 3898 1927",
		"gender": "male",
		"country": "Barbados"
	},
	{
		"name": "Kamron Swaniawski",
		"title": "Prof",
		"DOB": "June 11, 2017",
		"picture": "http://lorempixel.com/200/200/sports/0/",
		"phone": "+97 491 8469 0150",
		"gender": "male",
		"country": "Reunion"
	},
	{
		"name": "Giovani Deckow",
		"title": "Mrs",
		"DOB": "June 23, 2016",
		"picture": "http://lorempixel.com/200/200/sports/3/",
		"phone": "+55 364 7701 9806",
		"gender": "male",
		"country": "Kuwait"
	},
	{
		"name": "Amir Graham",
		"title": "Prof",
		"DOB": "November 13, 2017",
		"picture": "http://lorempixel.com/200/200/sports/7/",
		"phone": "+28 219 1296 0386",
		"gender": "male",
		"country": "Isle of Man"
	}
];
