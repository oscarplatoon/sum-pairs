// exports.sumPairs = function(inputArr, targetNum) {
//   //Create empty arrays to receive answers
//     let resultArray = [];
//   // Catches an integer pair that sums to the target number
//     let sumPairArr = [];

const { sort } = require("prelude-ls");

//   /*nested for loops that iterate through the passed in array
//   * and check the sums for target value, pushing correct pairs as an array
//   * into the resultArray
//   */
//     for (let i = 0; i < inputArr.length; i++) {
//         for (let j = 1; j < inputArr.length-1; j++) {
//       if (inputArr[i] + inputArr[j] == targetNum) {
//         sumPairArr.push(inputArr[i])
//         sumPairArr.push(inputArr[j])
//         resultArray.push(sumPairArr);
//         i++
//         sumPairArr = [];
//       } 
//     }
//   }
//   //conditional statement if no matches
//   if (resultArray.length == 0) return "unable to find pairs"

//   return resultArray
// }

// testArray = [1,2,3,4,5]
// targetNum = 4
// console.log(this.sumPairs([1,2,3,4,5], 9)) // [[4,5]]
// console.log(this.sumPairs([1,2,3,4,5], 7)) //// [[2,5], [3,4]]
// console.log(this.sumPairs([3, 1, 5, 8, 2], 27))//, 27)
//console.log(this.sumPairs(testArray, targetNum))

const sumPairs = (inputArr, targetNum) => {
  let sum = 0
  let answerArr = [];
  let sortedArr = inputArr.sort((a,b) => a - b);

  // Try and loop through once using pointers
  let right = sortedArr.length - 1; //last index
  let left = 0; //first index
  while(left < right) {
    let addition = sortedArr[right] + sortedArr[left]
    if (addition === targetNum) {
      answerArr.push(sortedArr[right], sortedArr[left])
      right--
    } else if(addition < targetNum) {
      left++;
    } else {
      right--;
    }
  }

  // for (let i = 0; i < sortedArr.length-1; i++) {
  //   for (j = i+1; j < sortedArr.length; j++) {
  //     sum = inputArr[i] + inputArr[j];
  //     if (sum === targetNum) {
  //       answerArr.push(inputArr[i], inputArr[j])
  //     }
  //   }
  // }
  if (answerArr.length) {
    return answerArr
  } else return "unable to find pairs."
}

//console.log(sumPairs([1,2], 3))
module.exports = sumPairs