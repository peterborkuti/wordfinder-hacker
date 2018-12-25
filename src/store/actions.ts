import { Action } from '@ngrx/store';

export enum ActionTypes {
  LettersInput = '[Input Letters] LettersInput',
  WordSelection = '[Word Selector] Word Selection'
}

export class LettersInput implements Action {
  readonly type = ActionTypes.LettersInput;

  constructor(public payload: { letters: string }) {}
}

export class WordSelection implements Action {
  readonly type = ActionTypes.WordSelection;

  constructor(public payload: { wordIndex: number }) {}
}

export type ActionsUnion = LettersInput | WordSelection;
