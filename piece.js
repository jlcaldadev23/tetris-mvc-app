class Piece {
  constructor(shape, ctx) {
    this.shape = shape;
    this.ctx = ctx;
    this.y = 0;
    this.x = Math.floor(COLS / 2);
  }
  //   [0, 7, 0],
  //   [7, 7, 7],
  //   [0, 0, 0],

  renderPiece() {
    this.shape.map();
  }
}
