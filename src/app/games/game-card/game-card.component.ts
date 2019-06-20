import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../models/game.model';
import { ConfirmationService } from 'primeng/api';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styles: [`
  .mat-expansion-panel-body{
    background-color: #fafafa !important;      
  }
  `]
})
export class GameCard{

    @Input() game: Game;
    @Input() index: number;
    @Output() deleteGameEvent = new EventEmitter<number>();
    showDeleteGameConfirmation: boolean;
    toggleContent: boolean;
    userName: string = "loggedInUser"

    constructor(private confirmationService: ConfirmationService, private gamesService: GamesService){ }

    isUserAttending() : boolean {
        return this.game.attendees.some(a => a == this.userName);
    }

    addUser(){
        this.gamesService.addUserToGame(this.game.id, this.userName);
    }

    removeUser(){
        this.gamesService.removeUserFromGame(this.game.id, this.userName);
    }

    deleteGameClick(index){

        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this game?',
            key:index,
            accept: () => {
                this.deleteGame();
            }
        });
    }

    deleteGame(){
        this.deleteGameEvent.emit(this.game.id);
    }

}
