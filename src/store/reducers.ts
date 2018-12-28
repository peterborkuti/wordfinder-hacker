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
        const [words, chains] = findWords(action.payload.letters, 3, 3);
        newState =
          new WordFinderState(
            action.payload.letters,
            words,
            chains
          );
        return newState;

    case Actions.ActionTypes.WordSelection:
        newState =
            new WordFinderState(
              state.letters,
              state.words,
              state.chains,
              action.payload.wordIndex
            );
        return newState;

    default:
        return state;
    }
}
