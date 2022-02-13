let tiles = [];

function inbounds(x, y) {
    return x > 0 && x < game.numTiles - 1 && y > 0 && y < game.numTiles - 1;
}

function generateTiles() {
    tiles = [];
    for (let i=0; i<game.numTiles; i++) {
        tiles[i] = [];
        for (let j=0; j<game.numTiles; j++) {
            if (Math.random() < 0.3 || !inbounds(i, j)) {
                tiles[i][j] = new Wall(i, j);
            } else {
                tiles[i][j] = new Floor(i, j);
            }
        }
    }
    return tiles.reduce((totalCount, row) => {
        return row.reduce((rowCount, cell) => {
            return cell.passable ? ++rowCount : rowCount;
        }, totalCount);
    }, 0);
}

function generateLevel() {
    // tryTo('generate the level', () => {
        generateTiles();
    // });
}

function getTile(x, y) {
    if (inbounds(x, y)) {
        return tiles[x][y];
    } else {
        return new Wall(x, y);
    }
}

function getRandomPassableTile() {
    let tile;
    tryTo('get passable tile', () => {
        const x = randomRange(0, game.numTiles - 1);
        const y = randomRange(0, game.numTiles - 1);
        tile = getTile(x,y);
        return tile.passable && !tile.monster;
    });
    return tile;
}