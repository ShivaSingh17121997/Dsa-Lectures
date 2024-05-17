
// function nextGreater(arr) {
//     let stack = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         let current = arr[i]  //5

//         while (stack.length > 0 && stack[stack.length - 1] <= current) {
//             stack.pop();
//         }

//         if (stack.length === 0) {
//             arr[i] = -1
//         } else {
//             arr[i] = stack[stack.length - 1]
//         }

//         stack.push(current)
//     }

//     console.log(arr)

// }





// let arr = [2, 3, 4, 3, 3, 6, 5]

// let A = nextGreater(arr)

// console.log(A)




// function nextGreater(arr) {
//     let stack = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         let current = arr[i];

//         while (stack.length > 0 && stack[stack.length - 1] <= current) {
//             stack.pop();
//         }

//         if (stack.length === 0) {
//             arr[i] = -1; // Use assignment operator '=' instead of comparison operator '=='
//         } else {
//             arr[i] = stack[stack.length - 1]; // Use assignment operator '=' instead of comparison operator '=='
//         }

//         stack.push(current);
//     }

//     console.log(arr);
//     return arr; // Return the modified array
// }

// let arr = [2, 3, 4, 3, 3, 6, 5];

// let A = nextGreater(arr);

// console.log(A);































////

// let str = "{{}"
// let stack = [];



// if (str.length === 0) {
//     console.log("kuch nahi hai")
// } else {

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] === "(" || str[i] == "{" || str[i] == "[") {
//             stack.push(str[i])
//         }


//         if (str[i] === ")" || str[i] == "]" || str[i] == "}") {
//             stack.pop()
//         }
//     }
//     stack.length === 0 ? console.log("Balenced Paranthesis") : console.log("Unbalancedd Strig")
// }




// let str1 = "ashish"  // "ulabab"


// let stack = [];

// for (let i = 0; i < str1.length; i++) {
//     stack.push(str1[i])
// }

// let reversedStr = ""
// while (stack.length > 0) {
//     reversedStr += stack.pop()
// }

// console.log(reversedStr)


// let stack = [];
// let nayaString = "";

// for (let i = str1.length - 1; i >= 0; i--) {
//     // stack.push(str1[i])
//     nayaString += str1[i]
// }

// stack.push(nayaString)
// console.log(stack)








