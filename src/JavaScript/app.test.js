const { ranks, bestHand } = require('./app');

describe('Given a single hand', () => {
    describe('When there are no cards of the same rank', () => {
        it('returns high card', () => {
            expect(bestHand('KS 2H 5C JD TD').rank).toBe(ranks.highCard);
        });
    });

    describe('When it has 2 twos', () => {
        it('should return one pair', () => {
            expect(bestHand('KS 2H 2C JD TD').rank).toBe(ranks.onePair);
        });
    });

    describe('When it has 2 twos and 2 jacks', () => {
        it('should return two pairs', () => {
            expect(bestHand('KS 2H 2C JD JC').rank).toBe(ranks.twoPairs);
        });
    });

    describe('When it has three Jacks', () => {
        it('should return three of a kind', () => {
            expect(bestHand('KS 2H JH JD JC').rank).toBe(ranks.threeOfAKind);
        });
    });

    describe('When it has three Jacks and 2 twos', () => {
        it('should return a full house', () => {
            expect(bestHand('2S 2H JH JD JC').rank).toBe(ranks.fullHouse);
        });
    });

    describe('When it has four Jacks', () => {
        it('should return four of a kind', () => {
            expect(bestHand('JS 2H JH JD JC').rank).toBe(ranks.fourOfAKind);
        });
    });

    describe('When it has all the same suite', () => {
        it('should return a flush', () => {
            expect(bestHand('JS 2S 5S 7S 9S').rank).toBe(ranks.flush);
        });
    });

    describe('When it has all consecutive numbers', () => {
        it('should return straight', () => {
            expect(bestHand('5S 6H 7S 8D 9S').rank).toBe(ranks.straight);
        });
    });

    describe('When it has all consecutive numbers inlcuding face cards', () => {
        it('should return straight', () => {
            expect(bestHand('8S 9H TS JD QS').rank).toBe(ranks.straight);
        });
    });

    describe('When it has all consecutive face cards', () => {
        it('should return straight', () => {
            expect(bestHand('QS TH KS JD AS').rank).toBe(ranks.straight);
        });
    });

    describe('When it has an Ace, 2, 3, 4, 5', () => {
        it('should return straight', () => {
            expect(bestHand('2H 3S 4S 5D AS').rank).toBe(ranks.straight);
        });
    });

    describe('When it has 2, 3, 4, 5, 6 with same suite', () => {
        it('should return straight flush', () => {
            expect(bestHand('2H 3H 4H 5H 6H').rank).toBe(ranks.straightFlush);
        });
    });

    describe('When it has Ace, 2, 3, 4, 5 with same suite', () => {
        it('should return straight flush and not royal flush', () => {
            expect(bestHand('2H 3H 4H 5H AH').rank).toBe(ranks.straightFlush);
        });        
    });

    describe('When it has 10, Jack, Queen, King, Ace with same suite', () => {
        it('should return royal flush', () => {
            expect(bestHand('TH JH QH KH AH').rank).toBe(ranks.royalFlush);
        });
    });    
});

