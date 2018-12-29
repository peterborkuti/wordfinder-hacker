import { Action } from '@ngrx/store';

export enum ActionTypes {
  LettersInput = '[Input Letters] LettersInput',
  WordSelection = '[Word Selector] Word Selection',
  LanguageSelection = '[Input Letters] Language Selection'
}

export class LettersInput implements Action {
  readonly type = ActionTypes.LettersInput;
  readonly payload: { letters: string };

  constructor(letters: string) {
    this.payload = { 'letters': letters };
  }
}

export class WordSelection implements Action {
  readonly type = ActionTypes.WordSelection;
  readonly payload: { wordIndex: number };

  constructor(wordIndex: number) {
    this.payload = { 'wordIndex': wordIndex };
  }
}

export class LanguageSelection implements Action {
  readonly type = ActionTypes.LanguageSelection;
  readonly payload: { languageCode: string };

  constructor(languageCode: string) {
    this.payload = { 'languageCode': languageCode };
  }
}

export type ActionsUnion = LettersInput | WordSelection | LanguageSelection;
