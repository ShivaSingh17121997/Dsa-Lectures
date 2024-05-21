
// Function to create a new queue
function createQueue() {
    const items = [];

    // Enqueue: Add an element to the rear of the queue
    function enqueue(element) {
        items.push(element);
    }

    // Dequeue: Remove an element from the front of the queue
    function dequeue() {
        if (isEmpty()) {
            return "Underflow";
        }
        return items.shift();
    }

    // Peek: Get the element at the front of the queue
    function peek() {
        if (isEmpty()) {
            return "Queue is empty";
        }
        return items[0];
    }

    // isEmpty: Check if the queue is empty
    function isEmpty() {
        return items.length === 0;
    }

    // Size: Get the number of elements in the queue
    function size() {
        return items.length;
    }

    // Print: Print all the elements in the queue
    function print() {
        let str = "";
        for (let i = 0; i < items.length; i++) {
            str += items[i] + " ";
        }
        return str;
    }

    // Return public methods
    return {
        enqueue,
        dequeue,
        peek,
        isEmpty,
        size,
        print
    };
}

// Example usage
const queue = createQueue();
console.log(queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.print()); // 10 20 30
console.log(queue.size()); // 3
console.log(queue.peek()); // 10
queue.dequeue();
console.log(queue.print()); // 20 30













function Createqueue() {

    const items = [];

    // enqueue : Add an element to rear of the queue

    function enque(ele) {
        items.push(ele)
    }

    // deque : remove an element from the front 
    function deque() {
        if (items.length === 0) {
            return " underflow"
        } else {
            return items.shift()
        }
    }

    // peake element
    function peek() {
        if (items.length == 0) {
            return "queue is empty"
        } else {
            console.log(items[0], "peek element")
        }

    }



    function size() {
        console.log(items.length, "size")
    }

    function print() {
        let str = ""
        for (let i = 0; i < items.length; i++) {
            str += items[i] + " "
        }
        console.log(str)
    }


    return { enque, print, deque, peek, size }

}



let myFun = Createqueue();

myFun.enque(3)
myFun.enque(4)
myFun.enque(5)

myFun.deque()

myFun.peek()

myFun.size()






myFun.print()
