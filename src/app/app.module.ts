import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GamesList } from './games/games-list/games-list.component';
import { GameCard } from './games/game-card/game-card.component';
import { AddGame } from './games/add-game/add-game.component';
import { GameComments } from './games/game-comments/game-comments.component';

import { GamesService } from './services/games.service';
import { UserService } from './services/user.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatChipsModule, MatBadgeModule, MatExpansionModule, 
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatMenuModule } from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    GamesList,
    GameCard,
    AddGame,
    GameComments
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatExpansionModule, MatToolbarModule, MatCardModule, MatChipsModule, MatBadgeModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatMenuModule,
    NgxMaterialTimepickerModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  providers: [
      GamesService,
      ConfirmationService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
