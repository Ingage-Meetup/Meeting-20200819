const ranks = {
    highCard: "HighCard",
    onePair: "Pair",
    twoPais: "Two Pairs"
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

    if (([...numeralGroup.values()].filter(x => x.count === 2)).length === 2) return ranks.twoPair;
    if ([...numeralGroup.values()].some(x => x.count === 2)) return ranks.onePair;
    
    return ranks.highCard;
}



module.exports = { ranks, bestHand };