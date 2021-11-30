const ALPHABET_SIZE = 26;
const FIRST_LETTER_CODE = 'a'.charCodeAt(0);

class TrieNode {
  constructor(value) {
    this.value = value ?? false;
    this.alphabet = new Array(ALPHABET_SIZE).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  _wordToArray(word) {
    const lowerCaseWord = word.toLowerCase();
    let wordArray = new Array();

    for (let i = 0; i < lowerCaseWord.length; i++) {
      let code = lowerCaseWord.charCodeAt(i) - FIRST_LETTER_CODE;
      wordArray.push(code);
    }

    return wordArray;
  }

  insert(word) {
    const wordArray = this._wordToArray(word);

    let currentNode = this.root;
    for (let i = 0; i < wordArray.length; i++) {
      let letterCode = wordArray[i];
      if (currentNode.alphabet[letterCode] === null) currentNode.alphabet[letterCode] = new TrieNode();
      currentNode = currentNode.alphabet[letterCode];
    }

    currentNode.value = true;
  }

  search(word) {
    const wordArray = this._wordToArray(word);

    let currentNode = this.root;
    for(let i = 0; i < wordArray.length; i++){
      let letterCode = wordArray[i];
      if (currentNode.alphabet[letterCode] === null) return false;
      currentNode = currentNode.alphabet[letterCode];
    }
    if (currentNode.value === true) return true
    return false
  }

  allWords(prefix = "", root = this.root) {
    let words = [];
    if (root.value) words.push(prefix)

    if (root === null) return words;

    for(let i = 0; i < root.alphabet.length; i++) {
      if (root.alphabet[i] === null) continue
      let words_to_concat = this.allWords(prefix + String.fromCharCode(i + FIRST_LETTER_CODE), root.alphabet[i])
      words = words.concat(words_to_concat);
    }
    return words;
  }

  keysWithPrefix(prefix) {
    const prefixArray = this._wordToArray(prefix);
    let keys = [];

    let currentNode = this.root;
    for(let i = 0; i < prefixArray.length; i++){
      let letterCode = prefixArray[i];
      if (currentNode.alphabet[letterCode] === null) return null;
      currentNode = currentNode.alphabet[letterCode];
    }

    keys = keys.concat(this.allWords(prefix, currentNode))

    return keys
  }
}

let myTrie = new Trie();

myTrie.insert("surplus");
myTrie.insert("surprise");
myTrie.insert("surreal");
myTrie.insert("surrealism");
myTrie.insert("surrender");
myTrie.insert("as");
myTrie.insert("it");
myTrie.insert("goes");
myTrie.insert("assign");


let words = myTrie.keysWithPrefix("sur");
console.log(words)

let dict = myTrie.keysWithPrefix("");
console.log(dict)

console.log(myTrie.search("sell"));
