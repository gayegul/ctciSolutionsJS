var Node = function(data) {
  this.data = data;
  this.left = this.right = null;
};

function createBST(arr, start, end) {
  if(end < start) return;

  var mid = Math.floor((start + end) / 2);
  var root = new Node(arr[mid]);
  root.left = createBST(arr, start, mid - 1);
  root.right = createBST(arr, mid + 1, end);

  return root;
}
