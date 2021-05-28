// var sp = require("./sumPairs");
const sumPairs = require('./sumPairs');

test('expect input of [1,2,3,4,5] & 9 to equal [[4,5]]', () => {
  expect(sumPairs([1,2,3,4,5], 9)).toEqual([[4,5]]);
});

test('expect input of [1,2,3,4,5] & 7 to equal [[2,5], [3,4]]', () => {
  expect(sumPairs([1,2,3,4,5], 7)).toEqual([[2,5], [3,4]]);
});

test('expect input of [1,2,3,4,5] & 7 to equal [[2,5], [3,4]]', () => {
  expect(sumPairs([3, 1, 5, 8, 2], 27)).toEqual('unable to find pairs');
});

