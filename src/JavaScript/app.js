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

    const numeralGroup = groupBy(numerals, 'number');
    const suiteGroup = groupBy(suites, 'suite');
    console.log(numeralGroup);
    console.log(suiteGroup);

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

function groupBy(items, fieldName) {
    return items.reduce((accumulator, item) => {
        const value = accumulator.get(item) || {[fieldName]: item, count: 0};
        value.count++;
        accumulator.set(item,  value);
        return accumulator;
    }, new Map());
}

module.exports = { ranks, bestHand };