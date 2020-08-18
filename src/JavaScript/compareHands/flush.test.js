const { results, compareHands } = require('../compareHands');

describe('Given two hands with flushes', () => {
    describe('When the first has high Jack then 7', () => {
        const firstHand = 'JH 7H 2H 4H 5H';

        describe('and the second has high 10', () => {
            const secondHand = 'TC 2C 3C 4C 5C';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('and the second flush has high Queen', () => {
            const secondHand = 'TC 2C 3C QC 5C';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('and the second flush has Jack then 8', () => {
            const secondHand = '8C 2C 3C JC 5C';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('and the second flush has Jack then 6', () => {
            const secondHand = '6C 2C 3C JC 5C';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('and the second has same cards but different suite', () => {
            const secondHand = 'JC 7C 2C 4C 5C';
            it('should return tie', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.tie);
            });
        });
    });
});