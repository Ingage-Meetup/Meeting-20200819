// This index.js is only here in order to run a console app, if needed. Any code you implement should be in app.js instead.
const { bestHand } = require('./app');

let result = bestHand('KS 2H 2C JD TD');
console.log(result);

result = bestHand('KS 3H 2C JD TD');
console.log(result);