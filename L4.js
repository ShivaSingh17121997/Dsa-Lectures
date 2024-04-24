// // 2-D arrays

// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];

// // 1,2,3,4,5,6,7,8,9
// // let newArr = [];

// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //         newArr.push(arr[i][j]);
// //     }
// // }


// // console.log(newArr)


// // 2 
// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];

// //1, 4, 7, 2, 5, 8, 3, 6, 9

// // let arrnew = [];
// // for (let i = 0; i < arr.length; i++) {   //c
// //     for (let j = 0; j < arr.length; j++) {
// //         arrnew.push(arr[j][i]);
// //     }
// // }
// // console.log(arrnew)


// 3.
// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];
// // // 1,2,3,6,5,4,7,8,9

// // let arrr = [];
// // let forWard = true;

// // for (let i = 0; i < arr.length; i++) {
// //     if (forWard) {
// //         for (let j = 0; j < arr.length; j++) {
// //             arrr.push(arr[i][j])
// //         }
// //     } else {
// //         for (let j = arr.length - 1; j >= 0; j--) {
// //             arrr.push(arr[i][j])
// //         }
// //     }
// //     forWard = !forWard;
// // }

// // console.log(arrr)



// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];
// // // 1,4,7,8,5,2,3,6,9

// // let arrr = [];
// // let downWard = true;

// // for (let i = 0; i < arr.length; i++) {

// //     if (downWard) {
// //         for (let j = 0; j < arr.length; j++) {
// //             arrr.push(arr[j][i])
// //         }
// //     } else {
// //         for (let j = arr.length - 1; j >= 0; j--) {
// //             arrr.push(arr[j][i])
// //         }
// //     }
// //     downWard = !downWard

// // }

// // console.log(arrr)



// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];
// // // find diagonal element in array
// // // 1,5,9

// // let arrr = [];
// // let arrrr = [];
// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //         if (i === j) {
// //             arrr.push(arr[i][j]);
// //         }

// //         if ((i + j) == arr.length - 1) {
// //             arrrr.push(arr[i][j])
// //         }
// //     }
// // }

// // console.log(arrr + "," + arrrr)



// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];
// // // find the element N pattern element in array

// // // output should be  7,4,1,5,9,6,3

// // N pattern
// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];

// // let patternElements = [];

// // Iterate through the array
// // for (let i = 0; i < arr.length; i++) {
// //     // If it's the first row or last column, take the element
// //     if (i === 0 || i === arr.length - 1) {
// //         for (let j = 0; j < arr[i].length; j++) {
// //             patternElements.push(arr[i][j]);
// //         }
// //     } else { // If it's not the first row or last column, take the corner elements only
// //         patternElements.push(arr[i][0]); // Take the first element of the row
// //         patternElements.push(arr[i][arr[i].length - 1]); // Take the last element of the row
// //     }
// // }

// // console.log(patternElements); // Output the elements in the N pattern;

// // let arr1 = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ];

// // let arr2 = [];

// // for (let i = 0; i < arr1.length; i++) {
// //     for (let j = 0; j < arr1.length; j++) {
// //         arr2.push(arr1[i][j])
// //     }
// // }

// // console.log(arr2)




// let arr = [
//     [1, 2, 3, 9],
//     [4, 5, 6, 9],
//     [7, 8, 9, 9]
// ];

// // Traverse through the 2D array using nested loops


// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }









// ////