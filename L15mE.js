



// Kadane's Algorithm

// let arr = [1, 2, -3, 3, -9, 7];

// function MaxSumSubarr(arr) {
//     let currMax = arr[0];
//     let globalMax = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         currMax = Math.max(arr[i], currMax + arr[i]);

//         if (currMax > globalMax) {
//             globalMax = currMax
//         }
//     }
//     return globalMax
// }


// console.log(MaxSumSubarr(arr))








// kadane algo


// let arr = [2, 3, 4, 33, -7]

// function maxSub(arr) {

//     let currMax = arr[0];
//     let globalMax = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         currMax = Math.max(arr[i], currMax + arr[i])

//         if (currMax > globalMax) {
//             globalMax = currMax
//         }
//     }
//     return globalMax
// }

// console.log(maxSub(arr))










// let arr = [1,2,3,4,5]
// let s = arr.slice(1,3)
// console.log(s)


// function multiplyArr(arr) {
//     if (arr.length === 1) {
//         return arr[0];
//     } else {

//         return arr[0] * multiplyArr(arr.slice(1));
//     }
// }

// let a = multiplyArr(arr)
// console.log(a)


// function Counter(num){
//     console.log(num)
//     if(num>1){
//          num = num -1
//         Counter(num)
//     } else {
//         return
//     }
// }

// Counter(10);
// c(Counter)

// Program to countdown till 1

// // recursive function
// function counter(count) {

//     // display count
//     console.log(count);

//     // condition for stopping
//     if(count > 1) {

//         // decrease count
//         count = count - 1;

//         // call counter with new value of count
//         counter(count);
//     } else {

//         // terminate execution
//         return;
//     };
// };

// // access function
// counter(5);


// factorial

// function factorial(num){
//     if(num>1){
//        return num*factorial(num-1)
//     }
//     else{
//         return 1
//     }

// }

// let a = factorial(5)
// console.log(a)

// function factorial(num) {

//     // base case
//     // recurse only if num is greater than 0
//     if (num > 1) {
//         return num * factorial(num - 1);
//     }
//     else {
//         return 1;
//     };
// };

// let x = 3;

// // store result of factorial() in variable
// let y = factorial(x);

// console.log(`The factorial of ${x} is ${y}`);

// function sumOfDigits(n) {
//     // Base case: If n is less than 10 (single-digit number), return n
//     if (n < 10) {
//         return n;
//     } else {
//         // Recursive case: Add the last digit to the sum of the rest of the digits
//         return n % 10 + sumOfDigits(Math.floor(n / 10));
//     }
// }

// // Example usage:
// const number = 104534;
// const result = sumOfDigits(number);
// console.log("Sum of digits of", number, ":", result); // Output


function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Element not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Element found at index mid
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end); // Search right half
    } else {
        return binarySearch(arr, target, start, mid - 1); // Search left half
    }
}



// Example usage:
const arr = [1, 3, 5, 7, 9];
const target = 1;
const index = binarySearch(arr, target);
console.log( index); 


// function ghumneChalteHai() {
//     return ram()
// }
// function ram() {
//     return shyam()
// }

// function shyam() {
//     return radhe()
// }

// function radhe() {
//     return true
// }

// let a = ghumneChalteHai();
// console.log(a)


// function aa(count) {
//     if (count > 1) {
//         count = count - 1
//         aa(count)
//     }
//     else{
//         return
//     }
// }


// b = aa(5)
// console.log(b)



// function Counter(num) {
//     console.log(num)
//     if (num > 1) {
//         num = num - 1
//         Counter(num)
//     } else {
//         return
//     }
// }

// Counter(10);


// if (num > 1) {
//     count = count - 1
//     Counter(num)
// }