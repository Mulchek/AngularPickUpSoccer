import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PickUpSoccer';
  userName: string;

    constructor(private userService: UserService){ }

    ngOnInit(){
        this.userName = this.userService.getCurrentUserName();
    }
}
