var sp = require("./sumPairs");
var shallowEqualArrays = require('shallow-equal/arrays');

console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 9), [[4,5]]));
console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 7), [[2,5], [3,4]]));
console.log(shallowEqualArrays(sp.sumPairs([3,1,5,8,2], 27), 'unable to find pairs'));
console.log(shallowEqualArrays(sp.sumPairs([], 0), 'unable to find pairs'));
console.log(shallowEqualArrays(sp.sumPairs([1], 0), 'unable to find pairs'));
// Don't forget to add your tests :)
