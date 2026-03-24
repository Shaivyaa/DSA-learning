// Add at head

function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}

addAtHead(5);

// Add to tail

function addToTail(val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  this.size++;
}

// Add at index
// addAtIndex(2,6) - need to add before index 2 and add value 6

function addAtIndex(index, val) {
  if (index < 0 || index >= size) return;

  let newNode = new Node(val);

  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addToTail(val);
  } else {
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
}
