const { results, compareHands } = require('../compareHands');

describe('Given two hands with straight flush', () => {
    describe('When the first has 5 to 9', () => {
        const firstHand = '5D 6D 7D 9D 8D';

        describe('and the second has 4 to 8', () => {
            const secondHand = '4H 5H 6H 8H 7H';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('and the second has 6 to 10', () => {
            const secondHand = '7H 6H 8H 9H TH';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('and the second has 5 to 9 different suites', () => {
            const secondHand = '5H 6H 7D 9C 8H';
            it('should return tie', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.tie);
            });
        });
    });
});