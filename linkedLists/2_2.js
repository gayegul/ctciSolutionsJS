// Finds kth element from tail in a
// Singly-linked list without length and tail O(n) time, O(1) space
function findKFromTail(head, k) {
  if(k < 0) return null;

  var current = head;
  var fast = head;
  var counter = 0;

  while(counter < k) {
    forward = forward.next;
    if(!forward) return null;
    counter++;
  }

  while(forward.next) {
    current = current.next;
    forward = forward.next;
  }
  
  return current.data;
}

// Recursively O(n) time, O(n) space
function findKFromTail(head, k) {
  if(!head) return 0;
  var index = findKFromTail(head.next, k) + 1;
  if(index === k) return head.data;
}
