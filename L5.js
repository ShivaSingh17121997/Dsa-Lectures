// quick sort


// let arr = [2, 6, 4, 5, 43, 44, 3, 2, 1];



// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }

//     let pivot = arr[0];

//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         }
//         else {
//             right.push(arr[i])
//         }
//     }

//     return quickSort(left).concat(pivot, quickSort(right));
// }


// let sorted = quickSort(arr);
// console.log(sorted)


// let arr = [2, 6, 4, 5, 43, 44, 3, 2, 1];


// function quick(arr) {

//     if (arr.length <= 1) {
//         return arr
//     }

//     let pivot = arr[0];
//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {

//             left.push(arr[i]);
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return quick(left).concat(pivot, quick(right));

// }

// console.log(quick(arr))















// Quick Sort algorithm
//Divide and conquer

// Hoisting?

// let arr = [9, 3, 2, 3, 43, 2, 3344, 4454, 23];

// function quickSort(arr) {
//     let pivot = arr[0];
//     let left = [];
//     let right = [];

//     if (arr.length <= 1) {
//         return arr
//     };

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat(pivot, quickSort(right));
// }

// let sorted = quickSort(arr);
// console.log(sorted);


// Event bubbling












// quick sort



let arr = [3, 3, 5, 9, 8, 6, 4, 33, 2, 11, 77];

function quickSort(arr) {

    let pivot = arr[0];
    let left = [];
    let right = [];

    if (arr.length - 1 <= 1) {
        return arr
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

let sorted = quickSort(arr);
console.log(sorted)  //

// var a = 5

// console.log(1 + true)//


// Hoisting?

// event bubbling
















