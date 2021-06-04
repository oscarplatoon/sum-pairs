//var sp = require("./sumPairs");
const sumPairs = require('./sumPairs')

test('expect input of [1,2,3,4,5] &  to equal [[4,5]]', () => {
  expect(sumPairs([1,2,3,4,5], 9)).toEqual([[4,5]]);
});

test('expect input of [1,2,3,4,5] & 7 to equal [[4,5]]', () => {
  expect(sumPairs([1,2,3,4,5], 7)).toEqual([[2,5], [3,4]]);
});

test('expect input of [3, 1, 5, 8, 2], 27 to equal "unable to find pairs"', () => {
  expect(sumPairs([3, 1, 5, 8, 2], 27)).toEqual('unable to find pairs');
});

test('expect input of [1,2,9,3,4,5,6,7,8] & 6 to equal [[[1,5], [2,4]]]', () => {
  expect(sumPairs([1,2,9,3,4,5,6,7,8], 6)).toEqual([[1,5], [2,4]]);
});

test('expect input of [1,2,9,3,4,5,52,7,8,6] & 6 to equal [[ 1, 9 ], [ 2, 8 ], [ 3, 7 ], [ 4, 6 ]]', () => {
  expect(sumPairs([1,2,9,3,4,5,52,7,8,6], 10)).toEqual([[ 1, 9 ], [ 2, 8 ], [ 3, 7 ], [ 4, 6 ]]);
});

test('expect input of [1,2,3,4,5] & 20 to equal unable to find pairs', () => {
  expect(sumPairs([1,2,3,4,5], 20)).toEqual('unable to find pairs');
});

// Don't forget to add your tests :)
// sp.sumPairs([1,2,9,3,4,5,6,7,8], 6)
// sp.sumPairs([1,2,9,3,4,5,52,7,8,6], 10)
// sp.sumPairs([1,2,3,4,5], 20)

// sum_pairs([1,2,3,4,5], 9) # [[4,5]]
// sum_pairs([1,2,3,4,5], 7) # [[2,5], [3,4]]
// sum_pairs([3, 1, 5, 8, 2], 27) # 'unable to find pairs'
