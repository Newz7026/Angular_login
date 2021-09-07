import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './user-data';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;
  constructor() {}
  getUsers(): User[] {return USERS;}
  getUserObservable(): Observable<User[]> {
    return of(USERS);
  }
  getUserobservable(id:Number): Observable<User>{
    return of(USERS.find(u => u.id===id))
  }
  getUser(id: number): Observable<User | undefined> {
    return of(USERS.find(user => user.id === id));
   }
}
