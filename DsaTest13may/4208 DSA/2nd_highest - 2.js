// Find the 2nd highest  number in the given array 
// let arr = [,33,43,54,65,23,232,43] use any method.

let arr = [33, 43, 54, 65, 23, 232, 43];
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        // store value 
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }
}

console.log("Second highest number:", secondMax);
