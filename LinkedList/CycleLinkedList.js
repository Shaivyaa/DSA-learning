function linkedListCycle(head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr !== null) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
}

TC - O(n);
SC - O(n);
