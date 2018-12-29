import { Component, OnInit } from '@angular/core';
import { WordSelection } from '../../store/actions';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLanguage, selectWords, selectLetters, WordFinderState } from '../../store/model';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.less']
})
export class WordlistComponent implements OnInit {
  selectedWordForResettingTheList = null;

  words$: Observable<string[]>;

  private letters$: Observable<string>;
  private language$: Observable<string>;


  constructor(private store: Store<WordFinderState>) {
    this.words$ = store.pipe(select(selectWords));

    this.letters$ = store.pipe(select(selectLetters));
    this.letters$.subscribe({next: this.resetWordList.bind(this) });

    this.language$ = store.pipe(select(selectLanguage));
    this.language$.subscribe({next: this.resetWordList.bind(this) });
   }

  ngOnInit() {
  }

  wordSelection(value: string) {
    this.store.dispatch(new WordSelection(+value));
  }

  resetWordList() {
    this.selectedWordForResettingTheList = null;
  }
}
