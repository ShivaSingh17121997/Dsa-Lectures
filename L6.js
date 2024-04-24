//  2D array

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let arrr = "";
// for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//         arrr += arr[i][j] + ", "
//     }
// };

// console.log(arrr);


// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// 1, 2, 3, 6, 5, 4, 7, 8, 9

//     R  C
// 1 - 0, 0
// 4 - 1, 0
// 7 - 2, 0
// 2 - 0, 1
// 5 - 1, 1
// 8 - 2, 1
// 3 - 0, 2
// 6 - 1, 2
// 90  2, 2

// let arrr = [];

// for (let i = 0; i < arr.length; i++) {

//     if (i % 2 === 1) {
//         for (let j = arr.length - 1; j >= 0; j--) {
//             arrr.push(arr[i][j])
//         }
//     } else {
//         for (let j = 0; j < arr.length; j++) {
//             arrr.push(arr[i][j])
//         }
//     }

// }
// console.log(arrr)









//2D arrays 3x3


// //
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// [1,2,3,4,5,6,7,8,9]



// let arrr = []
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         arrr.push(arr[i][j])
//     }
// };




// console.log(arrr)


// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// [1, 4, 7, 2, 5, 8, 3, 6, 9]
// //    R  C
// // 1 - (0, 0)
// // 4 - (1, 0)
// // 7 - (2, 0)
// // 2 - (0, 1)
// // 5 - (1, 1)
// // 9 - (2, 1)
// // 3 - (0, 2)
// // 6 - (1, 2)
// // 9 - (2, 2)

// let arrr = [];
// for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//         arrr.push(arr[j][i]);
//     }
// }
// console.log(arrr);





// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];


// // 1,2,3,6,5,4,7,8,9
// //  R    C
// // 1 - [0, 0]  i = 0
// // 2 - [0, 1]
// // 3 - [0, 2]

// // 6 - [1, 2]   i = 1
// // 5 - [1, 1]
// // 4 - [1, 0]

// // 7 - [2, 0]  i = 2
// // 8 - [2, 1]
// // 9 - [2, 2]

// let arrr = [];

// for (let i = 0; i < arr.length; i++) {

//     if (i % 2 === 1) {
//         for (let j = arr.length - 1; j >= 0; j--) {
//             arrr.push(arr[i][j])
//         }
//     } else {
//         for (let j = 0; j < arr.length; j++) {
//             arrr.push(arr[i][j])
//         }
//     }

// }

// console.log(arrr.join(","))



// let arrays = [
//     [1, 2, 3, 21],
//     [12, 1, 65, 9],
//     [1, 56, 34, 2]
// ];

// let maxElements = [];

// for (let arr of arrays) {
//     let maxElement = arr[0]; // Initialize maxElement with the first element of the array

//     // Iterate over the array to find the maximum element
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxElement) {
//             maxElement = arr[i];
//         }
//     }

//     maxElements.push(maxElement);
// }

// console.log("Maximum elements in each array:", maxElements);



// let arrays = [
//     [1, 2, 3, 21],
//     [12, 1, 65, 9],
//     [1, 56, 34, 2]
// ];

// let maxElements = [];

// for (let j = 0; j < arrays.length; j++) {
//     let arr = arrays[j];
//     let maxElement = arr[0]; // Initialize maxElement with the first element of the array

//     // Iterate over the array to find the maximum element
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxElement) {
//             maxElement = arr[i];
//         }
//     }
//     maxElements.push(maxElement);
// }

// console.log("Maximum elements in each array:", maxElements);


// let arr = [
//     [1, 2, 3],
//     [12, 1, 65],
//     [1, 56, 34]
// ];
// let maxlee = []
// for(let i=0; i<arr.length; i++){
//     let max = -Infinity;

//     for(let j=0; j<arr[i].length; j++){
//         if(arr[i][j] >max){
//             max = arr[i][j]
//         }
//     }
//     maxlee.push(max)
// }

// console.log(maxlee)








//  
































