function isPalindrome(head) {
  if(!head) return null;

  var stack = [];
  var slow = head;
  var fast = head;

  while(fast && fast.next) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  if(fast) slow = slow.next;

  while(stack.length) {
    var popped = stack.pop();
    if(popped !== slow.data) return false;
    slow = slow.next;
  }

  return true;
}
