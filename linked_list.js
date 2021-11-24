class Node {
  constructor(value, next){
    this.value = value ?? null,
    this.next =  next ?? null
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _firstInsert(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length++;
    return value;
  }

  append(value) {
    if (!this.head) return this._firstInsert(value);

    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return value;
  }

  prepend(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
    return value;
  }

  show() {
    if (this.length === 0) { console.log("[] ", this.length); return }

    let list = [];
    let currentNode = this.head;

    while(currentNode.next) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    list.push(this.tail.value);

    console.log(list, this.length);
  }

  insert(index, value) {
    if (typeof index !== 'number' || index <= 0 || index > this.length) throw "Error: index must be a positive number less than length"
    if ( index === 0 ) {
      this.head = new Node(value, this.head);
      this.length++;
      return
    }

    let node = this.traverseToIndex(index - 1);
    let newNode = new Node(value, node.next);
    node.next = newNode;
    this.length++;
  }

  remove(index) {
    if (typeof index !== 'number' || index < 0 || index > this.length) throw "Error: index must be a positive number less than length"
    if (index === 0) {
      this.head = this.head.next
      this.length--;
      return
    }

    let previousNode = this.traverseToIndex(index - 1);
    let nextNode = previousNode.next.next;
    delete previousNode.next;
    previousNode.next = nextNode;
    this.length--;
  }

  traverseToIndex(index) {
    if (typeof index !== 'number' || index < 0 || index > this.length) throw "Error: index must be a positive number less than length"
 
    let i = 0;
    let currentNode = this.head;
    while(i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }
}

let list = new LinkedList();

list.append("0")
list.append("1")
list.append("2")
list.append("3")
list.append("4")
list.append("5")
list.show()
list.prepend("-1")
list.append("*8")
list.show()

list.insert(2,"9")
list.show()
list.remove(2)
list.show()

console.log(list);
console.log("head: ",list.head);
console.log("tail: ",list.tail);
