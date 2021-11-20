class Array {
  constructor(){
    this.length = 0;
    this.data = {}
  }

  show() {
   if (this.length) {
     let array_string = "[";
     for (let i = 0; i < this.length - 1; i++) {
       array_string += this.data[i] + ", ";
     }
     array_string += this.data[this.length - 1] + "]";
     console.log(array_string);
   } else {
     console.log("[]")
   }
  }

  append(value) {
    this.data[this.length] = value;
    this.length++;
    return this.data
  }

  pop() {
    if (this.length) {
      delete this.data[this.length - 1];
      this.length--;
    } else {
      throw "Array is empty"
    }
  }

  remove(index) {
    if (0 <= index && index <= this.length) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    } else {
      throw "Index out of range"
    }
  }

  insert(value, index) {
    if (0 <= index && index <= this.length) {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = value;
    this.length++;
    } else {
      throw "Index out of range"
    }
  }

 find(value) {
    for (let i = 0; i < this.length; i++){
      if (this.data[i] === value) return i;
    }
  }

  reverse() {
    for (let i = 0; i < this.length/2; i++) {
      let temp = this.data[this.length - i - 1];
      this.data[this.length - i - 1] = this.data[i];
      this.data[i] = temp;
    }
  }

}

var my_array = new Array()
my_array.append(1)
my_array.append(2)
my_array.append(3)
my_array.append(4)
my_array.append(5)
my_array.show()
my_array.remove(2)
my_array.append(3)
my_array.show()
console.log(my_array.find(4))
my_array.reverse()
my_array.show()
my_array.insert("a", 2)
my_array.show()
my_array.pop()
my_array.pop()
my_array.pop()
my_array.pop()
my_array.pop()
my_array.pop()
my_array.show()

my_array.insert(3)
