import { Component, OnInit } from '@angular/core';

import { WordFinderState } from '../../store/model';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map,  } from 'rxjs/operators';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.less']
})
export class WordComponent implements OnInit {
  wordfinder$: Observable<WordFinderState>;

  constructor(private store: Store<WordFinderState>) {
    this.wordfinder$ =
      store.pipe(
        select('wordfinder'),
        map(o => (o.wordIndexToShow > -1) ? o.words[o.wordIndexToShow] : ''));
  }

  ngOnInit() {
  }

}
