function zeroMatrix(arr) {
  if(!arr || !arr.length) return;
  var column = fillOne([], arr.length);
  var row = fillOne([], arr[0].length);

  for(var i = 0; i < arr.length; i++) {
    for(var k = 0; k < arr[0].length; k++) {
      if(arr[i][k] === 0) row[k] = 0;
      if(arr[i][k] === 0) column[i] = 0;
    }
  }

  for(var n = 0; n < row.length; n++) {
    if(row[n] === 0) fillZero(arr, n, 'vertical');
  }

  for(var m = 0; m < column.length; m++) {
    if(column[m] === 0) fillZero(arr, m, 'horizontal');
  }

  return arr;
}

function fillZero(arr, index, direction) {
  if(direction === 'horizontal') {
    for(var i = 0; i < arr[0].length; i++) {
      arr[index][i] = 0;
    }
  }
  else if(direction === 'vertical') {
    for(var j = 0; j < arr.length; j++) {
      arr[j][index] = 0;
    }
  }
  return arr;
}

function fillOne(arr, length) {
  for(var i = 0; i < length; i++) {
    arr[i] = 1;
  }
  return arr;
}

var arr = [[1,1,4,5], [0,4,2,0], [1,2,3,0], [2,3,2,3]];
zeroMatrix(arr);
