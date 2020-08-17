const { results, compareHands } = require('../app');

describe('Given two hands with different ranks', () => {
    describe('When the first hand is a high card and the second is a pair', () => {
        it('should return loss', () => {
            const firstHand = '2H 4D TC 7C AH';
            const secondHand = '2C 2D TH 7D AD';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });
    
    describe('When the first hand is a pair and the second is two pairs', () => {
        it('should return loss', () => {
            const firstHand = '2H 4D TC 7C AH';
            const secondHand = '3C 3D 4H 7D 4C';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });

    describe('When the first hand is a two pairs and the second is three of a kind', () => {
        it('should return loss', () => {
            const firstHand = '3C 3D 4H 7D 4C';
            const secondHand = '5C 5D 5H 9C 2D';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });

    describe('When the first hand is a three of a kind and the second is a straight', () => {
        it('should return loss', () => {
            const firstHand = '5C 5D 5H 9C 2D';
            const secondHand = '5S 6S 4D 8C 7S';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });

    describe('When the first hand is a straight and the second is a flush', () => {
        it('should return loss', () => {
            const firstHand = '5S 6S 4D 8C 7S';
            const secondHand = '2D 5D 9D AD TD';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });

    describe('When the first hand is a flush and the second is a full house', () => {
        it('should return loss', () => {
            const firstHand = '2D 5D 9D AD TD';
            const secondHand = '3D 3C 3H JS JH';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });

    describe('When the first hand is a full house and the second is a four of a kind', () => {
        it('should return loss', () => {
            const firstHand = '3D 3C 3H JS JH';
            const secondHand = '2C 2D 2H 2S 4D';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });

    describe('When the first hand is a a four of a kind and the second is a straight flush', () => {
        it('should return loss', () => {
            const firstHand = '2C 2D 2H 2S 4D';
            const secondHand = '3S 4S 5S 6S 7S';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });

    describe('When the first hand is a straight flush and the second is a royal flush', () => {
        it('should return loss', () => {
            const firstHand = '3S 4S 5S 6S 7S';
            const secondHand = 'TC JC QC KC AC';
            const result  = compareHands(firstHand, secondHand);
            expect(result).toBe(results.loss);
        });
    });
});
