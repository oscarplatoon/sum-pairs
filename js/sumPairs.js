const sumPairs = (arr, num) => {

  let answerArr = [];
  let arrSort = arr.sort();

  let start = 0;
  let end = arrSort.length - 1;

  while (start < end) {
    if (arrSort[start] + arrSort[end] > num){
      end--
    }
    else if (arrSort[start] + arrSort[end] < num){
      start++
    } 
    else {
      answerArr.push([arrSort[start], arrSort[end]])
      end--
    }
  }
  //console.log(answerArr)
  if(answerArr.length){
    return answerArr
  } else {
    return 'unable to find pairs'
  }
};

module.exports = sumPairs
