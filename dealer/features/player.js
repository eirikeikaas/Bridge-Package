const Card = require("../features/card/card");
const Hand = require("../features/cardset/cardset.js");

// ================================================================

class Player {
  constructor(name, cards) {
    this.name = name;
    this.dbv = 0;
    this.hand = new Hand();
    
    [0,1,2,3].forEach(suit => {
      cards[suit].split('').forEach(rank => {
        const intRank = Card._rankToInteger(rank);
        const card = new Card(intRank, suit);
        this.hand.addCard(card);
      })
    })
  }
}


// ================================================================
module.exports = Player
