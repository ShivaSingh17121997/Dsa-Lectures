// queue data structure
function queueMthods() {

    let queue = [];

    // enque: when add data is known as enque

    function enque(ele) {
        queue.push(ele)
    };

    // deque
    function Dequeue() {

        if (queue.length === 0) {
            console.log("bhaiya kuch nahi bacha sab ud gaya")
        } else {
            queue.shift()
        }

    }

    // peek element 
    function Peek() {
        if (queue.length === 0) {
            console.log("sab gaya, kuch nahi bacha")
        } else {
            console.log("Peek element is ", queue[0])
        }

    }

    // size of the queue
    function size() {
        console.log("Size of the queue is ", queue.length)
    }





    function print() {
        let str = ""
        for (let i = 0; i < queue.length; i++) {
            str += queue[i] + " "
        }
        console.log(str)
    }

    return { enque, print, Dequeue, Peek, size }

}


let mainFun = queueMthods()
mainFun.enque(1)
mainFun.enque(11)
mainFun.enque(13)
mainFun.enque(15)
mainFun.enque(19)
mainFun.enque(10)



// mainFun.Dequeue()
mainFun.Peek()
mainFun.size()

mainFun.print()
