import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html'
})
export class GameCard{

    @Input() game: Game;
    @Input() index: number;
    @Output() deleteGameEvent = new EventEmitter<number>();
    showDeleteGameConfirmation: boolean;
    toggleContent: boolean;
    userName: string = "loggedInUser"

    isUserAttending() : boolean {
        return this.game.attendees.some(a => a == this.userName);
    }

    addUser(){
        this.game.attendees.push(this.userName);
    }

    removeUser(){
        this.game.attendees = this.game.attendees.filter(a => a != this.userName);
    }

    deleteGameClick(){
        this.showDeleteGameConfirmation = true;
    }

    deleteGameConfirmClose(){
        this.showDeleteGameConfirmation = false;
    }

    deleteGame(){
        this.deleteGameEvent.emit(this.game.id);
    }

}
