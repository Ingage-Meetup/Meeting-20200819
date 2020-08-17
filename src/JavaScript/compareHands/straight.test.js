const { results, compareHands } = require('../app');

describe('Given two hands with straights', () => {
    describe('When the first has 5 to 9', () => {
        const firstHand = '5D 6C 7H 9S 8C';

        describe('and the second has 4 to 8', () => {
            const secondHand = '4S 5H 6D 8D 7C';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('and the second has 6 to 10', () => {
            const secondHand = '7S 6H 8C 9D TC';
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