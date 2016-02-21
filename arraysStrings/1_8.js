function zeroMatrix(arr) {
  if(!arr || !arr.length) return;
  var column = {};
  var row = {};

  for(var i = 0; i < arr.length; i++) {
    if(arr[i][0] === 0) row[i] = 0;
    else row[i] = 1;
  }

  for(var j = 0; j < arr[0].length; j++) {
    if(arr[0][j] === 0) column[j] = 0;
    else column[j] = 1;
  }

  var length = arr[0].length >= arr.length ? arr[0].length : arr.length;

  for(var k = 0; k < length; k++) {
    if(row[k] === 0 || column[k] === 0) {
      arr = fillZero(arr, k, 'vertical');
      arr = fillZero(arr, k, 'horizontal');
    }
  }
  return arr;
}

function fillZero(arr, index, direction) {
  if(direction === 'horizontal') {
    for(var i = 0; i < arr.length; i++) {
      arr[i][index] = 0;
    }
  }
  else if(direction === 'vertical') {
    for(var j = 0; j < arr[0].length; j++) {
      arr[index][j] = 0;
    }
  }
  return arr;
}

var arr = [[1,0,4,5], [0,4,2,0]];
zeroMatrix(arr);
