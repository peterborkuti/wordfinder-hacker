import { Component, OnInit } from '@angular/core';

import { WordFinderState, selectLetters, selectChain } from '../../store/model';
import { Tile, createTiles, colorTiles } from '../../core/tiles';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.less']
})
export class WordComponent implements OnInit {
  cols = 3;

  chain$: Observable<number[]>;

  letters$: Observable<string>;

  tiles: Tile[] = createTiles('', [], this.cols * this.cols);

  constructor(private store: Store<WordFinderState>) {
    this.chain$ = store.pipe(select(selectChain));
    this.chain$.subscribe({next: (chain) => this.tiles = colorTiles(chain, this.tiles) });

    this.letters$ = store.pipe(select(selectLetters));
    this.letters$.subscribe({next: (letters) => this.tiles = createTiles(letters) });
  }

  ngOnInit() {
  }

}
