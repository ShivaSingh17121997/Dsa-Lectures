



//   Linked List

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// const node1 = new Node(23);
// const node2 = new Node(51);
// const node3 = new Node(876)

// node1.next = node2
// node2.next = node3

// console.log(node1.data)
// console.log(node2.data)
// console.log(node3.data)



// class LinedList {

//     constructor() {
//         this.head = next;
//     }

//     AddData(data) {

//         const newNode = new Node(data);

//         newNode.next = head;
//         head = newNode

//         // if (head.next === null) {

//         // }

//     }
// }

// const myLinkedList = new LinedList()
// myLinkedList.AddData(12)


// function push(new_data)
// {
//     /* 1 & 2: Allocate the Node &
//               Put in the data*/
//     var new_node = new Node(new_data);

//     // Make next of new Node as head 
//     new_node.next = head;

//     // 4. Move the head to point to new Node 
//     head = new_node;
// }

// push(12)





/////////////////////////////////////////////////////////////////////////////////////////



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class LinkedList {
    constructor(data) {
        this.head = null
    }

    AddData(data) {

        const newNode = new Node(data)

        if (this.head == null) {
            this.head = newNode
        } else {
            let currentVal = this.head;
            while (currentVal.next !== null) {
                currentVal = currentVal.next
            }
            currentVal.next = newNode

        }

    }


    Removedata() {
        this.head = this.head.next
    }

    RemoveLast() {
        if (this.head === null) {
            return
        }

        // if list contain only one element
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let currentval = this.head
        let prevNode = null;
        while (currentval.next !== null) {
            prevNode = currentval
            currentval = currentval.next
        }
        prevNode.next = null
    }

}


let myList = new LinkedList()
myList.AddData(23)
myList.AddData(87)
myList.AddData(897)
myList.AddData(879)
// myList.Removedata()
myList.RemoveLast()
myList.RemoveLast()



let curr = myList.head;
while (curr !== null) {
    console.log(curr.data)
    curr = curr.next
}















