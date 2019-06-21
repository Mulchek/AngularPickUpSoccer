import { Injectable } from '@angular/core';
import { Game } from '../models/game.model'
import { Comment } from '../models/comment.model'

@Injectable()
export class GamesService {

    games: Game[] = [
        { 
            id: 1, 
            time: new Date(2019, 6, 14, 12), 
            attendees: ["usera", "loggedInUser", "userc"], 
            location: 'Francis Park',
            comments: 
            [
                {
                    id: 1,
                    text: "this is a user comment",
                    userName: "usera",
                    dateCreated: new Date()
                },
                {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    userName: "userb",
                    dateCreated: new Date()
                }                
            ]
        },
        { 
            id: 2, 
            time: new Date(2019, 6, 14, 14), 
            attendees: ["usera", "userb", "userc"], 
            location: 'ABC University',
            comments: 
            [
                {
                    id: 1,
                    text: "this is a user comment",
                    userName: "usera",
                    dateCreated: new Date()
                },
                {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    userName: "userb",
                    dateCreated: new Date()
                }                
            ]
        },
        { 
            id: 3, 
            time: new Date(2019, 6, 14, 13), 
            attendees: ["usera", "userb", "userc"],  
            location: 'SLU',
            comments: 
            [
                {
                    id: 1,
                    text: "this is a user comment",
                    userName: "usera",
                    dateCreated: new Date()
                },
                {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    userName: "userb",
                    dateCreated: new Date()
                }                
            ]
        },
        { 
            id: 4, 
            time: new Date(2019, 6, 18, 11), 
            attendees: [], 
            location: 'Forest Park',
            comments: 
            [
                {
                    id: 1,
                    text: "this is a user comment",
                    userName: "usera",
                    dateCreated: new Date()
                },
                {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    userName: "userb",
                    dateCreated: new Date()
                }                
            ]
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

  updateGame(id: number, location: string, date: Date){
    let game = this.getGameById(id);
    game.location = location;
    game.time = date;
  }

  addUserToGame(id: number, userName: string){
    let game = this.getGameById(id);
    game.attendees.push(userName);
  }

  removeUserFromGame(id: number, userName: string){
    let game = this.getGameById(id);
    game.attendees = game.attendees.filter(a => a != userName);
  }

  getGameById(id: number) : Game {
      return this.games.find(g => g.id == id);
  }

  getMaxId() : number{
      return Math.max.apply(Math, this.games.map(function(o) { return o.id; }))
  }

  addComment(id: number, comment: Comment){
    let game = this.getGameById(id);
    game.comments.push(comment);
  }
}