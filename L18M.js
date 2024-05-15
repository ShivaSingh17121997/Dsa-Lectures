// // // let = yamlCopy code
// // let products = [
// //     { name: "bat", price: 50 },
// //     { name: "ball", price: 150 },
// //     { name: "wicket", price: 250 },
// //     { name: "grip", price: 350 },
// // ]

// // function avgPricc(arr) {
// //     let avg = arr.reduce((acc, currVal) => {
// //         return acc + currVal.price
// //     }, 0)

// //     return avg / arr.length

// // }

// // let ans = avgPricc(products)
// // console.log(ans)

// // javascriptCopy code
// // for (var i = 1; i <= 3; i++) {
// //     setTimeout(() => console.log(i), 1000);
// // }



// // // javascriptCopy code
// // async function asyncFunc() {

// //     throw new Error("Async error");
// // }

// // async function runAsyncFunc() {
// //     try {
// //         await asyncFunc();
// //     } catch (err) {
// //         console.error(err.message);
// //     }
// // }
// // runAsyncFunc();


// // javascriptCopy code
// // const obj = { x: 10 };
// // function modifyObj() {
// //     let newObj = obj;
// //     newObj.x = 20;
// // }
// // modifyObj();
// // console.log(obj.x);


// // javascriptCopy code
// // let foo = 1;
// // function bar() {
// //     if (!foo) {
// //         let foo = 10;
// //     }
// //     console.log(foo);
// // }
// // bar();


// // javascriptCopy code
// // async function asyncFunc() {
// //     console.log("Inside asyncFunc"); //1
// //     return new Promise(resolve => {
// //         setTimeout(() => resolve("Promise"), 2000); //2
// //     });
// // }
// // console.log("Start");
// // asyncFunc().then(console.log);
// // console.log("End");


// // Given the array [1,2,1,2,4,2,1], find the unique elements and store them in a new array.
// // let arr = [1, 2, 1, 2, 4, 2, 1]

// // let uniquearr = new Set(arr)
// // let uniqueSortedArray = Array.from(uniquearr)
// // console.log(uniqueSortedArray)

// // /


// // let newArr = [];
// // for (let i = 0; i < arr.length; i++) {


// // }

// // Given the input array [1,3,2,1,4,5,2,4], output an object where each unique element is a key and its value is the element squared.

// // let arr = [1, 3, 2, 1, 4, 5, 2, 4]

// // function unique(arr) {

// //     let obj = {}

// //     for (let i = 0; i < arr.length - 1; i++) {
// //         if (obj[arr[i]] === undefined) {
// //             obj[arr[i]] = arr[i]*arr[i]
// //         } else {
// //             obj[arr[i]]++
// //         }
// //     }
// //     console.log(obj)
// //     return obj

// // }
// // let ansa = unique(arr)
// // console.log(ansa)

// // function unique(arr) {
// //     let obj = {};

// //     for (let i = 0; i < arr.length; i++) {
// //         if (obj[arr[i]] === undefined) {
// //             obj[arr[i]] = arr[i] * arr[i]; // Square the element and assign it as the value
// //         }
// //     }

// //     return obj;
// // }

// // let ans = unique(arr);
// // console.log(ans);



// // reverse a num

// // let num = 546

// // let strNum = num.toString().split(" ").reverse().join("")

// // console.log(strNum)

// // function reverseNumber(number) {
// //     let reversed = 0;
// //     while (number > 0) {
// //         reversed = reversed * 10 + (number % 10);
// //         number = Math.floor(number / 10);
// //     }
// //     return reversed;
// // }

// // let number = 564;
// // let reversedNumber = reverseNumber(number);
// // console.log(reversedNumber); // Output: 465




// // function countCharacterFrequencyInArray(arr) {
// //     let obj = {};

// //     // Iterate through each string in the array
// //     for (let i = 0; i < arr.length; i++) {
// //         let str = arr[i];
// //         // Iterate through each character in the string
// //         for (let j = 0; j < str.length; j++) {
// //             let char = str[j].toLowerCase();
// //             obj[char] = obj[char] ? obj[char] + 1 : 1;
// //         }
// //     }
// //     return obj;
// // }

// // // Example usage:
// // let inputArray = "HelloWorld!";
// // let charFrequency = countCharacterFrequencyInArray(inputArray);

// // // Output the character frequency object
// // console.log(charFrequency);



// // for (var i = 0; i < 3; i++) {
// //     setTimeOut(() => {
// //         console.log(i)
// //     }, 0)
// // }

// // for (let i = 0; i < 3; i++) {
// //     setTimeOut(() => {
// //         console.log(i)
// //     }, 0)
// // }
// //what is the output and why

// // javascriptCopy code
// // if (true) {
// //     var varVariable = "I am a var";
// //     let letVariable = "I am a let";
// // }
// // console.log(varVariable);
// // console.log(letVariable);

// // javascriptCopy code
// // console.log(x);
// // let x = 5;



// // javascriptCopy code
// // function outerFunction() {
// //     let outerVariable = "I am outer";
// //     function innerFunction() {
// //         console.log(outerVariable);
// //     }
// //     return innerFunction;
// // }
// // let innerFunc = outerFunction();
// // innerFunc();

// // javascriptCopy code
// // console.log("Start");
// // setTimeout(() => console.log("Timeout"), 0);
// // console.log("End");


// // javascriptCopy code
// // for (let i = 0; i < 3; i++) {
// //     setTimeout(() => console.log(i), 1000);
// // }


// // javascriptCopy code
// // console.log("Start");
// // Promise.resolve().then(() => console.log("Promise"));
// // console.log("End");


// // javascriptCopy code
// // async function asyncFunction() {
// //     console.log("Inside async function");
// //     return "Async Done";
// // }
// // console.log("Start");
// // asyncFunction().then(console.log);
// // console.log("End");

// // javascriptCopy code
// // function createFunctions() {
// //     let result = [];
// //     for (let i = 0; i < 3; i++) {
// //         result.push(function() { console.log(i); });
// //     }
// //     return result;
// // }
// // let functions = createFunctions();
// // functions.forEach(func => func());



// // javascriptCopy code
// // const obj = { key: "value" };
// // obj.key = "new value";
// // console.log(obj.key);



// // javascriptCopy code
// // for (var i = 0; i < 5; i++) {
// //     setTimeout(function() {
// //         console.log(i);
// //     }, 1000);
// // }


// // javascriptCopy code
// // console.log("Start");
// // new Promise(resolve => {
// //     setTimeout(() => resolve("Promise"), 2000);
// // }).then(console.log);
// // console.log("End");

// function search(nums, target) {
//     let left = 0;   //0  ,4
//     let right = nums.length - 1;  //6  //5

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2); // 3 , 5  , 4
//         //0   ======   0
//         if (nums[mid] === target) {
//             return mid;
//         }
//         //0   <   //1
//         if (nums[left] <= nums[mid]) {

//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid - 1;   // 5
//             } else {
//                 left = mid + 1;
//             }
//         } else {
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }

//     return -1;
// }


// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target = 0;
// console.log(search(nums, target)); // Output: 4 (index of target in nums)

const nums = [4, 5, 6, 7, 0, 1, 2];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] > nums[j + 1]) {
//             let temp = nums[j]
//             nums[j] = nums[j + 1]
//             nums[j + 1] = temp
//         }
//     }
// }
// console.log(nums)


for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp  = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] = temp
        }
    }
}

console.log(nums)