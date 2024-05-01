// // // //Linked list
// // // class Node {
// // //     constructor(data) {
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }

// // // const node1 = new Node(10);
// // // const node2 = new Node(20);
// // // const node3 = new Node(30);

// // // node1.next = node2;
// // // node2.next = node3;

// // // console.log(node1.data); // Output: 10
// // // console.log(node1.next.data); // Output: 20
// // // console.log(node1.next.next.data); // Output: 30
// // /////////////////////////////////////////////////////////////////////////////

// // // class Node {
// // //     constructor(data) {
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }

// // // // const node1 = new Node(200)
// // // // console.log(node1.data);

// // // class LinkedListss {
// // //     constructor(){
// // //         this.head = null
// // //     }

// // //     addData (data){
// // //         const newNodes = new Node(data);
// // //         if(this.head === null ){
// // //             this.head = newNodes
// // //         } else {
// // //             let curr = this.head;
// // //             while(curr.next !== null){
// // //                 curr = curr.next
// // //             }
// // //             curr.next = newNodes
// // //         }
// // //     }
// // // }

// // // const mYlinkedList = new LinkedListss()
// // // mYlinkedList.addData(10)
// // // mYlinkedList.addData(40)
// // // mYlinkedList.addData(60)

// // // let currenrt = mYlinkedList.head

// // // while (currenrt !==  null){
// // //     console.log(currenrt.data)
// // //     currenrt = currenrt.next
// // // }

// // //////////////////////////////////////////////////////////


// // // adda a value in node.......................................


// // // class Node {
// // //     constructor(data) {
// // //         this.data = data;
// // //         this.next = null;
// // //     }
// // // }

// // // class LinkedList {
// // //     constructor() {
// // //         this.head = null;
// // //     }

// // //     // Method to add a new node to the end of the linked list
// // //     append(data) {
// // //         const newNode = new Node(data);
// // //         if (this.head === null) {
// // //             this.head = newNode;
// // //         } else {
// // //             let current = this.head;
// // //             while (current.next !== null) {
// // //                 current = current.next;
// // //             }
// // //             current.next = newNode;
// // //         }
// // //     }
// // // }

// // // // Create a new linked list instance
// // // const myList = new LinkedList();

// // // // Add nodes to the linked list
// // // myList.append(10);
// // // myList.append(20);
// // // myList.append(30);

// // // // Print the linked list
// // // let current = myList.head;
// // // while (current !== null) {
// // //     console.log(current.data);
// // //     current = current.next;
// // // }



// // // class Node {

// // //     constructor(data) {
// // //         this.data = data;
// // //         this.nesxt = null;
// // //     }

// // // }

// // // let node1 = new Node(1)
// // // let node2 = new Node(22)
// // // let node3 = new Node(12)

// // // node1.next = node2
// // // node2.next = node3

// // // console.log(node1.data)
// // // console.log(node2.data)
// // // console.log(node3.data)















// // ///////////////////////////////////////////////////////////////////








// // ////////////////////////////////////////////////////////////////////////////////////



// // // // let arr=[
// // //     [1,2,3],
// // //     [4,5,6],
// // //     [7,8,9],
// // // ];
// // // let revers=[];
// // // for(let i=0;i<arr.length;i++){
// // //     if(i%2===1){
// // //         for(let j=arr.length-1;j>=0;j--){
// // //             revers.push(arr[i][j]);
// // //         }
// // //     }
// // //     else{
// // //         for(let j=0;j<=arr.length-1;j++){
// // //             revers.push(arr[i][j]);
// // //         }
// // //     }
// // // }
// // // console.log(revers);




// // // create node 

//  class Node {
//      constructor(data) {
//          this.data = data;
//          this.next = null
//      }
 
//  // let node1 = new Node(1)
//  // let node2  = new Node(22)
//  // let node3 = new Node(53
//  // node1.next = node2
//  // node2.next = node
//  // console.log(node1.data)
//  // console.log(node2.data)
//  // console.log(node3.data
//   class LinkedList {
//      constructor() {
//          this.head = null;
     
//      // add new node to the end of the linked lis
//      // AddData(data) {
//      //     const newNode = new Node(data)
//      //     if (this.head === null) {
//      //         this.head = newNode
//      //     } else 
//      //         let currVal = this.head
//      //         while (currVal.next !== null) {
//      //             currVal = currVal.next
//      //         }
//      //         currVal.next = newNode;
//      //     }
//      // 
//      AddData(data) {
//          const newNode = new Node(data)
//          if (this.head === null) {
//              this.head = newNode
//          } else {
//              let currVal = this.head
//              while (currVal.next !== null) {
//                  currVal = currVal.next
//              }
//              // Assign the new node to the next property of the last node
//              currVal.next = newNode;
//          }
     
//      deleteList() {
//          this.head = null; 
     
//  }


// // create a new linked list isntance 

// const myList = new LinkedList()
// myList.AddData(34)
// myList.AddData(89)
// myList.AddData(43)

// // print the linked list

// let current = myList.head

// while (current !== null) {
//     // console.log(current.data)
//     current = current.next
// }







//  console.log(myList.head)



//  class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Method to add a node to the end of the list
//     append(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     // Method to delete node from the tail of the list
//     deleteTail() {
//         if (!this.head) {
//             return;
//         }
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

//     // Method to print the linked list
//     printList() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Example usage:
// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);

// console.log("Before deletion:");
// linkedList.printList();

// linkedList.deleteTail();

// console.log("After deletion:");
// linkedList.printList();
