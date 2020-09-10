const faceCards = {
    ten: 'T',
    jack: 'J',
    queen: 'Q',
    king: 'K',
    ace: 'A'
};

const cardOrder = ['2', '3', '4', '5', '6', '7', '8', '9', faceCards.ten, faceCards.jack, faceCards.queen, faceCards.king, faceCards.ace];

module.exports = { cardOrder, faceCards };