import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { WordFinderState } from '../../store/model';
import { LettersInput, LanguageSelection } from '../../store/actions';

import {Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-letterinput',
  templateUrl: './letterinput.component.html',
  styleUrls: ['./letterinput.component.less']
})
export class LetterinputComponent implements OnInit {

  languageCode = 'hu';
  languages = [{name: 'English', code: 'en'}, {name: 'Hungarian', code: 'hu'}];

  lettersInputControl =
    new FormControl(
          null,
          Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])
        );

  constructor(private store: Store<WordFinderState>) {}

  lettersChange(inputValue: string) {
      this.store.dispatch(new LettersInput((inputValue.length === 9) ? inputValue : ''));
  }

  languageChange(languageCode: string) {
    this.store.dispatch(new LanguageSelection(languageCode || 'hu'));
  }

  ngOnInit() {
  }

}
