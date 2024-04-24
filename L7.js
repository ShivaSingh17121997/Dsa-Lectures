



// //  
// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ]
// // output 3, 5,7
// // 3 - [0, 2] = 2
// // 5 - [1, 1] = 2
// // 7 - [2, 0] = 2

// // let arrr = [];

// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //         if ((i + j) === 2) {
// //             arrr.push(arr[i][j])
// //         }
// //     }
// // }
// // console.log(arrr)




// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ]


// // 1,5,9

// // 1 - [0, 0]
// // 5 - [1, 1]
// // 9 - [2, 2]
// // let arrr = []
// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //         if (i == j) {
// //             arrr.push(arr[i][j])
// //         }
// //     }
// // }

// // console.log(arrr)

// let arr = [
//     [-1, -4, -5, 4],
//     [42, 5, 6, 5],
//     [74, 8, 9, 5]
// ]
// // [22, 42, 74 ]

// let arrr = [];
// for (let i = 0; i < arr.length; i++) {
//     let max = -Infinity;
//     for (let j = 0; j < arr[i].length; j++) {
//         if (max < arr[i][j]) {
//             max = arr[i][j]
//         }
//     }
//     arrr.push(max)
// }

// console.log(arrr)

// // secure // rescue



// // 1. home 
//  // fakestore  api data fetch
//  // usestate store
//  // map the data and show on ui
//  // make ui interactive





// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// Diagonal elements
// [3,5,7]
// 3 - [0, 2] = 2
// 5 - [1, 1] = 2
// 7 - [2, 0] =2

// let arrr = []
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (i + j === 2) {
//             arrr.push(arr[i][j])
//         }
//     }
// }

// console.log(arrr)




// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// 1, [0, 0]
// 5, [1, 1]
// 9, [2, 2]

// [1,5,9]

// let arrr = [];
// for (let i = 0; i < arr.length; i++) {
//     arrr.push(arr[i][i])
// }

// console.log(arrr)



let arr = [
    [11, 2, 3],
    [4, 55, 6],
    [7, 898, 9]
]

// [11, 55, 898];
let arrr = []
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > max) {
            max = arr[i][j]
        }
    }
    arrr.push(max)
}
console.log(arrr)

// find the sum of all the elements in a row

