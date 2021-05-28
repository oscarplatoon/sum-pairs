function sumPairs(array, sum) {
  var matches = []
  var copyArray = [...array]
  for (x of array) {
    copyArray.splice((copyArray.indexOf(x)), 1)
    console.log(copyArray)
    for (y of copyArray) {
      if (x + y == sum) {
        if (matches.includes([y, x])) {}
        else {
          matches.push([x, y])
        }
        }
      }
    }
    if (matches == []) {
      return 'unable to find pairs'
    }
    else {
      console.log(matches)
    }
  }


sumPairs([1,2,3,4,5,6], 8)