import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'add-game',
  templateUrl: './add-game.component.html',
  styles: [`
    .mat-form-field {
        min-width: 300px;
    }
    .timeInput {
        width: 10%;
        height: 65px;
        cursor: pointer;
        margin-left: 10px;
    }
  `]
})
export class AddGame implements OnInit{

    newGameForm: FormGroup;

    constructor(private gameService: GamesService, private router: Router, private userService: UserService){}

    ngOnInit(){
        this.newGameForm = new FormGroup({
            location: new FormControl('', Validators.required),
            date: new FormControl(new Date(), Validators.required),
            time: new FormControl('12:00 pm', Validators.required)
        });
    }

    onSubmit(){
        if (this.newGameForm.valid){
            let newGame = this.convertFormDataToGame();
            this.addGame(newGame);
            this.router.navigate(['/games'])
        }
    }

    convertFormDataToGame(): Game{
        var formResult = this.newGameForm.value;

        let id = this.gameService.getMaxId() + 1;
        let userName = this.userService.getCurrentUserName();

        let newGame: Game = { 
            id: id, 
            time: formResult.date, 
            attendees: [userName], 
            location: formResult.location,
            comments: []
        }
        
        let time: string = formResult.time;
        let hours = +time.substr(0, time.indexOf(":"));
        let zone = time.substr(time.length-2);
        if (zone == "pm" && hours != 12){
            hours = hours + 12;
        }
        newGame.time.setHours(hours);

        let minutes = +time.substr(time.indexOf(":")+1, 2);
        newGame.time.setMinutes(minutes);

        return newGame;
    }

    addGame(newGame: Game){
        this.gameService.addGame(newGame);
    }

    cancel(){
        this.router.navigate(['/games'])
    }
}
