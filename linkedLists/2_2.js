//finds kth element from tail in a
//singly-linked list without length and tail O(n) time O(1) space
LinkedList.prototype.findKFromTail = function(k) {
  if(k < 0 || k > this.length) return null;
  var current = this.head;
  var fast = this.head;
  var counter = 0;
  while(counter < k) {
    fast = fast.next;
    counter++;
  }
  if(!fast) return null;
  while(fast.next) {
    current = current.next;
    fast = fast.next;
  }
  return current;
};
