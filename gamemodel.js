class GameModel {
  constructor(ctx) {
    this.ctx = ctx;
    this.fallingPiece = null;
    this.grid = this.makeStartingGrid();
  }

  makeStartingGrid() {
    let grid = [];
    for (let i = 0; i < ROWS; i++) {
      grid.push([]); //
      for (let j = 0; i < COLS; j++) {
        grid[grid.length - 1].push(0);
      }
    }
    return grid;
  }
}
