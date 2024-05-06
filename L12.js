// // binary search



// let newArr = [2, 4, 3, 33, 2, 2, 3, 45, 43, 46, 544, 3]
// let arr = newArr.sort((a, b) => a - b)
// console.log(arr)

// function binarySearch(arr, target) {

//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid; // return the index if found

//         } else if (arr[mid] < target) {
//             left = mid + 1; // movet to the right half
//         } else {
//             right = mid - 1;
//         }

//     }

//     return -1 // if not found

// }

// let bs = binarySearch(arr, 45);
// console.log(bs)


// let array = [0, 1, 2, 3, 4, 2, 2, 2, 5, 6, 7, 8, 8, 10]

// function SumofEle(array, target) {

// let left = 0;
// let right = array.length - 1;

// while (left < right) {
//     let sum = array[left] + array[right]
//     if (sum === target) {
//         return [array[left], array[right]]
//     } else if (sum < target) {
//         left++
//     } else {
//         right--
//     }
// }

// let left = 0;
// let right = array.length - 1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2)

//     if (array[mid] === target) {
//         return mid
//     }
//     else if (array[mid] < target) {
//         left = mid + 1
//     }
//     else {
//         right = mid - 1
//     }
// }
// return -1


// for (let i = 0; i < array.length; i++) {
//     if(array[i] === target){
//         return i
//     }
// }
// return -1
// }

// let ans = SumofEle(array, 10)
// console.log(ans)


// two pointer rechnique

// let arr = [2,3,2,1,4,222,1]

// let target = 7

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]+arr[j]  == target){
//             console.log(i,j)
//         }
//     }

// }


// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) { // Start j from i+1 to avoid duplicate pairs
//         if (arr[i] + arr[j] === target) {
//             console.log(i, j); // Print the indices of the pair
//         }
//     }
// }


// let arr = [2, 3, 2, 1, 4, 222, 1];
// let target = 7;
// let left = 0;
// let right = arr.length - 1

// while (left < right) {
//     let sum = arr[left] + arr[right]

//     if (sum == target) {
//         console.log(arr[left], arr[right])
//     } else if (sum < target) {
//         left++
//     } else {
//         right--
//     }
// }

// let arr = [2, 3, 2, 1, 4, 222, 1];
// let target = 7;

// function asd(arr, target) {
//     arr = arr.sort((a, b) => a - b)
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right];

//         if (sum == target) {
//             return [arr[left], arr[right]]

//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return -1
// }

// let a = asd(arr, target)
// console.log(a)

// function hasTwoSum(nums, target) {
//     nums.sort((a, b) => a - b);
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         const sum = nums[left] + nums[right];
//         if (sum === target) {
//             return true;
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return false;
// }

// // Example usage:
// const nums = [2, 7, 11, 15];
// // const target = 9;
// console.log(hasTwoSum(nums, target)); // Output: true



// let arr = [2, 3, 2, 1, 4, 222, 1];

// function twopoi(arr, tar) {

//     left = 0;
//     right = arr.length - 1

//     while (left < right) {
//         let sum = arr[left] + arr[right]

//         if (sum == tar) {
//             return [arr[left], arr[right]]
//         }
//         else if (sum < tar) {
//             left++
//         } else {
//             right++
//         }
//     }

// }

// let a = twopoi(arr, 5)
// console.log(a)