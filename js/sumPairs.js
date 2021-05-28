// const sumPairs = (arr, target) => {
//   let sum = 0;
//   let answerArr = [];
//   for (let i = 0; i < arr.length-1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = arr[i] + arr[j];
//       if (sum === target) {
//         answerArr.push([arr[i], arr[j]])
//       }
//     }
//   }
//   if (answerArr.length) {
//     return answerArr;
//   } else return 'unable to find pairs';
// };

// [1,2,3,4,5] -> 9
const sumPairs = (arr, target) => {
  let answerArr = [];
  let sortedArr = arr.sort();
  let right = sortedArr.length - 1
  let left = 0;
  while (left < right) {
    let addition = sortedArr[right] + sortedArr[left];
    if (addition === target) {
      answerArr.push([sortedArr[left], sortedArr[right]]);
      right--;
    } else if (addition < target) {
      left++;
    } else {
      right--;
    }
  }
  if (answerArr.length) {
    return answerArr;
  } else return 'unable to find pairs';
};

module.exports = sumPairs


