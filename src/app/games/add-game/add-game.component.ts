import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'add-game',
  templateUrl: './add-game.component.html',
  styles: [`
    .mat-form-field {
        min-width: 300px;
    }
    .timeInput {
        width: 30%;
        height: 65px;
        cursor: pointer;
        margin-left: 10px;
    }
  `]
})
export class AddGame implements OnInit{

    newGameForm: FormGroup;

    constructor(private gameService: GamesService, private router: Router){}

    ngOnInit(){
        this.newGameForm = new FormGroup({
            location: new FormControl(''),
            date: new FormControl(''),
            time: new FormControl('')
        });

        this.newGameForm.controls.date.setValue(new Date());
        this.newGameForm.controls.time.setValue("12:00 pm");
    }

    onSubmit(){
        let newGame = this.convertFormDataToGame();
        this.addGame(newGame);
        this.router.navigate(['/games'])
    }

    convertFormDataToGame(): Game{
        var formResult = this.newGameForm.value;

        let id = this.gameService.getMaxId() + 1;

        let newGame: Game = { 
            id: id, 
            time: formResult.date, 
            attendees: ["loggedInUser"], 
            location: formResult.location
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
