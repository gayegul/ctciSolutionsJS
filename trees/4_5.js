function checkBST(root, max, min) {
  if(!root) return;

  if(root.left) {
    if(root.left.data > root.data || root.left.data > max) return false;
  }
  if(root.right) {
    if(root.right.data <= root.data || root.right.data <= min) return false;
  }

  var leftMin = min === 0 ? 0 : (min || -Infinity);
  var leftMax = root.data;
  var rightMin = root.data;
  var rightMax = max === 0 ? 0 : (max || Infinity);

  var left = checkBST(root.left, leftMax, leftMin);
  var right = checkBST(root.right, rightMax, rightMin);
  if(left === false || right === false) return false;
  else return true;
}
