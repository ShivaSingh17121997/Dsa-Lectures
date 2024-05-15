//

// function factorial(num) {

//     if (num == 0) {
//         return 1
//     } else {
//         return num * factorial(num - 1)
//     }

// }

// let a = factorial(0);
// console.log(a)



// // binary search with help of recurion

// let arr = [3, 4, 5, 6, 7, 8]
// k = 7
// let left = arr[0];
// let right = arr.length - 1

// function binarySearch(arr, k, left, right) {


// //     if (arr.length <= 1) {
// //         return 1
// //     }
// //     if (left > right) return -1;

// //     let mid = Math.floor((left + right / 2));

// //     if (arr[mid] === k) {
// //         return [mid, arr[mid]]
// //     } else if (arr[mid] > k) {
// //         return binarySearch(arr, k, left, right = mid - 1)
// //     }
// //     else {
// //         return binarySearch(arr, k, left = mid + 1, right)
// //     }

// //     return -1

// // }

// let ans = binarySearch(arr, k, left, right)
// console.log(ans)


// // // Recursive function for binary search
//  function recursiveBS(arr, target, left, right) {
//      // -1 for element not found
//      if (left > right) return -1;

//      // Get the mid index
//      mid = Math.floor((left + right) / 2);

//      // If target found return index
//      if (arr[mid] === target) return mid;
//      // If tagert is less than mid index value
//      // search again in left half
//      else if (arr[mid] > target) {
//          return recursiveBS(arr, target, left, mid - 1);
//      }
//      // If target is greater than mid index value
//      // search in right half
//      else {
//          return recursiveBS(arr, target, mid + 1, right);
//      }
//      return -1;
//  }

//  arr = [1, 2, 6, 7, 11, 13, 15, 18];
//  target = 7;
//  index = recursiveBS(arr, target, 0, arr.length - 1);

//  if (index == -1)
//      console.log(
//          target + " is not present in the given array"
//      );
//  else
//      console.log(target + " is present at index: " + index); 



//