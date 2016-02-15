// function intersect(list1, list2) {
//   var seen = {};
//   var current = list1.head;
//   while(current) {
//     if(!seen[current]) seen[current] = current;
//     current = current.next;
//
//     console.log(current);
//   }
//   current = list2.head;
//   while(current) {
//     if(!seen[current]) seen[current] = current;
//     if(seen[current]) return current;
//     current = current.next;
//   }
//   return false;
// }

function intersect(list1, list2) {
  if(!list1 || !list2) return null;
  var current = list1.head;
  while(current) {
    if(!current.seen) current.seen = true;
    current = current.next;
  }
  current = list2.head;
  while(current) {
    if(current.seen) return current;
    current = current.next;
  }
  return null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

LinkedList.prototype.append = function(data) {
  if(data === undefined) return null;
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
  }
  else {
    this.tail.next = node;
  }
  this.tail = node;
};

var list1 = new LinkedList();
var int = new Node(3);
var one = new Node(1);
var two = new Node(2);

list1.head = one;
list1.head.next = two;
list1.head.next.next = int;

var list2 = new LinkedList();
var four = new Node(4);
var five = new Node(5);
list2.head = four;
list2.head.next = five;
list2.head.next.next = int;

intersect(list1, list2);

var list3 = new LinkedList();
var int2 = new Node(3);
var one2 = new Node(1);
var two2 = new Node(2);

list3.head = one2;
list3.head.next = two2;
list3.head.next.next = int2;

var list4 = new LinkedList();
var four2 = new Node(4);
var five2 = new Node(5);
list4.head = four2;
list4.head.next = five2;

intersect(list3, list4);
