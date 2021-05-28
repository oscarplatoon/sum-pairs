// var sp = require("./sumPairs");

const sumPairs = require('./sumPairs');

test('expect input of [1,2,3,4,5] & 9 to equal [[4,5]]', () => {
    expect(sumPairs([1,2,3,4,5], 9)).toEqual([[4,5]]);
});