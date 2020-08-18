const { results, compareHands } = require('../compareHands');

describe('Given two hands with two pairs', () => {
    describe('When the first has two pairs with sixes and nines with jack high', () => {
        const firstHand = '6D 6C 9H 9S JC';

        describe('and the second has two pairs with fives and nines', () => {
            const secondHand = '6S 6H 9C 9D TC';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('and the second has two pairs with sixes and tens', () => {
            const secondHand = '6S 6H TC TD 2C';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('and the second has two pairs with sixes and nines with 2 high', () => {
            const secondHand = '6D 6C 9H 9S 2C';
            it('should return win', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.win);
            });
        });

        describe('and the second has two pairs with sixes and nines with ace high', () => {
            const secondHand = '6D 6C 9H 9S AC';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });
        });

        describe('and the second has two pairs with sixes and nines with jack high', () => {
            const secondHand = '6D 6C 9H 9S JD';
            it('should return tie', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.tie);
            });
        });
    });
});