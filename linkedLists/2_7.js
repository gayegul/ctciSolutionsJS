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
