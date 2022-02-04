function setupCanvas() {
  const canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = game.tileSize * (game.numTiles + game.uiWidth);
  canvas.height = game.tileSize * game.numTiles;
}

