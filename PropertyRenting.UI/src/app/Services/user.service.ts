import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User) {
    let users = [];
    let storedUsers = localStorage.getItem('Users');
    if (storedUsers) {
      users = JSON.parse(storedUsers);
      users = [...users, user];
    }
    else {

      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
