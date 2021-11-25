class Node {
  constructor(value, next){
    this.value = value ?? null;
    this.next = next ?? null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _firstInsert(value) {
    if (this.head) throw "Queue not empty"
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  enqueue(value){
    if (this.length === 0 ) return this._firstInsert(value);
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  dequeue(){
    //Remove from head
    if (!this.head) return
    this.head = this.head.next;
    this.length--;
  }

  peek(){}
}

let myQueue = new Queue();
myQueue.enqueue("1");
myQueue.enqueue("2");
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue)
