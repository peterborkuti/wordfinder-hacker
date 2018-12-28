import { createSelector } from '@ngrx/store';

export const selectWordfinder = (state: any) => state.wordfinder;
export const selectWords = createSelector(selectWordfinder, (state: WordFinderState) => state.words);
export const selectLetters = createSelector(selectWordfinder, (state: WordFinderState) => state.letters);
export const selectChains = createSelector(selectWordfinder, (state: WordFinderState) => state.chains);

export class WordFinderState {
  constructor(
    readonly letters = '',
    readonly words: string[] = [],
    readonly chains: number[][] = [],
    readonly wordIndexToShow = -1) {}
}
