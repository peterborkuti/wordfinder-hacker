export class Tile {
  readonly cols = 1;
  readonly rows = 1;

  constructor(readonly text = '', readonly color = getColor(-1)) {}

  setColor(index = -1) {
    return new Tile(this.text, getColor(index));
  }
}

function getColor(index = -1): string {
  return (index !== -1) ? 'blue' : 'lightBlue';
}

export function createTiles(text = '', chain: number[] = [], size = 9): Tile[] {
  if (!text) { text = ' '.repeat(size); }

  return new Array(size).fill(0).
    map((x, i) => new Tile(text[i], getColor(chain.indexOf(i))));
}

export function colorTiles(chain: number[] = [], tiles: Tile[]): Tile[] {
  return tiles.map((t, i) => t.setColor(chain.indexOf(i)));
}
