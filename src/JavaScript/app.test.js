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