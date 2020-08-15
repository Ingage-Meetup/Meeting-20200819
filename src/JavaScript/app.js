const ranks = {
    highCard: "HighCard",
    onePair: "Pair",
    twoPairs: "Two Pairs",
    threeOfAKind: "Three of a Kind",
    fullHouse: "Full House",
    fourOfAKind: "Four of a Kind",
    flush: "Flush",
    straight: "Straight",
    straightFlush: "Straight Flush"
}

// TODO: Handle A being high or low
const cardOrder = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']

function bestHand(hand) {
    const cards = hand.split(' ');
    const numerals = cards.map(card => card[0]);
    const suites = cards.map(card => card[1]);

    console.log('numerals', numerals);

    const numeralGroup = groupBy(numerals, 'number');
    const suiteGroup = groupBy(suites, 'suite');

    const flush = suiteGroup.filter(x => x.count === 5).length === 1;
    const fours = numeralGroup.filter(x => x.count === 4).length;
    const triplets = numeralGroup.filter(x => x.count === 3).length;
    const pairs = numeralGroup.filter(x => x.count === 2).length;

    const straight = isStraight(numerals);

    if (flush && straight) return ranks.straightFlush;    
    if (fours === 1) return ranks.fourOfAKind;
    if (triplets === 1 && pairs == 1) return ranks.fullHouse;
    if (flush) return ranks.flush;
    if (straight) return ranks.straight;
    if (triplets === 1) return ranks.threeOfAKind;
    if (pairs === 2) return ranks.twoPairs;
    if (pairs === 1) return ranks.onePair;
    
    return ranks.highCard;
}

function isStraight(numerals) {    
    let cardIndexes = numerals
        .map(x => cardOrder.indexOf(x))
        .sort( (x, y) => x > y);

    // Handle special case of Ace a low card
    if (cardIndexes[0] == 0 && cardIndexes[cardIndexes.length - 1] == cardOrder.length - 1) {
        cardIndexes.pop();
    }

    let previous= cardIndexes[0] - 1;

    // TODO: Can we do without loops?
    for (const cardIndex of cardIndexes) {
        if (cardIndex !== previous + 1) return false;
        previous = cardIndex;
    }

    return true;
}

function groupBy(items, fieldName) {
    var results = items.reduce((accumulator, item) => {
        const value = accumulator.get(item) || {[fieldName]: item, count: 0};
        value.count++;
        accumulator.set(item,  value);
        return accumulator;
    }, new Map());

    return [...results.values()];
}

module.exports = { ranks, bestHand };