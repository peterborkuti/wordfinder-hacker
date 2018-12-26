import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { WordFinderState } from '../../store/model';
import { LettersInput } from '../../store/actions';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-letterinput',
  templateUrl: './letterinput.component.html',
  styleUrls: ['./letterinput.component.less']
})
export class LetterinputComponent implements OnInit {
  lettersForm = this.fb.group({
    lettersInput: [null, Validators.compose([
      Validators.required, Validators.minLength(9), Validators.maxLength(9)])
    ]
  });

  _letters = '';

  constructor(private store: Store<WordFinderState>, private fb: FormBuilder) {}

  @Input()
  public set letters(val: string) {
    this._letters = val;
    if (val.length === 9) {
      this.store.dispatch(new LettersInput({letters: val}));
    }
  }

  public get letters(): string {
    return this._letters;
  }

  ngOnInit() {
  }

}
