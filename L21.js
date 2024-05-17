// function Stack() {
//     const stack = [];
//     let overflow = false;

//     // Push operation
//     function push(item) {
//         if (stack.length >= 5) {
//             overflow = true;
//             console.log("Stack Overflow!");
//         } else {
//             stack.push(item);
//             overflow = false;
//         }
//     }

//     // Pop operation
//     function pop() {
//         if (stack.length === 0) {
//             console.log("Stack Underflow!");
//         } else {
//             stack.pop();
//         }
//     }

//     // Peek operation
//     function peek() {
//         if (stack.length === 0) {
//             console.log("Stack is empty");
//         } else {
//             console.log("Top element of stack:", stack[stack.length - 1]);
//         }
//     }

//     // Display the stack
//     function display() {
//         console.log("Stack:", stack);
//     }

//     return { push, pop, peek, display, overflow };
// }

// // Example usage
// const myStack = Stack();
// myStack.push(10);
// myStack.push(20);
// myStack.push(30);
// myStack.push(40);
// myStack.push(50);
// myStack.push(60); // This should trigger stack overflow
// myStack.display();
// myStack.pop();
// myStack.peek();





// // function Stack() {
// //     const stack = [];
// //     let overflow = false;

// //     // push operation 

// //     function push(item) {
// //         if (stack.length >= 5) {
// //             overflow = true;
// //             console.log("stack Overflow ")
// //         } else {
// //             stack.push(item)
// //             overflow = false
// //         }
// //     }


// //     // pop operation 
// //     function pop() {
// //         if (stack.length == 0) {
// //             console.log("stack is underflow")
// //         } else {
// //             stack.pop()
// //         }
// //     }

// //     // peek opetation
// //     function peek() {
// //         if (stack.length === 0) {
// //             console.log('stack is empty')
// //         } else {
// //             console.log("top element is :", stack[stack.length - 1])
// //         }
// //     }

// //     // display the stack

// //     function display() {
// //         console.log(stack, "stack")
// //     }

// //     return { push, pop, peek, display, overflow }

// // }


// // const myyStack = Stack()
// // myStack.push(10)





























// /////////////////////////////////////////////////////////////////////////s
// // console.log("jai ram")
// // console.log("har har mahadev")





// //add element

// // func



// // function stackMethods() {

// //     let stack = [];

// //     function Add(ele) {
// //         if (stack.length > 2) {
// //             console.log("stack overflow")
// //         } else {
// //             stack.push(ele)
// //             console.log(stack)
// //         }
// //     }

// //     //delete

// //     function Delete() {
// //         if (stack.length == 0) {
// //             console.log("Stack is under flow")
// //         } else {
// //             stack.pop();
// //             console.log(stack)
// //         }
// //     }

// //     // peek
// //     function Peek() {
// //         if (stack.length === 0) {
// //             console.log("Stack is underFlow")
// //         } else {
// //             console.log(stack[stack.length - 1])
// //             console.log(stack)
// //         }

// //     }

// //     return { Add, Delete , Peek}

// // }

// // let mainFun = stackMethods()
// // mainFun.Add(10)
// // mainFun.Add(20)
// // mainFun.Add(40)
// // mainFun.Add(20)
// // mainFun.Peek()
// // mainFun.Delete()
// // mainFun.Delete()






































// // stack operations


function stackMethods() {
    let stack = [];
    let stackOverFlow = false;


    // add method
    function Add(ele) {
        if (stack.length >= 4) {
            console.log("Stack Overflow")
            stackOverFlow = true
        } else {
            stack.push(ele)
            console.log(stack)
        }
    }

    // delete method

    function Delete() {
        if (stack.length === 0) {
            console.log("stack underflow")
        } else {
            stack.pop();
            console.log(stack)
        }

    }

    // peek element 
    function Peek() {
        if (stack.length == 0) {
            console.log("stack is under flow")
        } else {
            console.log(stack[stack.length-1])
        }

    }



    return { Add, Delete, Peek }
}

let mainFun = stackMethods();

mainFun.Add(10)
mainFun.Add(20)
mainFun.Add(30)
mainFun.Add(40)

mainFun.Peek()