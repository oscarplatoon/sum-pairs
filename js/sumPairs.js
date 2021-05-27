exports.sumPairs = function(someArray, number) {

  //declaring an array that is passed to the function
  //declare the number
  //declare an output array
  //write two for loops to step through and sum the array
  //if statement for and empty outputArray
  
    let outputArray= [];
    if (someArray.length <= 1){
  
      return 'unable to find pairs';
    }
    for (let i = 0 ; i < someArray.length-1; i++) {
      for (let j=i+1; j < someArray.length; j++) {
          if (someArray[i]+someArray[j] === number) {
            outputArray.push([someArray[i], someArray[j]]);
          }
      }
    }
    if (outputArray.length === 0){
      return 'unable to find pairs';
    }
    return outputArray;
  };
  