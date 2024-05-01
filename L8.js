



// function PrimeNumber(num) {
//     let isPrime = true;

//     if (num <= 1) {
//         return console.log(num, " is not a prime number")
//     }
//     else if (num > 1) {
//         for (let i = 2; i < num; i++) {
//             if ((num % i) === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     isPrime ? console.log(num, " is a prime number") : console.log(num, " is not a prime number")


// }

// PrimeNumber(77)

/////////////////////////////////////////////////////////
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}



class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }


    addLast() {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }

        let current = this.head;
        while (current.next) {
            current = current.next
        }

        current.next = newNode;

    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }


    addAt(index, data) {
        if (index < 0 || index.this.size()) {
            console.error("Invalid Index")
            return;
        }
    }



}
















////////////////////////////////////////////////////////////






1. find the reverse of an array
arr = [2, 33, 45, 44, 55, 44]

2. check if the number is palindrom or not
let num = "87654"

3.traverse Z pattern in 2D array
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 1,2,3,5,7,8,9 output

4 check if the stirng is anagram or not
str = "babalu"
str = "secure"

5. sort the array

arr = [-1, 0, 4, 3, 55, 33, 55]

6. check if  the numebr is  prime numbver or not 