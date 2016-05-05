// Copy the next node into the target node and delete the next one
function deleteMiddleNode(node) {
  if(!node || !node.next) return false;
  node.val = node.next.data;
  node.next = node.next.next;
  return true;
}
