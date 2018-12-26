import { Component, OnInit } from '@angular/core';
import { WordFinderState } from '../../store/model';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.less']
})
export class WordlistComponent implements OnInit {
  wordlistForm = this.fb.group({
    wordList: [null, Validators.required],
  });

  wordfinder$: Observable<WordFinderState>;

  constructor(private store: Store<WordFinderState>, private fb: FormBuilder) {
    this.wordfinder$ = store.pipe(select('wordfinder'), map(o => o.words));
  }

  ngOnInit() {
  }

}
