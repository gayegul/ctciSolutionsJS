function isBalanced(root) {
  var leftHeight = getHeight(root.left);
  var rightHeight = getHeight(root.right);
  if(leftHeight === -1 || rightHeight === -1) return false;
  return true;
}

function getHeight(root) {
  if(!root) return 0;
  var leftHeight = getHeight(root.left);
  var rightHeight = getHeight(root.right);
  if(Math.abs(leftHeight - rightHeight) > 1) return -1;
  else return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

//OR
function isBalanced(root) {
  var leftHeight = getHeight(root.left);
  var rightHeight = getHeight(root.right);
  if(Math.abs(leftHeight - rightHeight) > 1) return false;
  return true;
}

function getHeight(root) {
  if(!root) return 0;
  else return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}
