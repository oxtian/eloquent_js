// the ability to store data and the ability to point to another node
function Node(data) {
  this.data = data;
  this.next = null;
}

function linkedList() {
  // the node at the front of the list
  this.head = null;
}

linkedList.prototype.add = function(value) {
  var node = new Node(value);
  var currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
    // assign node as head of the list
    this.head = node;

    return node;
  }

  // 2nd use-case: a non-empty list
  // we evaluate if currentNode.next points to another node
  while (currentNode.next) {
    // reassign currentNode to currentNode.next until it no longer points to another node
    currentNode = currentNode.next;
  }

  // if no, assign node to currentNode.next and return node
  currentNode.next = node;

  return node;
}

var newList = new linkedList;
newList.add(1);
newList.add(2);
newList.add(3);

console.log(newList);
console.log(newList.head);
