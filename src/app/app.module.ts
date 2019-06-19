import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GamesList } from './games/games-list/games-list.component';
import { GameCard } from './games/game-card/game-card.component';

import { ConfirmDialog } from './common/confirm-dialog/confirm-dialog.component';

import { GamesService } from './services/games.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatChipsModule, MatBadgeModule, MatExpansionModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GamesList,
    GameCard,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatExpansionModule, MatToolbarModule, MatCardModule, MatChipsModule, MatBadgeModule
  ],
  providers: [
      GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
