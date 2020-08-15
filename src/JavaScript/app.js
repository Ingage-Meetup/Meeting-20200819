const ranks = {
    highCard: "HighCard",
    onePair: "Pair",
    twoPairs: "Two Pairs",
    threeOfAKind: "Three of a Kind",
    fourOfAKind: "Four of a Kind",
}

function bestHand(hand) {
    const cards = hand.split(' ');
    const numerals = cards.map(card => card[0]);
    // const suites = cards.map(card => card[1]);

    var numeralGroup = numerals.reduce((accumulator, numeral) => {
        const value = accumulator.get(numeral) || {number: numeral, count: 0};
        value.count++;
        accumulator.set(numeral,  value);

        return accumulator;
    }, new Map());

    const fours = [...numeralGroup.values()].filter(x => x.count === 4).length;
    const triplets = [...numeralGroup.values()].filter(x => x.count === 3).length;
    const pairs = [...numeralGroup.values()].filter(x => x.count === 2).length;

    if (fours === 1) return ranks.fourOfAKind;
    if (triplets === 1) return ranks.threeOfAKind;
    if (pairs === 2) return ranks.twoPairs;
    if (pairs === 1) return ranks.onePair;
    
    return ranks.highCard;
}



module.exports = { ranks, bestHand };