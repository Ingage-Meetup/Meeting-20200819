const ranks = {
    highCard: "HighCard",
    onePair: "Pair",
    twoPairs: "Two Pairs",
    threeOfAKind: "Three of a Kind",
    fullHouse: "Full House",
    fourOfAKind: "Four of a Kind",
    flush: "Flush"
}

function bestHand(hand) {
    const cards = hand.split(' ');
    const numerals = cards.map(card => card[0]);
    const suites = cards.map(card => card[1]);

    var numeralGroup = numerals.reduce((accumulator, numeral) => {
        const value = accumulator.get(numeral) || {number: numeral, count: 0};
        value.count++;
        accumulator.set(numeral,  value);

        return accumulator;
    }, new Map());

    var suiteGroup = suites.reduce((accumulator, suite) => {
        const value = accumulator.get(suite) || {suite: suite, count: 0};
        value.count++;
        accumulator.set(suite,  value);
        return accumulator;
    }, new Map());

    const numeralGroupArray = [...numeralGroup.values()];
    const suiteGroupArray = [...suiteGroup.values()];

    const flush = suiteGroupArray.filter(x => x.count === 5).length === 1;
    const fours = numeralGroupArray.filter(x => x.count === 4).length;
    const triplets = numeralGroupArray.filter(x => x.count === 3).length;
    const pairs = numeralGroupArray.filter(x => x.count === 2).length;

    if (fours === 1) return ranks.fourOfAKind;
    if (triplets === 1 && pairs == 1) return ranks.fullHouse;
    if (flush) return ranks.flush;
    if (triplets === 1) return ranks.threeOfAKind;
    if (pairs === 2) return ranks.twoPairs;
    if (pairs === 1) return ranks.onePair;
    
    return ranks.highCard;
}

module.exports = { ranks, bestHand };