class ListNode {
constructor(val, next = null) {
    this.val = val;
    this.next = next;
}
}

function isPalindrome(head) {
if (!head || !head.next) {
    return true;
}

let slow = head;
let fast = head;
while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
}

let prev = null;
let current = slow;
while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
}

let firstHalf = head;
let secondHalf = prev;
while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
        return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
}

return true;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
