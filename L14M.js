// function getAllSubarrays(arr) {
//     const subarrays = [];

//     // Iterate over all possible starting indices
//     for (let start = 0; start < arr.length; start++) {
//         // Iterate over all possible lengths of subarrays starting from the current index
//         for (let len = 1; start + len <= arr.length; len++) {
//             const subarray = [];
//             // Extract subarray elements without using slice
//             for (let i = start; i < start + len; i++) {
//                 subarray.push(arr[i]);
//             }
//             // Add subarray to the result
//             subarrays.push(subarray);
//         }
//     }

//     return subarrays;
// }

// // Example usage:
// const array = [1, 2, 3, 4
// ]
// const subarrays = getAllSubarrays(array);
// console.log(subarrays);


// find the sub arrays 


// function subArray(arr) {
//     const subarrays = []

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; i + j <= arr.length; j++) {
//             const subArray = [];
//             for (let k = i; k < i + j; k++) {
//                 subArray.push(arr[k])
//             }
//             subarrays.push(subArray)
//         }
//     }

//     return subarrays;

// }



// const a = subArray([1, 4, 5])

// console.log(a)

// let arr = [1, 2, 3]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; i + j <= arr.length; j++) {
//         let subarr = [];
//         for (let k = i; k < i + j; k++) {
//             console.log(arr[k])
//         }
//     }
// }


























