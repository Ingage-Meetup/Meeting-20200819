const { results, compareHands } = require('../compareHands');

describe('Given two hands with high cards', () => {
    describe('When the first hand has high card of ace followed by a ten', () => {
        const firstHand = '2H 4D TC 7C AH';

        describe('And second has high card of ace followed by a king', () => {
            const secondHand = '2S 4S TS KC AC';
            it('should return loss', () => {
                const result  = compareHands(firstHand, secondHand);
                expect(result).toBe(results.loss);
            });        
        });

        describe('And second has high card followed by the same cards different suite ', () => {
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
});