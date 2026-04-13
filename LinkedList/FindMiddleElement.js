// Find the middle element -

// For even elements -> for this we will use slow and fast pointer approach, so slow pointer will move one step at a time and fast pointer will move 2 step at a point, so when fast pointer will reach null then the position at which slow pointer will stay that will be the middle element

// For odd elements - if fast reached the last element we will stop it and so when fast pointer will reach last then the position at which slow pointer will stay that will be the middle element

function findMiddleElement(head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
