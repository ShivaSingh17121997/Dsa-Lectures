// // function lowerBound(arr, target) {
// //     let low = 0;
// //     let high = arr.length;

// //     while (low < high) {
// //         const mid = Math.floor((low + high) / 2);
// //         if (arr[mid] < target) {
// //             low = mid + 1;
// //         } else {
// //             high = mid;
// //         }
// //     }

// //     return low;
// // }

// // Example usage:
// // const arr = [1, 3, 5, 5, 7, 9];


// // const target = 5;
// // const index = lowerBound(arr, target);
// // console.log("Lower bound index:", index); // Output: Lower bound index: 2


// // function LoerBound(arr, target) {
// //     let low = 0;
// //     let high = arr.length;

// //     while (low < high) {
// //         const mid = Math.floor((low + high) / 2)
// //         if (arr[mid] < target) {
// //             low = mid + 1
// //         } else {
// //             high = mid
// //         }
// //     }
// //     return low

// // }

// // let a = LoerBound(arr, target)
// // console.log(a)



// // function upperBound(arr, target) {
// //     let low = 0;
// //     let high = arr.length;

// //     while (low < high) {
// //         const mid = Math.floor((low + high) / 2);
// //         if (arr[mid] <= target) {
// //             low = mid + 1;
// //         } else {
// //             high = mid;
// //         }
// //     }

// //     return low;
// // }

// // // // Example usage:
// // // const arr = [1, 3, 5, 5, 7, 9];
// // // const target = 5;
// // // const index = upperBound(arr, target);
// // // console.log("Upper bound index:", index); // Output: Upper bound index: 4









// // // Sure, here are some examples of lower bound and upper bound problem-solving techniques:

// // // 1. **Lower Bound Example: Finding First Occurrence**

// // //    Problem: Given a sorted array of integers, find the index of the first occurrence of a target element, or return -1 if the target is not found.


// // function lowerBound(arr, target) {
// //     let low = 0;
// //     let high = arr.length - 1;
// //     let result = -1;

// //     while (low <= high) {
// //         const mid = Math.floor((low + high) / 2);
// //         if (arr[mid] === target) {
// //             result = mid; // Update result and continue searching towards the left
// //             high = mid - 1;
// //         } else if (arr[mid] < target) {
// //             low = mid + 1;
// //         } else {
// //             high = mid - 1;
// //         }
// //     }

// //     return result;
// // }

// // Example usage:
// //    const arr = [1, 2, 2, 2, 3, 4, 5];
// //    const target = 2;
// //    const index = lowerBound(arr, target);
// //    console.log("Index of first occurrence:", index); // Output: Index of first occurrence: 1


// // 2. **Upper Bound Example: Finding Last Occurrence**

// //    Problem: Given a sorted array of integers, find the index of the last occurrence of a target element, or return -1 if the target is not found.


// // function upperBound(arr, target) {
// //     let low = 0;
// //     let high = arr.length - 1;
// //     let result = -1;

// //     while (low <= high) {
// //         const mid = Math.floor((low + high) / 2);
// //         if (arr[mid] === target) {
// //             result = mid; // Update result and continue searching towards the right
// //             low = mid + 1;
// //         } else if (arr[mid] < target) {
// //             low = mid + 1;
// //         } else {
// //             high = mid - 1;
// //         }
// //     }

// //     return result;
// // }

// // // Example usage:
// // const arr = [1, 2, 2, 2, 3, 4, 5];
// // const target = 2;
// // const index = upperBound(arr, target);
// // console.log("Index of last occurrence:", index);
// // Output: Index of last occurrence: 3


// // These examples demonstrate how to use the lower bound and upper bound techniques to efficiently search for elements in sorted arrays. They are commonly used in algorithms like binary search, range queries, and finding the occurrence of elements in arrays.







// function lowerBound(arr, k) {

//     let low = 0;
//     let high = arr.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] === k) {
//             result = mid
//             high = mid - 1
//         } else if (arr[mid] < k) {
//             low = mid + 1
//         } else {
//             high = mid - 1
//         }
//     }
//     return result;
// }

// let arr = [2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 7, 9, 10]
// let k = 3

// let a = lowerBound(arr, k)
// console.log(a)


















// upper bound
let arr = [2, 3, 4, 5, 5, 5, 5, 5, 7, 8, 9];
let target = 5;

function Upperbound(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === k) {
            result = mid
            low = mid + 1
        } else if (arr[mid] < k) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return result;
}

let ans = Upperbound(arr, target);
console.log(ans);

// let arr = [2, 3, 4, 5, 5, 5, 5, 5, 7, 8, 9];


function lowerBound(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === k) {
            result = mid
            high = mid - 1
        } else if (arr[mid] > k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return result
}

let lowerAns = lowerBound(arr, target);
console.log(lowerAns)



// O(n) > logn

// nlogn < n**2













