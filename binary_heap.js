class BinaryHeap {
  constructor() {
    this.data = new Array();
  }

  parentIndex(index) {
    if (index < 0) throw "Index must be positive"
    const parent = Math.floor((index-1)/2);
    if (parent < 0) return null;
    return parent;
  }
  
  leftChildIndex(index) {
    if (index < 0) throw "Index must be positive"
    const child = Math.floor((2*index) + 1);
    if (child > this.data.length - 1) return null;
    return child;
  }
  
  rightChildIndex(index) {
    if (index < 0) throw "Index must be positive"
    const child = Math.floor((2*index) + 2);
    if (child > this.data.length - 1) return null;
    return child;
  }

  swap(index1, index2) {
    const tempValue = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = tempValue;
  }

  insert(value) {
    this.data.push(value);
    let newItemIndex = this.data.length - 1;
    let parentIndex = this.parentIndex(newItemIndex);
    //Max Heap
    while(this.data[newItemIndex] > this.data[parentIndex]) {
      this.swap(newItemIndex, parentIndex);
      newItemIndex = parentIndex;
      parentIndex = this.parentIndex(newItemIndex);
    }
  }

  increaseKey(index) {
    this.data[index] = Infinity;
    let currentIndex = index;
    let parentIndex = this.parentIndex(index);
    //Max Heap
    while(this.data[currentIndex] > this.data[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parentIndex(currentIndex);
    }
  }

  heapfy(rootIndex) {
    //maxHeap
    const leftIndex = this.leftChildIndex(rootIndex);
    const rightIndex = this.rightChildIndex(rootIndex);
    if (leftIndex === null && rightIndex === null) {
      return
    } else if (this.data[leftIndex] > this.data[rootIndex]) {
      this.swap(leftIndex, rootIndex);
      this.heapfy(leftIndex);
    } else if (this.data[rightIndex] > this.data[rootIndex]) {
      this.swap(rightIndex, rootIndex);
      this.heapfy(rightIndex);
    } else {
      return
    }
  }

  remove(index) {
    this.increaseKey(index);
    this.swap(0, this.data.length - 1);
    this.data.pop()
    this.heapfy(0);
  }
}

let heap = new BinaryHeap();
console.log(heap)

heap.insert(100)
heap.insert(90)
heap.insert(110)
heap.insert(10)
heap.insert(20)
heap.insert(115)
console.log(heap)

heap.remove(4)
console.log(heap)
