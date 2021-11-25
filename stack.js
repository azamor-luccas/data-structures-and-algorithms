class Node {
  constructor(value, next){
    this.value = value ?? null;
    this.next = next ?? null;
  }
}

class Stack {
  constructor(){
    this.head = null;
    this.length = 0;
  }
 
  pop(){
    if (this.length === 0) throw "Stack is empty"
    // Removes the head
    this.head = this.head.next;
    this.length--;
  }

  push(value){
    // Linked list prepend
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }
  
  peek(){
    return this.head.value;
  }
}

let myStack = new Stack();
myStack.push("1");
console.log(myStack);
myStack.push("2")
myStack.push("3")
console.log(myStack);
let peek = myStack.peek();
console.log(peek);
myStack.pop();
console.log(myStack)
