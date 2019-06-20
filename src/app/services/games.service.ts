import { Injectable } from '@angular/core';
import { Game } from '../models/game.model'

@Injectable()
export class GamesService {

    games: Game[] = [
        { 
            id: 1, 
            time: new Date(2019, 6, 14, 12), 
            attendees: ["usera", "loggedInUser", "userc"], 
            location: 'Francis Park'
        },
        { 
            id: 2, 
            time: new Date(2019, 6, 14, 14), 
            attendees: ["usera", "userb", "userc"], 
            location: 'ABC University'
        },
        { 
            id: 3, 
            time: new Date(2019, 6, 14, 13), 
            attendees: ["usera", "userb", "userc"],  
            location: 'SLU'
        },
        { 
            id: 4, 
            time: new Date(2019, 6, 18, 11), 
            attendees: [], 
            location: 'Forest Park'
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

  addUserToGame(id: number, userName: string){
    let game = this.games.find(g => g.id == id);
    game.attendees.push(userName);
  }

  removeUserFromGame(id: number, userName: string){
    let game = this.games.find(g => g.id == id);
    game.attendees = game.attendees.filter(a => a != userName);
  }

  getMaxId() : number{
      return Math.max.apply(Math, this.games.map(function(o) { return o.id; }))
  }

}