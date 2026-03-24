// Delete an element

// Steps
// 1- reach the (index-1) for delete
// 2- link it to the next node just after the one which we need to delete
// 3- handle corner cases
// 4- reduce the size

function deleteElement(index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  return this.size--;
}
