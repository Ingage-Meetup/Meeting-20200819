const { results, compareHands } = require('../app');

describe('Given two hands with three of a kind', () => {
    describe('When the first has three 7s', () => {
        const firstHand = '7D 7C 7H 9S JC';

        describe('and the second has three 2s', () => {
            const secondHand = '2S 2H 2C 9D TC';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('and the second has three 8s', () => {
            const secondHand = '8S 8H 8C 9D TC';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });
    });
});