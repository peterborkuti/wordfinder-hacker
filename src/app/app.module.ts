import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterinputComponent } from './letterinput/letterinput.component';

import { StoreModule } from '@ngrx/store';
import { wordFinderReducer } from '../store/reducers';
import { WordlistComponent } from './wordlist/wordlist.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    LetterinputComponent,
    WordlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [StoreModule.forRoot({ wordfinder: wordFinderReducer })],
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
