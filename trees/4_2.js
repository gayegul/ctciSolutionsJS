//O() terrible
function makeBST(array) {
  if(!array.length) return null;
  var rootIndex = Math.floor(array.length / 2);
  var root = new Node(array[rootIndex]);
  var leftArray = array.slice(0, rootIndex);
  var rightArray = array.slice(rootIndex + 1, array.length);
  root.left = makeBST(leftArray);
  root.right = makeBST(rightArray);
  return root;
}

//TODO
//rather than slicing the array, pass indices of beginning
//and end points of subarrays with a helper recursive function
//O() would prob be linear

var Node = function(val) {
  this.val = val;
  this.left = this.right = null;
};
