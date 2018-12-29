import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterinputComponent } from './letterinput/letterinput.component';

import { StoreModule } from '@ngrx/store';
import { wordFinderReducer } from '../store/reducers';
import { WordlistComponent } from './wordlist/wordlist.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WordComponent } from './word/word.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LetterinputComponent,
    WordlistComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [StoreModule.forRoot({ wordfinder: wordFinderReducer })],
    StoreDevtoolsModule.instrument(),
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
