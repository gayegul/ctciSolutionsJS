function doPartition(val, list) {
  var left;
  if(list.head.data < val) {
    left = list.head;
  }
  else {
    left = list.head;
    var state = true;
    while(state) {
      left = left.next;
      if(left.data < val) state = false;
    }
  }
  var current = left.next;
  var prev = left;
  while(current.next) {
    current = current.next;
    prev = prev.next;
    if(current.data < val && current.next) {
      prev.next = current.next;
      current.next = left.next;
      left.next = current;
      current = prev.next;
    }
  }
  if(current.data < val) {
    current.next = left.next;
    left.next = current;
    prev.next = null;
  }
  return list;
}
