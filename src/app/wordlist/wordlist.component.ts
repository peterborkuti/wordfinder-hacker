import { Component, OnInit } from '@angular/core';
import * as Model from '../../store/model';
import { WordSelection } from '../../store/actions';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.less']
})
export class WordlistComponent implements OnInit {
  selectedWordForResettingTheList = null;

  words$: Observable<string[]>;

  private letters$: Observable<string>;

  constructor(private store: Store<Model.WordFinderState>) {
    this.words$ = store.pipe(select(Model.selectWords));
    this.letters$ = store.pipe(select(Model.selectLetters));
    this.letters$.subscribe({next: this.resetWordList.bind(this) });
   }

  ngOnInit() {
  }

  wordSelection(value: string) {
    this.store.dispatch(new WordSelection({wordIndex: +value}));
  }

  resetWordList() {
    this.selectedWordForResettingTheList = null;
  }
}
