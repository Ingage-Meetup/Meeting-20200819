const ranks = {
    highCard: "HighCard",
    onePair: "Pair"
}

function bestHand(hand) {
    const cards = hand.split(' ');
    const numerals = cards.map(card => card[0]);
    // const suites = cards.map(card => card[1]);

    console.log('numerals', numerals);
    var numeralGroup = numerals.reduce((accumulator, numeral) => {
        // accumulator[numeral] = [...accumulator[numeral] || [] || {number: numeral, count: 0};
        // accumulator[numeral] = accumulator[numeral] || {number: numeral, count: 0};
        // accumulator = accumulator || [];        
        console.log('accumulator', accumulator);
        console.log('numeral', numeral);
        const value = accumulator.get(numeral) || 0;
        accumulator.set(numeral,  value+1);
        // accumulator[numeral]++;
        // accumulator = accumulator || {number: numeral, count: 0};
        // accumulator[numeral] = accumulator[numeral] || {number: numeral, count: 0};
        // console.log('accumulator after numeral', accumulator);
        // accumulator.count++;

        return accumulator;
    }, new Map());
    
    console.log(numeralGroup);
    console.log('size', numeralGroup.size);

    // if (numeralGroup.values(x => x === 2)) return ranks.onePair;
    if (numeralGroup.size === 4) return ranks.onePair;
    
    return ranks.highCard;
}



module.exports = { ranks, bestHand };