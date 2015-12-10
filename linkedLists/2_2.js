//finds kth element from tail in a singly-linked list given length and tail O(n)
LinkedList.prototype.findKFromTail = function(number) {
  var current = this.head;
  var index = this.length - number;
  if(index < 0 || number <= 0) return null;
  else if(index === 0) return this.head;
  else if(index === this.length) return this.tail;
  else {
    var counter = 0;
    while(counter < index && current.next) {
      current = current.next;
      counter++;
    }
    return current;
  }
};

//finds kth element from tail in a singly-linked list without length and tail O(n)
LinkedList.prototype.findKFromTail = function(number) {
  var fastPointer = this.head;
  var slowPointer = this.head;
  var counter = 0;
  if(number < 0) return null;
  while(fastPointer.next !== null) {
    counter++;
    fastPointer = fastPointer.next;
    if(fastPointer.next === null && counter < number - 1) return null;
    else if(counter >= number) {
      slowPointer = slowPointer.next;
    }
  }
  return slowPointer;
};
