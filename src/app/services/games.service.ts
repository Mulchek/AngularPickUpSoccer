import { Injectable } from '@angular/core';
import { Game } from '../models/game.model'

@Injectable()
export class GamesService {

    games: Game[] = [
        { 
            id: 1, 
            time: new Date(2019, 6, 14, 12), 
            attendees: ["usera", "loggedInUser", "userc"], 
            location: 'Francis Park', 
            lat: 38.587467,
            long: -90.303256
        },
        { 
            id: 2, 
            time: new Date(2019, 6, 14, 14), 
            attendees: ["usera", "userb", "userc"], 
            location: 'ABC University', 
            lat: 38.587467,
            long: -90.303256
        },
        { 
            id: 3, 
            time: new Date(2019, 6, 14, 13), 
            attendees: ["usera", "userb", "userc"],  
            location: 'SLU', 
            lat: 38.587467,
            long: -90.303256
        },
        { 
            id: 4, 
            time: new Date(2019, 6, 18, 11), 
            attendees: [], 
            location: 'Forest Park', 
            lat: 38.587467,
            long: -90.303256
        },
    ];

  constructor() { }



  getGames() : Game[] {
    return this.games;
  }

  deleteGame(id: number){
      let index = this.games.findIndex(g => g.id == id);
      this.games.splice(index, 1);
  }

  addGame(game: Game){
    this.games.push(game);
  }

}