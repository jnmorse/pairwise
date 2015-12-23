var pairwise = require('./pairwise.js');

(pairwise([1, 4, 2, 3, 0, 5], 7) === 11) ? console.log('pass') : console.log('fail');

(pairwise([1, 3, 2, 4], 4) === 1) ? console.log('pass') : console.log('fail');

(pairwise([1, 1, 1], 2) === 1) ? console.log('pass') : console.log('fail');

(pairwise([0, 0, 0, 0, 1, 1], 1) === 10) ? console.log('pass') : console.log('fail');

(pairwise([], 100) === 0) ? console.log('pass') : console.log('fail');
