import { Component, OnInit } from '@angular/core';
import { WordFinderState } from '../../store/model';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.less']
})
export class WordlistComponent implements OnInit {
  wordfinder$: Observable<WordFinderState>;

  constructor(private store: Store<WordFinderState>) {
    this.wordfinder$ = store.pipe(select('wordfinder'), map(o => o.words));
  }

  ngOnInit() {
  }

}
