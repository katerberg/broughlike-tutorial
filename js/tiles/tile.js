class Tile {
    constructor(x, y, sprite, passable) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.passable = passable;
    }
    
    draw() {
        drawSprite(this.sprite, this.x, this.y);
    }

    getNeighbor(dx, dy) {
        return getTile(this.x + dx, this.y + dy);
    }

    getAdjacentNeighbors() {
        return shuffle([
            this.getNeighbor(0, 1),
            this.getNeighbor(0, -1),
            this.getNeighbor(-1, 0),
            this.getNeighbor(1, 0),
        ]);
    }

    getAdjacentPassableNeighbors() {
        return this.getAdjacentNeighbors().filter(n => n.passable);
    }
    
    getConnectedTiles() {
        let connectedTiles = [this];
        let frontier = [this];
        while (frontier.length) {
            let newNeighbors = frontier.pop()
                .getAdjacentPassableNeighbors()
                .filter(n => !connectedTiles.includes(n));
            connectedTiles = [...connectedTiles, ...newNeighbors];
            frontier = [...frontier, ...newNeighbors];
        }
        return connectedTiles;
    }
}