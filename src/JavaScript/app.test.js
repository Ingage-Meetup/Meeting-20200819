const { ranks, results, bestHand, compareHands } = require('./app');

describe('Given a single hand', () => {
    describe('When there are no cards of the same rank', () => {
        it('returns high card', () => {
            const hand = 'KS 2H 5C JD TD';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.highCard);
        });
    });

    describe('When it has 2 twos', () => {
        it('should return one pair', () => {
            const hand = 'KS 2H 2C JD TD';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.onePair);
        });
    });

    describe('When it has 2 twos and 2 jacks', () => {
        it('should return two pairs', () => {
            const hand = '';
            const result = bestHand(hand);
            expect(bestHand('KS 2H 2C JD JC').rank).toBe(ranks.twoPairs);
        });
    });

    describe('When it has three Jacks', () => {
        it('should return three of a kind', () => {
            const hand = '';
            const result = bestHand(hand);
            expect(bestHand('KS 2H JH JD JC').rank).toBe(ranks.threeOfAKind);
        });
    });

    describe('When it has three Jacks and 2 twos', () => {
        it('should return a full house', () => {
            const hand = '';
            const result = bestHand(hand);
            expect(bestHand('2S 2H JH JD JC').rank).toBe(ranks.fullHouse);
        });
    });

    describe('When it has four Jacks', () => {
        it('should return four of a kind', () => {
            const hand = 'JS 2H JH JD JC';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.fourOfAKind);
        });
    });

    describe('When it has all the same suite', () => {
        it('should return a flush', () => {
            const hand = 'JS 2S 5S 7S 9S';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.flush);
        });
    });

    describe('When it has all consecutive numbers', () => {
        it('should return straight', () => {
            const hand = '5S 6H 7S 8D 9S';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.straight);
        });
    });

    describe('When it has all consecutive numbers inlcuding face cards', () => {
        it('should return straight', () => {
            const hand = '8S 9H TS JD QS';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.straight);
        });
    });

    describe('When it has all consecutive face cards', () => {
        it('should return straight', () => {
            const hand = 'QS TH KS JD AS';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.straight);
        });
    });

    describe('When it has an Ace, 2, 3, 4, 5', () => {
        it('should return straight', () => {
            const hand = '2H 3S 4S 5D AS';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.straight);
        });
    });

    describe('When it has 2, 3, 4, 5, 6 with same suite', () => {
        it('should return straight flush', () => {
            const hand = '2H 3H 4H 5H 6H';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.straightFlush);
        });
    });

    describe('When it has Ace, 2, 3, 4, 5 with same suite', () => {
        it('should return straight flush and not royal flush', () => {
            const hand = '2H 3H 4H 5H AH';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.straightFlush);
        });        
    });

    describe('When it has 10, Jack, Queen, King, Ace with same suite', () => {
        it('should return royal flush', () => {
            const hand = 'TH JH QH KH AH';
            const result = bestHand(hand);
            expect(result.rank).toBe(ranks.royalFlush);
        });
    });    
});

describe('Given two hands', () => {
    describe('When the first hand has high card of ace', () => {
        const firstHand = '2H 4D TC 7C AH';
        describe('And second hand has a pair of twos', () => {
            const secondHand = '2C 2D TH 7D AD';
            it('should return lose', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });        
        });

        describe('And second hand has a royalFlush', () => {
            const secondHand = 'TC JC QC KC AC';
            it('should return lose', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });        
        });

        describe('And second has high card of ace followed by king', () => {
            const secondHand = '2S 4S TS KC AC';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });        
        });

        describe('And second has high card followed with same cards different suite ', () => {
            const secondHand = '2D 4C TD 7H AD';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.tie);
            });        
        });

        describe('And second hand has high card without ace', () => {                        
            const secondHand = '2D 4H TS 7D KH';
            it('should have first hand winning', () => {                
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('And second has high card of ace followed by 9', () => {
            const secondHand = 'AD 3C 5D 7H 9D';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });        
        });


    });

    describe('When the first has has a pair of tens with queen high', () => {
        const firstHand = '4C QC TC TD 8H';
        describe('And second hand has pair of eights with ace high', () => {
            const secondHand = '8C 8S 2D 3C AS';
            it('should return loss', () => {
                const result = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('And second hand has pair of Jacks with 10 high', () => {
            const secondHand = 'JC JS 2D 3C TS';
            it('should return loss', () => {
                const result = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('And second hand has pair of tens with ace high', () => {
            const secondHand = 'TH TS 2D 3C AS';
            it('should return loss', () => {
                const result = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('And second hand has pair of tens with jack high', () => {
            const secondHand = 'TH TS 2D 3C JS';
            it('should return loss', () => {
                const result = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });
    });
});