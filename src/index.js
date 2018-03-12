module.exports = function longestConsecutiveLength(array) {
  
  var sortArray = array.sort(function(a, b) {
    return a - b;
  });

  //console.log(sortArray);
  
  var sequenceLength = 1;
  var sequenceLengthSwap = 1;

  if (!sortArray.length) {
    return 0;
  } else {

    for (var i = 0; i < sortArray.length; i++) {
      if (sortArray[i] == sortArray[i+1]) {
        continue;
      } else if (sortArray[i] == sortArray[i+1] - 1) {
        sequenceLengthSwap++;
      } else if (sequenceLengthSwap > sequenceLength) {
        sequenceLength = sequenceLengthSwap;
        sequenceLengthSwap = 1;
      } else {
        sequenceLengthSwap = 1;
      }
    }

  }

  

  //console.log(length);

  
  return sequenceLength;

}
