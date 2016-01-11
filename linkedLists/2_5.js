//Reverse order
function sumLists(list1, list2) {
  var num1 = '';
  var num2 = '';
  var current1 = list1.head;
  while(current1) {
    num1 = current1.data + num1;
    current1 = current1.next;
  }
  var current2 = list2.head;
  while(current2) {
    num2 = current2.data + num2;
    current2 = current2.next;
  }
  var list = new LinkedList();
  var result = Number(num1) + Number(num2);
  while(result > 0) {
    list.append(result % 10);
    result = Math.floor(result / 10);
  }
  return list;
}

//Forward order
function sumLists(list1, list2) {
  var num1 = '';
  var num2 = '';
  var current1 = list1.head;
  while(current1) {
    num1 += current1.data;
    current1 = current1.next;
  }
  var current2 = list2.head;
  while(current2) {
    num2 += current2.data;
    current2 = current2.next;
  }
  var list = new LinkedList();
  var result = Number(num1) + Number(num2);
  console.log(result);
  while(result > 0) {
    list.append(result % 10);
    result = Math.floor(result / 10);
  }
  return list;
}
