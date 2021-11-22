class HashTable {
  constructor() {
    //Direct Address table
    this.data = new Array(59);
  }

  _hash(key) {
    if (typeof(key) !== 'string') throw "TypeError: key must be a string"
    //polynomial rolling hash
    let hash = 0;
    const p = 53;
    for (let i = 0; i < key.length; i++) {
      hash += (key.charCodeAt(i)*(p**i));
    }
    return hash % this.data.length;
  }

  insert(key, value) {
    // Chaining with Arrays
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return address;
  }

  find(key) {
    const address = this._hash(key);
    const length = this.data[address].length;
    for (let i = 0; i < length; i++) {
      if (this.data[address][i][0] === key ) {
        return this.data[address][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]) continue;
      for (let j = 0; j < this.data[i].length; j++) {
        keys.push(this.data[i][j][0]);
      }
    }
    return keys;
  }
}

const hashTable = new HashTable();
//Collision: "11" and "2"
hashTable.insert('123', 3);
hashTable.insert('11', 2);
hashTable.insert('2', 31);

console.log(hashTable.keys())
console.log(hashTable);
