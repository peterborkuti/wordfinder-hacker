import { WordFinderState } from './model';
import { findWords } from '../core/process';
import { ActionsUnion, ActionTypes, LettersInput, WordSelection, LanguageSelection } from './actions';

function lettersOrLanguageChanged(letters: string, state: WordFinderState, languageCode: string): WordFinderState {
  const [words, chains] = findWords(letters, 3, 3, languageCode);

  const newState =
    new WordFinderState(
      letters,
      words,
      chains,
      -1,
      languageCode
    );

  return newState;
}

export function wordFinderReducer(
    state = new WordFinderState(),
    action: ActionsUnion): WordFinderState {

  switch (action.type) {
    case ActionTypes.LettersInput:
        return lettersOrLanguageChanged(action.payload.letters, state, state.languageCode);

    case ActionTypes.LanguageSelection:
        return lettersOrLanguageChanged(state.letters, state, action.payload.languageCode);

    case ActionTypes.WordSelection:
        return state.setWordIndex(action.payload.wordIndex);

    default:
        return state;
    }
}
