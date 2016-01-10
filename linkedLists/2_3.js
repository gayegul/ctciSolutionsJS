function deleteMiddleNode(node) {
  if(!node || !node.next) return false;
  node.val = node.next.val;
  node.next = node.next.next;
  return true;
}
