  game = {
    tileSize: 64,
    numTiles: 9,
    uiWidth: 4,
  };
  spritesheet = new Image()
  spritesheet.src = 'assets/spritesheet.png'

  setupCanvas();
  generateLevel();
  let {x, y} = getRandomPassableTile();

  document.querySelector('html').onkeypress = e => {
      switch (e.key) {
        case 'w':
            y--;
            break;
        case 's':
            y++;
            break;
        case 'a':
            x--;
            break;
        case 'd':
            x++;
            break;
        default:
            return;
      }
  }

  function drawSprite(sprite, x, y) {
      ctx.drawImage(spritesheet, sprite * 16, 0, 16, 16, x * game.tileSize, y * game.tileSize, game.tileSize, game.tileSize);
  }

  const draw = () => {
      ctx.clearRect(0, 0, 1000, 1000);

      for (let i = 0; i < game.numTiles; i++) {
        for (let j = 0; j < game.numTiles; j++) {
          getTile(i, j).draw();
        }
      }

      drawSprite(SPRITE.DINOSAUR_ALIVE, x, y);
  };

  setInterval(draw, 15);
