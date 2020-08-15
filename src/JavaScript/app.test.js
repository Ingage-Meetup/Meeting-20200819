const { ranks, bestHand } = require('./app');

describe('when calculating best hand', () => {
    it('Given a hand with no pairs it should return high card', () => {
        expect(bestHand('KS 2H 5C JD TD')).toBe(ranks.highCard);
    });
});

describe('Given a hand with one pair ', () => {
    it('should return one pair', () => {
        expect(bestHand('KS 2H 2C JD TD')).toBe(ranks.onePair);
    });
});