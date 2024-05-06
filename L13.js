



// // linear Search

// let arr = [2, 3, 4, 3, 2, 3, 33, 4, 344]

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             return [i, arr[i]];
//         }
//     }

//     return - 1;
// }

// let a = linearSearch(arr, 33)
// console.log(a)


// // // binary search



// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sortedArr = arr1.sort((a, b) => a - b)
// console.log(sortedArr)

// function binarySearch(sortedArr, target) {

//     let left = 0;
//     let right = sortedArr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (sortedArr[mid] === target) {
//             return [sortedArr[mid], mid]
//         } else if (sortedArr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1
// }


// let b = binarySearch(sortedArr, 10)
// console.log(b)






// //  two pointer method

// let arr2 = [2, 3, 4,34,1, 32, 34];
// let target = 35


// let left = 0;
// let right = arr2.length - 1

// while (left < right) {
//     let sum = arr2[left] + arr2[right]
//     if (sum == target) {
//         console.log(arr2[left], arr2[right])
//         left++
//         right--
//     } else if (sum < target) {
//         left++
//     } else {
//         right--
//     }
// }


// // linear search
// // let arr2 = [2, 3, 4,34,1, 32, 34];

// for (let i = 0; i < arr2.length; i++) {
//     for (let j = i + 1; j < arr2.length; j++) {
//         if (arr2[i] + arr2[j] === target) {
//             console.log(arr2[i], arr2[j])
//         }
//     }
// }



// // Check if left is equal to right and the sum equals the target for arrays with odd length
// if (left === right && arr2[left] + arr2[right] === target) {
//     console.log(arr2[left], arr2[right]);
// }



let arr = [2, 3, 4, 32, 2, 2, 3, 355, 5, 98]

let sortedArr = arr.sort((a, b) => b - a)
console.log(sortedArr)
