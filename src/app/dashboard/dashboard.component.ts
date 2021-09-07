import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.userService
      .getUserObservable()
      .subscribe((users) => (this.users = users));
  }
}
