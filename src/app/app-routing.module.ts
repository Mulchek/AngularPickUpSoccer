import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesList } from './games/games-list/games-list.component';
import { AddGame } from './games/add-game/add-game.component';
import { EditGame } from './games/edit-game/edit-game.component';

const routes: Routes = [
  { path: 'games', component: GamesList },
  { path: 'add-game', component: AddGame },
  { path: 'edit-game/:gameId', component: EditGame },
  { path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
