// input 1 → 2 → 3 → 4 → 5 → null
// output 5 → 4 → 3 → 2 → 1 → null

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next; // store next
    curr.next = prev; // reverse link
    prev = curr; // move prev
    curr = next; // move curr
  }

  return prev;
}
