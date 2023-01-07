/* Add Two Numbers
Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }

  return result.next;
};

function addTwoNumbers(l1, l2) {
  let result = new ListNode(0);
  let current = result;
  let carry = 0;
  while (l1 || l2) {
    l1Val = l1 ? l1.val : 0;
    l2Val = l2 ? l2.val : 0;

    let sum = l1Val + l2Val + carry;

    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    l1 = l1 ? l1.next : null;
    l2 = l1 ? l1.next : null;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  console.log(result.next);
  return result;
}

addTwoNumbers(new ListNode(2), new ListNode(3));
