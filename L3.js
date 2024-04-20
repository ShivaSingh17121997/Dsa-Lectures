// // swapping

// // function bubbleSort(arr) {

// //     const n = arr.length;
// //     // Iterate through the array
// //     for (let i = 0; i < n - 1; i++) {
// //         // Last i elements are already sorted, so we don't need to check them
// //         for (let j = 0; j < n - i - 1; j++) {
// //             // Compare adjacent elements and swap them if they are in the wrong order
// //             if (arr[j] > arr[j + 1]) {
// //                 // Swap arr[j] and arr[j+1]
// //                 const temp = arr[j];
// //                 arr[j] = arr[j + 1];
// //                 arr[j + 1] = temp;
// //             }
// //         }
// //     }
// //     return arr;
// // }

// // console.log(bubbleSort([2, 22, 43, 4, 1, 2]))



// ///quick quickSort


// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivot = arr[0]; // Choosing the first element as the pivot
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]); // Elements smaller than pivot go to the left
//         } else {
//             right.push(arr[i]); // Elements greater than or equal to pivot go to the right
//         }
//     }

//     return quickSort(left).concat(pivot, quickSort(right));
// }

// // Example usage:


// // bubble sort 


// let arr = [2, 7, 6, 5, 4];

// // n*n n2
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// };

// let sortedArray = bubbleSort(arr);
// console.log(sortedArray)





// let array = [2, 5, 3, 3, 9, 6];

// function BubbleSort(array) {

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length - i; j++) {
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1]
//                 array[j + 1] = temp
//             }
//         }
//     }
//     console.log( Date.now());
//     return array;
// }
// let sa = BubbleSort(array)

// console.log(sa)








//Bubble sort 

let arr = [5, 4, 3];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
};

console.log(arr)






let array = [2, 3, 4, 54, 32, 3]
// n*n n2 

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
};

console.log(array)


















let arr1 = [4, 3, 2]


