function hasCycle(list) {
  if(!list) return false;
  var current = list.head;
  while(current) {
    if(!current.seen) current.seen = true;
    else return current;
    current = current.next;
  }
  return false;
}
