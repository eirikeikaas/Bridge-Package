const Player = require("./player");
class Board {
    constructor(deal) {
        const compass = ['north', 'east', 'south', 'west'];

        this.players = compass.map((direction, index) => {
            const start = index * 4;
            const hand = deal.slice(start, start + 4);
            return new Player(direction, hand);
        });
    }
}

module.exports = Board;