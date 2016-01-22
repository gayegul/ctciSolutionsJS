function radixSort(arr) {
  var numOfDigits = findMaxDigits(arr);
  for(var i = 0; i < numOfDigits; i++) {
    var buckets = {};
    for(var b = 0; b < 10; b++) {
      buckets[b] = [];
    }
    for(var j = 0; j < arr.length; j++) {
      var digit = Math.floor(arr[j] / Math.pow(10,i)) % 10;
      buckets[digit].push(arr[j]);
    }
    var temp = [];
    for(var bucketNum = 0; bucketNum < 10; bucketNum++) {
      temp = temp.concat(buckets[bucketNum]);
    }
    arr = temp;
  }
  return arr;
}

function findMaxDigits(arr) {
  var biggestNum = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > biggestNum) biggestNum = arr[i];
  }
  var counter = 0;
  while(biggestNum) {
    counter++;
    biggestNum = Math.floor(biggestNum / 10);
  }
  return counter;
}

var arr = [32, 84, 1, 5, 1083];
radixSort(arr); // [1, 5, 32, 84, 1083]
