// ------------------------------------------------------------------(1)Create a node add 5 nodes 
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     addData(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     pir(){
//         let current = this.head;
//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const linkedList = new LinkedList();
// linkedList.addData(1);
// linkedList.addData(2);
// linkedList.addData(3);
// linkedList.addData(4);
// linkedList.addData(5);

// linkedList.pir();


// --------------------------------------------------------------------(2)Delete a node from end and pront 


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     AppEnd(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }
//     deleteEnd() {
       
//         if (!this.head.next) {
//             this.head = null;
//             return;
//         }
//         let current = this.head;
//         let prev = null;
//         while (current.next) {
//             prev = current;
//             current = current.next;
//         }
//         prev.next = null;
//     }
//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }
// const oneList = new LinkedList();
// oneList.AppEnd(5);
// oneList.AppEnd(10);
// oneList.AppEnd(15);
// oneList.AppEnd(20);
// oneList.AppEnd(25);
// oneList.AppEnd(30);
// oneList.deleteEnd();
// oneList.printList();


//---------------------------------------------------------------------(3)Check Palindrom   Link : 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

  
// var Palindrom = function(head){
//     var str1 = "";
//     var str2 = "";
//     var current = head;
//     while(current!= null){
//        str1 = current +  current.val;
//        current = current.val  + str2;
//        current = current.val ;
//     }
//     return str1==str2;
// };


//--------------------------------------------------------------------------(4)Delete without head 

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// function deleteNode(node) {
//     if (node === null || node.next === null) {
//         return; 
//     }
//     node.val = node.next.val;
//     node.next = node.next.next;
// }

// const head = new ListNode(4);
// head.next = new ListNode(5);
// head.next.next = new ListNode(1);
// head.next.next.next = new ListNode(9);

// let nodeToDelete = head.next; 
// deleteNode(nodeToDelete);

// let current = head;
// while (current !== null) {
//     console.log(current.val);
//     current = current.next;
// }
