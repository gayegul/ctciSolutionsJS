//With a hashtable
LinkedList.prototype.removeDuplicates = function() {
  if(!this.head || !this.head.next) return this;
  var seen = {};
  var current = this.head.next;
  var prev = this.head;
  seen[prev.data] = true;
  while(current) {
    if(!seen[current.data]) {
      seen[current.data] = true;
      prev = prev.next;
    }
    else prev.next = current.next;
    current = current.next;
  }
  return this;
};

// //Without a hashtable (without sorting O(n2) time O(1) space)
LinkedList.prototype.removeDuplicates = function() {
  if(!this.head || !this.head.next) return this;
  var current = this.head;
  var runner = current;
  while(current) {
    while(runner.next) {
      if(runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
    runner = current;
  }
  return this;
};
