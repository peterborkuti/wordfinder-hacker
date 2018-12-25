import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterinputComponent } from './letterinput/letterinput.component';

import { StoreModule } from '@ngrx/store';
import { wordFinderReducer } from '../store/reducers';


@NgModule({
  declarations: [
    AppComponent,
    LetterinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [StoreModule.forRoot({ wordfinder: wordFinderReducer })]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
