import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesList } from './games/games-list/games-list.component';

const routes: Routes = [
  { path: 'games', component: GamesList },
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
