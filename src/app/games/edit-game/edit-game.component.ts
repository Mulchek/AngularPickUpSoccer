import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'edit-game',
  templateUrl: './edit-game.component.html',
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
export class EditGame implements OnInit{

    gameId: number;
    game: Game;
    currentGameTime: string;
    editGameForm: FormGroup;

    constructor(private gameService: GamesService, private router: Router, private route:ActivatedRoute, private userService: UserService){}

    ngOnInit(){
        this.gameId = +this.route.snapshot.paramMap.get('gameId');
        this.game = this.gameService.getGameById(this.gameId);

        this.setCurrentGameTime();

        this.editGameForm = new FormGroup({
            location: new FormControl(this.game.location, Validators.required),
            date: new FormControl(this.game.time, Validators.required),
            time: new FormControl(this.currentGameTime, Validators.required)
        });
    }

    setCurrentGameTime() {
        let zone = "am";

        let hours = this.game.time.getHours();

        if (hours > 12){
            zone = "pm";
            hours = hours - 12;
        }

        let minutes = ("0" + this.game.time.getMinutes()).slice(-2);
        
        this.currentGameTime = hours + ":" + minutes + " " + zone;
    }

    onSubmit(){
        if (this.editGameForm.valid){
            let date = this.getFormDate();
            this.editGame(this.editGameForm.value.location, date);
            this.router.navigate(['/games'])
        }
    }

    getFormDate(): Date{
        var formResult = this.editGameForm.value;

        let date = formResult.date;
        let time: string = formResult.time;

        let hours = +time.substr(0, time.indexOf(":"));
        let zone = time.substr(time.length-2);
        if (zone == "pm" && hours != 12){
            hours = hours + 12;
        }
        date.setHours(hours);

        let minutes = +time.substr(time.indexOf(":")+1, 2);
        date.setMinutes(minutes);

        return date;
    }

    editGame(location: string, date: Date){
        this.gameService.updateGame(this.gameId, location, date);
    }

    cancel(){
        this.router.navigate(['/games'])
    }
}
