exports.sumPairs = function() {
    function sumPairs(inputArr, targetNum) {

        //Create empty arrays to receive answers
        let resultArray = [];
        // Catches an integer pair that sums to the target number
        let sumPairArr = [];
        
        /*nested for loops that iterate through the passed in array
        * and check the sums for target value, pushing correct pairs as an array
        * into the resultArray
        */
        for (let i = 0; i < inputArr.length; i++) {
          for (let j = 1; j < inputArr.length-1; j++) {
            if (inputArr[i] + inputArr[j] == targetNum) {
              sumPairArr.push(inputArr[i])
              sumPairArr.push(inputArr[j])
              resultArray.push(sumPairArr);
              i++
              sumPairArr = [];
            } 
          }
        }
        //conditional statement if no matches
        if (resultArray.length == 0) return "unable to find pairs"
      
        return resultArray
      }
    }

    // testArray = [1,2,3,4,5]
      // targetNum = 4
    //   console.log(sumPairs([1,2,3,4,5], 9)) // [[4,5]]
    //   console.log(sumPairs([1,2,3,4,5], 7)) //// [[2,5], [3,4]]
    //   console.log(sumPairs([3, 1, 5, 8, 2], 27))//, 27)
      //console.log(sumPairs(testArray, targetNum))
