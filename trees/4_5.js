//O(n)
function validateBST(root) {
  var leftResult = true;
  var rightResult = true;
  if(!root) return true;
  else if(root.left && root.left.val > root.val) return false;
  else if(root.right && root.right.val < root.val) return false;

  if(!validateBST(root.left)) return false;
  else if(!validateBST(root.right)) return false;
  return true;
}
