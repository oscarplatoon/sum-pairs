var sp = require("./sumPairs");
var shallowEqualArrays = require('shallow-equal/arrays');
// Don't forget to add your tests :)

console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 9)), [4,5])
console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 7)), [[2,5], [3,4]])
console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 27)), "unable to find pairs")
//console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 9)), [4,5])
