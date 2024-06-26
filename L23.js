
// // Function to create a new queue
// function createQueue() {
//     const items = [];

//     // Enqueue: Add an element to the rear of the queue
//     function enqueue(element) {
//         items.push(element);
//     }

//     // Dequeue: Remove an element from the front of the queue
//     function dequeue() {
//         if (isEmpty()) {
//             return "Underflow";
//         }
//         return items.shift();
//     }

//     // Peek: Get the element at the front of the queue
//     function peek() {
//         if (isEmpty()) {
//             return "Queue is empty";
//         }
//         return items[0];
//     }

//     // isEmpty: Check if the queue is empty
//     function isEmpty() {
//         return items.length === 0;
//     }

//     // Size: Get the number of elements in the queue
//     function size() {
//         return items.length;
//     }

//     // Print: Print all the elements in the queue
//     function print() {
//         let str = "";
//         for (let i = 0; i < items.length; i++) {
//             str += items[i] + " ";
//         }
//         return str;
//     }

//     // Return public methods
//     return {
//         enqueue,
//         dequeue,
//         peek,
//         isEmpty,
//         size,
//         print
//     };
// }

// // Example usage
// const queue = createQueue();
// console.log(queue.isEmpty()); // true
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.print()); // 10 20 30
// console.log(queue.size()); // 3
// console.log(queue.peek()); // 10
// queue.dequeue();
// console.log(queue.print()); // 20 30













// function Createqueue() {

//     const items = [];

//     // enqueue : Add an element to rear of the queue

//     function enque(ele) {
//         items.push(ele)
//     }

//     // deque : remove an element from the front
//     function deque() {
//         if (items.length === 0) {
//             return " underflow"
//         } else {
//             return items.shift()
//         }
//     }

//     // peake element
//     function peek() {
//         if (items.length == 0) {
//             return "queue is empty"
//         } else {
//             console.log(items[0], "peek element")
//         }

//     }



//     function size() {
//         console.log(items.length, "size")
//     }

//     function print() {
//         let str = ""
//         for (let i = 0; i < items.length; i++) {
//             str += items[i] + " "
//         }
//         console.log(str)
//     }


//     return { enque, print, deque, peek, size }

// }



// let myFun = Createqueue();

// myFun.enque(3)
// myFun.enque(4)
// myFun.enque(5)

// myFun.deque()

// myFun.peek()

// myFun.size()






// myFun.print()

































///////////////////////////////////////////////////////////////

// Queur dAta structure

// function QueueData() {

//     let queue = [];
//     //enque : add data from back

//     function enqueue(ele) {
//         queue.push(ele)
//     }

//     // dequeue : remove data from front

//     function dequeue() {
//         if (queue.length === 0) {
//             console.log("underflow")
//         } else {
//             queue.shift()
//         }

//     }

//     // peek element : first element of queue
//     function peek() {
//         if (queue.length == 0) {
//             console.log("queue is underflow")
//         } else {
//             console.log("Peek element is", queue[0])
//         }
//     }


//     function print() {
//         let str = "";
//         for (let i = 0; i < queue.length; i++) {
//             str += queue[i] + " "
//         }
//         console.log(str)
//     }




//     return { enqueue, print, dequeue, peek }
// }



// let mainFun = QueueData()

// mainFun.enqueue(5)
// mainFun.enqueue(7)
// mainFun.enqueue(9)
// mainFun.enqueue(0)
// mainFun.enqueue(87)

// mainFun.dequeue()
// mainFun.peek()

// mainFun.print()





// create stack using ques


function createStackUsingQueues() {
    let queue1 = [];
    let queue2 = [];

    function push(x) {
        // Add the new element to queue1
        queue1.push(x);
    }

    function pop() {
        // Move all elements except the last one from queue1 to queue2
        while (queue1.length > 1) {
            queue2.push(queue1.shift());
        }
        // Pop and return the last element from queue1
        const popped = queue1.shift();
        
        // Swap queue1 and queue2
        [queue1, queue2] = [queue2, queue1];
        
        return popped;
    }

    function top() {
        // Move all elements except the last one from queue1 to queue2
        while (queue1.length > 1) {
            queue2.push(queue1.shift());
        }
        // Get the last element from queue1
        const topElement = queue1[0];

        // Move the last element to queue2
        queue2.push(queue1.shift());
        
        // Swap queue1 and queue2
        [queue1, queue2] = [queue2, queue1];
        
        return topElement;
    }

    function empty() {
        return queue1.length === 0;
    }

    return { push, pop, top, empty };
}

// Example usage:
const stack = createStackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top());   // Output: 3
console.log(stack.pop());   // Output: 3
console.log(stack.empty()); // Output: false
console.log(stack.pop());   // Output: 2
console.log(stack.pop());   // Output: 1
console.log(stack.empty()); // Output: true

