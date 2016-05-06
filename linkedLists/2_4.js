// Finds the  nodes smaller than k and prepends them to the very front
function doPartition(head, k) {
  if(!head || !head.next || k === null) return head;

  var current = head;
  var next = current.next;

  while(next) {
    if(next.data < k) {
      current.next = next.next;
      next.next = head;
      head = next;
    }
    else current = current.next;
    next = current.next;
  }

  return head;
}
