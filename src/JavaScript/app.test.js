const { ranks, bestHand } = require('./app');

test('Given a hand with no pairs when calculating best hand should return high card', () => {
    expect(bestHand('KS 2H 5C JD TD')).toBe(ranks.highCard);
});