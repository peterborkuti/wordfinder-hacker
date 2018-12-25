import { WordFinderState } from './model';
import { findWords } from '../core/process';
import { Action } from '@ngrx/store';
import * as Actions from './actions';
import { ActionsUnion, ActionTypes, LettersInput, WordSelection } from './actions';

export function wordFinderReducer(
    state = new WordFinderState(),
    action: Actions.ActionsUnion): WordFinderState {
  let newState: WordFinderState;

  switch (action.type) {
    case Actions.ActionTypes.LettersInput:
        newState =
          new WordFinderState(
            action.payload.letters,
            findWords(action.payload.letters, 3, 3)
          );
        return newState;

    case Actions.ActionTypes.WordSelection:
        newState =
            new WordFinderState(
              state.letters,
              state.words,
              action.payload.wordIndex
            );
        return newState;

    default:
        return state;
    }
}
