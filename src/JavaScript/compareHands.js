const { bestHand } = require('./hand');
const { cardOrder } = require('./cards');

const results = {
    win: 1,
    loss: -1,
    tie: 0
};

// TODO: Refactor to PokerHand objects
// TODO: Refactor to support n number of hands
function compareHands(hand1, hand2) {
    const bestHand1 = bestHand(hand1);
    const bestHand2 = bestHand(hand2);

    if (bestHand1.rank < bestHand2.rank) return results.loss;
    if (bestHand1.rank > bestHand2.rank) return results.win;

    const numeralGroup1 = bestHand1.numeralGroup.sort(compareByCountDescAndNumberDesc);
    const numeralGroup2 = bestHand2.numeralGroup.sort(compareByCountDescAndNumberDesc);

    return compareSameRank(numeralGroup1, numeralGroup2);
}

function compareByCountDescAndNumberDesc(x, y) {
    if (x.count === y.count) {
        const xIndex = cardOrder.indexOf(x.number);
        const yIndex = cardOrder.indexOf(y.number);
        if (xIndex == yIndex) return 0;
        if (xIndex < yIndex) return 1;
        return -1;
    }
    
    if (x.count < y.count) return 1
    return -1;
}

function compareSameRank(numeralGroup1, numeralGroup2) {
    const [card1, ...restGroup1] = numeralGroup1;
    const [card2, ...restGroup2] = numeralGroup2;

    const index1 = cardOrder.indexOf(card1.number);
    const index2 = cardOrder.indexOf(card2.number);

    if (index1 < index2) return results.loss;
    if (index1 > index2) return results.win;

    if (restGroup1.length === 0) return results.tie;

    return compareSameRank(restGroup1, restGroup2);
}

module.exports = { results, compareHands };
