import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  user : User;
  constructor(
    private userService:UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
  this.getUsersObservable(); 
  }

  getUser(): User[] { return this.userService.getUsers();}
  getUsersObservable(): void{
    this.userService
    .getUserObservable()
    .subscribe(users => this.users = users);
  }

  onSelect(id:number):void{
    this.router.navigate(['/user/' +id]);
  }
}