



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

//     // method to add a data in the start of lined list

//     addData(data) {
//         // const newNode = new Node(data);
//         const nayaNode = new Node(data)
//         if (this.head === null) {
//             this.head = nayaNode
//         } else {
//             let currValue = this.head;
//             while (currValue.next !== null) {
//                 currValue = currValue.next
//             }
//             currValue.next = nayaNode
//         }
//     }


//     // ADD first data
//     AddFirstData(data) {
//         const newNode = new Node(data)
//         newNode.next = this.head;
//         this.head = newNode
//     }


//     // remove from the top of linked list

//     removeTop() {
//         if (!this.head) {
//             return
//         }
//         this.head = this.head.next
//     }

//     removeLast() {
//         if (!this.head) {
//             return; // List is empty, nothing to remove
//         }

//         // If the list contains only one node
//         if (!this.head.next) {
//             this.head = null; // Set head to null to make the list empty
//             return;
//         }

//         let currVal = this.head;
//         while (currVal.next.next) {
//             currVal = currVal.next;
//         }

//         currVal.next = null; // Remove the last node
//     }
// }


// const myList = new LinkedList()

// myList.addData(75)
// myList.addData(98)
// myList.addData(987)
// myList.addData(7687)

// myList.AddFirstData(9876)

// myList.removeTop()

// myList.removeLast()


// let curr = myList.head

// while (curr !== null) {
//     console.log(curr.data)
//     curr = curr.next
// }


// // add node to the linked list

// const node1 = new Node(10);
// const node2 = new Node(20);
// const node3 = new Node(43)

// node1.next = node2
// node2.next = node3

// console.log(node1.data)
// console.log(node2.data)
// console.log(node3.data)







// linked list



// class Node {
//     constructor(){

//     }
// }



// function user(name, email, password) {
//     this.name = name,
//         this.email = email,
//         this.password = password

// }

// const user1 = new user("babalu", "babalu@gmail,com", "babalulovesfood")
// const user2 = new user("dabalu", "dabalu@gmail,com", "eabalulovesfood")
// const user3 = new user("eabalu", "fabalu@gmail,com", "bdaabalulovesfood")
// const user4 = new user("fabalu", "sabalu@gmail,com", "babdasaalulovesfood")
// const user5 = new user("jabalu", "tabalu@gmail,com", "babalulasfovesfood")

// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)
// console.log(user5)



class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinedList {
    constructor() {
        this.head = null;
    }

    AddData(data) {

        const nayaNode = new Node(data);
        if (this.head === null) {
            nayaNode.next = this.head
            this.head = nayaNode
        } else {

            let currentValue = this.head
            while (currentValue.next !== null ) {
                currentValue = currentValue.next
            }
            currentValue.next = nayaNode

        }

    }


    RemoveData() {
        this.temp = this.head
        this.head = this.head.next
        return this.temp
    }

}


const myLinkedList = new LinedList();
myLinkedList.AddData(234)
myLinkedList.AddData(34)
myLinkedList.AddData(24)
myLinkedList.AddData(6634)
myLinkedList.AddData(23874)
myLinkedList.AddData(2134)
myLinkedList.AddData(4)


myLinkedList.RemoveData()





let currentVal = myLinkedList.head
while (currentVal !== null) {
    console.log(currentVal.data)
    currentVal = currentVal.next
}



// node , linked list data add, remove karna hai




























// const node1 = new Node(87);
// const node2 = new Node(32);
// const node3 = new Node(3765)

// console.log(node1.data)
// console.log(node2.data)
// console.log(node3.data)



