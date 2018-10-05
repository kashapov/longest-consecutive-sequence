module.exports = function longestConsecutiveLength(array) {  
  let sortArray = [];
  let sortArrayLength;
  let sequenceLength = 0;
  let sequenceLengthSwap = 1;


  if(Array.isArray(array)) {
    sortArray = array.sort(function(a, b) {
      return a - b;
    });

    sortArrayLength = sortArray.length;
  }

  if (!sortArrayLength) {
    return 0;
  } else if (sortArrayLength === 1) {
    return 1;
  } else {
    for (let i = 0; i < sortArrayLength; i++) {
      if (sortArray[i] === sortArray[i+1]) {
        continue;
      } else if (sortArray[i] === sortArray[i+1] - 1) {
        sequenceLengthSwap++;
      } else if (sequenceLengthSwap > sequenceLength) {
        sequenceLength = sequenceLengthSwap;
        sequenceLengthSwap = 1;
      } else {
        sequenceLengthSwap = 1;
      }
    }

  }
  
  return sequenceLength;

}
