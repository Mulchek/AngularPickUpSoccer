import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesList implements OnInit {

    games: Game[] = [];
    sortBy: string = "Date";
    newGame: Game;

    @ViewChild('addGameModal', {static: true}) closeModal: ElementRef

    constructor(private gameService: GamesService){}

    ngOnInit(){
        this.games = this.gameService.getGames();
        this.createNewGame();
        this.sortData();
    }

    createNewGame(){
        this.newGame = {
            id: 5, 
            time: new Date(2019, 6, 18, 11), 
            attendees: ["loggedInUser"], 
            location: 'Washington University', 
            lat: 38.587467,
            long: -90.303256

        };
    }

    setSortBy(value: string){
        this.sortBy = value;
        this.sortData();
    }

    sortData(){
        if (this.sortBy == "Location"){
            this.games = this.games.sort(function(a: Game, b: Game){
                if (a.location < b.location) { return -1; }
                if (a.location > b.location) { return 1; }
                return 0;
            });
        }
        if (this.sortBy == "Date"){
            this.games = this.games.sort(function(a: Game, b: Game){
                if (a.time < b.time) { return -1; }
                if (a.time > b.time) { return 1; }
                return 0;
            });            
        }
    }

    deleteGame(id: number) {
        this.gameService.deleteGame(id);
    }

    addGame(){
        this.gameService.addGame(this.newGame);
        this.createNewGame();
        this.closeAddGameModal();
    }

    closeAddGameModal(){
        this.closeModal.nativeElement.click();
    }
}
