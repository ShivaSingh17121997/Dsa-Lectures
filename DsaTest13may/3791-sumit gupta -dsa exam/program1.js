// binary search Find the target value with the help of binary search array is not soted
// program 1

let arr = [3, 2, 8, 4, 56, 6, 7];
target = 7;

// sort the array

let sort = arr.sort((a, b) => (a - b));
console.log(sort);

// using binary search function

function binary(sort, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (sort[mid] === target) {
            return mid
        }
        else if (sort[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
let a = binary(sort, 7);
console.log(a)



// Find the 2nd highest  number in the given array 
// program2

let array = [33, 43, 54, 65, 23, 232, 43];
let sorted = array.sort((a, b) => (a - b));
console.log(sorted);

let max = -Infinity;
let secondMax = -Infinity;

for (let num of array) {
    if (num > max) {
        secondMax = max;
        max = num;
    } else if (num > secondMax && num !== max) {
        secondMax = num;
    }
}

console.log("Second highest number ==> ", secondMax);

// Find the target value provided in the rotated array  with the help of binary search
// program4

let arr2 = [5, 6, 7, 8, 1, 2, 3];
k = 8;
function Rotated(arr2 ,k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr2 [mid] === k) {
            return mid;
        }
        if (arr2 [start] <= arr[mid]) {
            if (arr2 [start] <= k && k < arr2 [mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (arr2 [mid] < k && k <= arr2 [end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
let ans = Rotated(arr2 , k);
console.log(ans);

//Sort the array using any sorting algorithm  
// (bubble sort, quick sort, merge sort , selection sort ect)

// program 4

let arr3 = [4, 43, 44, 54, 21, 43, 83];

// sorted array using bubble sort

function bubble(arr3) {
    for (let i = 0; i < arr3.length; i++) {
        for (let j = 0; j < arr3.length - i; j++) {
            if (arr3[j] > arr3[j + 1]) {
                let temp = arr3[j];
                arr3[j] = arr3[j + 1]
                arr3[j + 1] = temp;
            }
        }
    }
    return arr3;
};
let bubsort = bubble(arr3);
console.log(bubsort);

