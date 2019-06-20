import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GamesList } from './games/games-list/games-list.component';
import { GameCard } from './games/game-card/game-card.component';
import { AddGame } from './games/add-game/add-game.component';

import { GamesService } from './services/games.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatChipsModule, MatBadgeModule, MatExpansionModule, 
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    GamesList,
    GameCard,
    AddGame
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatExpansionModule, MatToolbarModule, MatCardModule, MatChipsModule, MatBadgeModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule,
    NgxMaterialTimepickerModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  providers: [
      GamesService,
      ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
