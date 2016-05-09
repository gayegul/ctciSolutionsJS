// Reverse order
function addLists(head1, head2) {
  if(!head1 && !head2) return null;
  var length1 = getLength(head1);
  var length2 = getLength(head2);
  if(length1 < length2) {
    head1 = padList(head1, length2 - length1);
  } else {
    head2 = padList(head2, length1 - length2);
  }
  return sum(head1, head2);
}

function sum(head1, head2) {
  var leftover = 0;
  var digit = 0;
  var head = null;
  var current1 = head1;
  var current2 = head2;
  while(current1) {
    digit = current1.data + current2.data;
    if(leftover) digit += leftover;
    if(digit > 9) leftover = 1;
    var node = new Node(digit % 10);
    if(!head) {
      head = node;
      tail = node;
    }
    else {
      tail.next = node;
      tail = node;
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  if(leftover) {
    var lastNode = new Node(leftover);
    tail.next = lastNode;
  }
  return head;
}

function getLength(head) {
  if(!head) return 0;
  var length = 1;
  var current = head;
  while(current.next) {
    length++;
    current = current.next;
  }
  return length;
}

function padList(head, k) {
  if(!k || k < 0) return head;
  var tail = head;
  while(tail.next) {
    tail = tail.next;
  }
  while(k) {
    var node = new Node(0);
    tail.next = node;
    tail = node;
    k--;
  }
  return head;
}

var Node = function(data) {
  this.data = data;
  this.next = null;
};
