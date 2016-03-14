//Using extra data structures
function rotateNinetyDegrees(arr) {
  var resultArray = [];
  for(var i = 0; i < arr.length; i++) {
    var temp = [];
    resultArray.push(temp);
    for(var j = 0; j < arr.length; j++) {
      temp.push(arr[arr.length - 1 - j][i]);
    }
  }
  return resultArray;
}

//In place rotation
function rotateLayer(arr, layer) {
  var leftLimit = layer;
  var topLimit = layer;
  var rightLimit = arr.length - 1 - layer;
  var bottomLimit = arr.length - 1 - layer;
  var len = rightLimit - leftLimit;
  for(var offset = 0; offset < len; offset++) {
    var tempLeftTop = arr[leftLimit][topLimit + offset];
    var tempRightTop = arr[topLimit + offset][rightLimit];
    var tempRightBottom = arr[bottomLimit][rightLimit - offset];
    var tempLeftBottom = arr[bottomLimit - offset][leftLimit];
    arr[leftLimit][topLimit + offset] = tempLeftBottom;
    arr[topLimit + offset][rightLimit] = tempLeftTop;
    arr[bottomLimit][rightLimit - offset] = tempRightTop;
    arr[bottomLimit - offset][leftLimit] = tempRightBottom;
  }
}

function rotateNinetyDegrees(arr) {
  var layers = Math.floor(arr.length / 2);
  for(var i = 0; i < layers; i++) {
    rotateLayer(arr, i);
  }
}

function findNewPlace(y, x, layers) {
  return [x, layers - y + 1];
}
