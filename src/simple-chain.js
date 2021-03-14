const chainMaker = {
  head: null,
  length: 0,

  getLength() {
    return this.length;
  },

  addLink(value = "") {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      // set current to last element
      while (current.next) {
          current = current.next;
      }
      current.next = node;
    }
    
    this.length++;
    return this;
  },

  removeLink(position) {
    if (!isFinite(position) || position%1 || position > this.length) {
      this.resetChainMaker();
      throw new Error("wrong position");
    }

     //set current before deleting element
    let current = this.head;
    for (let i=0; i<position-2; i++) {
      current = current.next;
    }

    if (position === 1) {
      this.head = this.head.next;
    } else if( position === this.length) {
      current.next = null;
    } else {
      current.next = current.next.next;
    }

    this.length--;
    return this;
  },

  reverseChain() {
    // if 0 or 1 element
    if (!this.head || !this.head.next) return this;

    let prev = this.head;
    let next = this.head.next;
    prev.next = null;
    
    while (next != null) {
      prev = this.head;
      this.head = next;
      next = this.head.next;
      this.head.next = prev;
    }

    return this;
  },

  finishChain() {
    let chain = this.head ? "( " + this.head.value + " )" : "";
    let current = this.head.next;

    while (current) {
      chain += "~~( " + current.value + " )";
      current = current.next;
    } 

    this.resetChainMaker();
    return chain;
  },

  resetChainMaker() {
    this.head = null;
    this.length = 0;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = chainMaker;