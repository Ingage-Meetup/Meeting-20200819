const { ranks, bestHand } = require('./app');

describe('Given a hand with no cards of the same rank', () => {
    it('Given a hand with no pairs it should return high card', () => {
        expect(bestHand('KS 2H 5C JD TD')).toBe(ranks.highCard);
    });
});

describe('Given a hand with 2 twos', () => {
    it('should return one pair', () => {
        expect(bestHand('KS 2H 2C JD TD')).toBe(ranks.onePair);
    });
});

describe('Given a hand with 2 twos and 2 jacks', () => {
    it('should return two pairs', () => {
        expect(bestHand('KS 2H 2C JD JC')).toBe(ranks.twoPairs);
    });
});

describe('Given a hand with three Jacks', () => {
    it('should return three of a kind', () => {
        expect(bestHand('KS 2H JH JD JC')).toBe(ranks.threeOfAKind);
    });
});

describe('Given a hand with three Jacks and 2 twos', () => {
    it('should return three of a kind', () => {
        expect(bestHand('2S 2H JH JD JC')).toBe(ranks.fullHouse);
    });
});

describe('Given a hand with four Jacks', () => {
    it('should return four of a kind', () => {
        expect(bestHand('JS 2H JH JD JC')).toBe(ranks.fourOfAKind);
    });
});

describe('Given a hand with all the same suite', () => {
    it('should return four of a kind', () => {
        expect(bestHand('JS 2S 5S 7S 9S')).toBe(ranks.flush);
    });
});

describe('Given a hand with consecutive numbers', () => {
    it('should return straight', () => {
        expect(bestHand('5S 6H 7S 8D 9S')).toBe(ranks.straight);
    });
});

describe('Given a hand with consecutive numbers and face cards', () => {
    it('should return straight', () => {
        expect(bestHand('8S 9H TS JD QS')).toBe(ranks.straight);
    });
});

describe('Given a hand with consecutive face cards', () => {
    it('should return straight', () => {
        expect(bestHand('QS TH KS JD AS')).toBe(ranks.straight);
    });
});

describe('Given a hand with Ace, 2, 3, 4, 5', () => {
    it('should return straight', () => {
        expect(bestHand('2H 3S 4S 5D AS')).toBe(ranks.straight);
    });
});

describe('Given a hand with 2, 3, 4, 5, 6 with same suite', () => {
    it('should return straight flush', () => {
        expect(bestHand('2H 3H 4H 5H 6H')).toBe(ranks.straightFlush);
    });
});

describe('Given a hand with Ace, 2, 3, 4, 5 with same suite', () => {
    it('should return straight flush and not royal flush', () => {
        expect(bestHand('2H 3H 4H 5H AH')).toBe(ranks.straightFlush);
    });
});

