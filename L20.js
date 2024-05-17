


// // let obj = { a: 1 }

// // let obj = { name: "ram" }
// // let ws = new WeakSet()

// // ws.add(obj)

// // console.log(ws)

// // ws.add(obj)
// // ws.has()
// // console.log(ws)

// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again

// // visitedSet has 2 users now
// console.log(visitedSet)

// // // check if John visited?
// // alert(visitedSet.has(john)); // true

// // // check if Mary visited?
// // alert(visitedSet.has(mary)); // false

// // john = null;


// function reverseString(str) {
//     // Initialize an empty stack
//     const stack = [];

//     // Push each character of the string onto the stack
//     for (let char of str) {
//         stack.push(char);
//     }
//     // console.log(stack)

//     // Pop each character from the stack to construct the reversed string
//     let reversedStr = '';
//     while (stack.length > 0) {
//         reversedStr = reversedStr + stack.pop();
//     }

//     return reversedStr;
// }

// // Test the function
// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log("Original String:", originalString);
// console.log("Reversed String:", reversedString);



// let str = "radheShyam";

// let stack = [];

// for (let i = 0; i < str.length; i++) {
//     stack.push(str[i])
// }

// // stack // r a d h e S h y a m  // 9 , 

// let reversedString = ""; // 

// while (stack.length > 0) {
//     reversedString = reversedString + stack.pop()
// }

// console.log(reversedString)



// console.log(stack)




function isValidParentheses(s) {
    // Create a stack to keep track of opening brackets
    const stack = [];

    // Create a map to store mappings of opening and closing brackets
    const bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the character is an opening bracket, push it onto the stack
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            // If the character is a closing bracket
            // Check if the stack is empty or if the top of the stack does not match the current closing bracket
            if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty after iterating through all characters, the string is valid
    return stack.length === 0;
}

// Test the function
const testString1 = "()[]{}"; // Valid string
const testString2 = "([)]"; // Invalid string
console.log(testString1, "is valid:", isValidParentheses(testString1));
console.log(testString2, "is valid:", isValidParentheses(testString2));


