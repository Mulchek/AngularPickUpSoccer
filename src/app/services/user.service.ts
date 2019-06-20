import { Injectable } from '@angular/core';
import { User } from '../models/user.model'

@Injectable()
export class UserService {
  
    currentUser: User;

    constructor() {
        this.currentUser = {
            id: "1",
            userName: "loggedInUser"
        }
     }

     getCurrentUserName(): string {
         return this.currentUser.userName;
     }
}