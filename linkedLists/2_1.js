// With a hashtable
function removeDuplicates(head) {
  var seen = {};
  var prev = null;

  while(head) {
    if(!seen[current.data]) {
      seen[current.data] = true;
      prev = head;
    }
    else prev.next = head.next;
    head = head.next;
  }
}

// Without a hashtable (without sorting O(n2) time O(1) space)
function removeDuplicates(head) {
  var current = head;

  while(current) {
    var forward = current;
    while(forward.next) {
      if(forward.next.data === current.data) forward.next = forward.next.next;
      else forward = forward.next;
    }
    current = current.next;
  }
}
