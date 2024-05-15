// Find the target value with the help of binary search array is not soted
// Let arr = [3,2,8,4,56,6,7] target value = 7


let arr = [3,2,8,4,56,6,7] ;
let target = 7;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // if Target found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }
    return -1; //if Target not found
}


console.log("Original array:", arr); // original array
const sortedArray = bubbleSort(arr);
console.log("Sorted array:", sortedArray); // sorted array

const binary =  binarySearch(arr,target);
console.log("Your target is on the", binary ,"position"); // 