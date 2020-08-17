const ranks = {
    highCard: 1,
    onePair: 2,
    twoPairs: 3,
    threeOfAKind: 4,    
    straight: 5,
    flush: 6,
    fullHouse: 7,
    fourOfAKind: 8,
    straightFlush: 9,
    royalFlush: 10
}

const results = {
    win: 1,
    loss: -1,
    tie: 0
}

const ten = 'T';
const jack = 'J';
const queen = 'Q';
const king = 'K';
const ace = 'A';

const cardOrder = ['2', '3', '4', '5', '6', '7', '8', '9', ten, jack, queen, king, ace]

function rankHand(numerals, numeralGroup, suiteGroup) {
    const flush = suiteGroup.filter(x => x.count === 5).length === 1;
    const fours = numeralGroup.filter(x => x.count === 4).length;
    const triplets = numeralGroup.filter(x => x.count === 3).length;
    const pairs = numeralGroup.filter(x => x.count === 2).length;

    const straight = isStraight(numerals);

    if (isRoyalFlush(numerals, flush, straight)) return ranks.royalFlush
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
        xIndex = cardOrder.indexOf(x.number);
        yIndex = cardOrder.indexOf(y.number);
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

function bestHand(hand) {
    const cards = hand.split(' ');
    const numerals = cards.map(card => card[0]);
    const suites = cards.map(card => card[1]);

    const numeralGroup = groupBy(numerals, 'number');
    const suiteGroup = groupBy(suites, 'suite');

    const rank = rankHand(numerals, numeralGroup, suiteGroup);
    return {
        rank: rank,
        numeralGroup: numeralGroup
    };
}

function isRoyalFlush(numerals, flush, straight) {
    if (!flush || !straight) return false;

    return numerals.some(x => x === ten) && numerals.some(x => x === ace);
}

function isStraight(numerals) {    
    let cardIndexes = numerals
        .map(x => cardOrder.indexOf(x))
        .sort( (x, y) => x > y);

    cardIndexes = removeAceIfPlayedInLowStraight(cardIndexes);

    return consecutiveCards(cardIndexes);
}

function consecutiveCards(cardIndexes) {
    return cardIndexes.every( (item, index, items) => 
        (index === 0) || 
        (items[index-1] === item - 1)
    );

}

function removeAceIfPlayedInLowStraight(cardIndexes) {    
    const firstCardIndex = cardIndexes[0];
    const lastCardIndex = cardIndexes[cardIndexes.length - 1];
    if (firstCardIndex == 0 && lastCardIndex == cardOrder.length - 1) {
        return cardIndexes.slice(0, cardIndexes.length - 1);
    }

    return cardIndexes;
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

module.exports = { ranks, results, bestHand, compareHands };