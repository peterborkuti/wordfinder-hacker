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
  chainfinder$: Observable<WordFinderState>;

  constructor(private store: Store<WordFinderState>) {
    this.chainfinder$ =
      store.pipe(
        select('wordfinder'),
        map(o => (o.wordIndexToShow > -1) ? o.chains[o.wordIndexToShow] : []));
  }

  ngOnInit() {
  }

}
