const { results, compareHands } = require('../app');

describe('Given two hands with full houses', () => {
    describe('When the first has three 7s and two 4s', () => {
        const firstHand = '7D 7C 7H 4S 4C';

        describe('and the second has the 8s and two 3s', () => {
            const secondHand = '8S 8H 8C 3D 3C';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('and the second has three 6s and two Jacks', () => {
            const secondHand = '6S 6H 6C JD JC';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });
    });
});