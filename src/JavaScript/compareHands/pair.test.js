const { results, compareHands } = require('../compareHands');

describe('Given two hands with single pairs', () => {
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

        describe('And second hand has pair with different suites', () => {            
            const secondHand = '4D QD TH TC 8D';
            it('should return loss', () => {
                
                const result = compareHands(firstHand, secondHand);
                expect(result).toBe(results.tie);
            });
        });
    });
});