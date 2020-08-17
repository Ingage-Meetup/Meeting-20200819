const { results, compareHands } = require('../app');

describe('Given two hands with royal flush', () => {
    describe('When the first has diamonds', () => {
        const firstHand = 'TD JD KD QD AD';

        describe('and the second has hearts', () => {
            const secondHand = 'TH JH KD QC AH';
            it('should return tie', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.tie);
            });
        });
    });
});