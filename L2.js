//Common Elements


// let arr1 = [1, 3, 4, 5, 4, 4];

// let arr2 = [3, 45, 5, ]

// let commonEleArr = []

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             commonEleArr.push(arr1[i])
//             break;
//         }
//     }
// }

// console.log(commonEleArr)


// to get all even numbers and odd numbers and prime numbers


// let arr = [1, 2, 333, 4, 4, 55, 6, 667, 7, 90]

// let evenNumbers = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         evenNumbers.push(arr[i]);
//     }
// }

// console.log(evenNumbers);


//Palindromic sring
// let str =  "oyo"

// let reversedStr = "";
// for(let i=str.length-1; i>=0; i--){
//     reversedStr += str[i]
// }

// console.log(reversedStr)

// if(str === reversedStr){
//     console.log(str ," is a palindromic string")
// } else {
//     console.log(str, " is not a palindromic string")
// }






// console.log("hello")



//to find odd and even elements


// arr = [12, 9, 3, 4, 45, 5, 665, 55, 4, 3, 2];

// let evenArr = [];
// let oddArr = [];


// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
//     else if (arr[i] % 2 === 1) {
//         oddArr.push(arr[i])
//     }
// }

// console.log("Even array ", evenArr);
// console.log("Odd Array", oddArr)



// console.log(1 == "1") // true  //shallow equality;
// console.log(1 === "1") // false //strict equality;

// console.log({} == {})  //


// console.log({} === {})//






// check if string in palindrome or not

// let str = "level";

// let reversedString = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedString = reversedString + str[i]
// }

// // console.log(reversedString);


// if (str === reversedString) {
//     console.log(str, "is a palindrome")
// } else {
//     console.log(str, "is not a palindrome")
// }






// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [2, 3, 7, 8, 0]

// let commonNumbers = [];

// for (let i = 0; i < arr1.length; i++) {

//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             commonNumbers.push(arr1[i])
//         }
//     }

// }

// console.log(commonNumbers);



//"hw " find the prime numers//
// find the duplicate characterin thee array
// find the unique character in the array
// fruits = ["apple", "banana", "mango", "strawberry", "orange", "watermelon", "graps"];
// 2d array



//bubble sort and selection sort


// let arr = [2, 3, 4, 5,1,34,44,55, 4, 32, 1]

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     // return arr
// // }

// // let sortedArr = bubbleSort(arr)
// console.log(arr)


// let arr = [2, 3, 4, 5, 1, 34, 44, 55, 4, 32, 1]

// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
// }

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
//     console.log(left, "left", "right", right)

//     return quickSort(left).concat(pivot, quickSort(right));
// }

// // Example usage:
// // const arr = [4, 2, 6, 8, 3, 1, 7, 5];
// // console.log("Original array:", arr);
// console.log("Sorted array:", quickSort(arr));





//quick sort  

// let arr1 = [2, 4, 5, 43, 3, 1];

// function quickSort(arr1) {

//     const pivot = arr1[0];
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr1.length; i++) {
//         if (arr1[i] < pivot) {
//             left.push(arr1[i])
//         } else {
//             right.push(arr1[i])
//         }
//     }

//     // function solve it recursively

//     let sortedLeft = quickSort(left);
//     let sortedRight = quickSort(right)



//     console.log(sortedLeft, sortedRight)
//     // console.log("left", left, "right", right)

//     return sortedLeft.concat(pivot, sortedRigh)
// }

// quickSort(arr1)




// let arr1 = [2, 4, 5, 43, 3, 1];

// function quickSort(arr1) {
// if (arr.length <= 1) {
//     return arr;
// }
//     const pivot = arr1[0];
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr1.length; i++) {
//         if (arr1[i] < pivot) {
//             left.push(arr1[i]);
//         } else {
//             right.push(arr1[i]);
//         }
//     }

//     // Recursively sort the left and right arrays
//     let sortedLeft = quickSort(left);
//     let sortedRight = quickSort(right);

//     // Concatenate sorted left, pivot, and sorted right arrays
//     return sortedLeft.concat(pivot, sortedRight);
// }

// console.log(quickSort(arr1));




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
// const arr = [4, 2, 6, 8, 3, 1, 7, 5];
// console.log("Original array:", arr);
// console.log("Sorted array:", quickSort(arr));




// modulo remainder 4/2 rem = 0 55/2 rem = 1


// let arr = [1, 2, 3, 4, 5, 665, 43, 33, 44]

// let evenArr = [];
// let oddArr = [];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i])
//     } else if (arr[i] % 2 === 1) {
//         oddArr.push(arr[i])
//     }
// }

// console.log("evenArr", evenArr)
// console.log("oddArr", oddArr)








//"string"

// let str = "radheShyam"; // "mayhSehdar"

// let reversedStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr = reversedStr + str[i]
// }

// console.log(reversedStr);



//check if the string is palindrome or not
// let palindrome = "noon";
// let reversedStr = "";

// for (i = palindrome.length - 1; i >= 0; i--) {
//     reversedStr = reversedStr + palindrome[i]

// }

// if (palindrome === reversedStr) {
//     console.log(palindrome, "is a palindron ")
// } else {
//     console.log(palindrome, "is not a palindrom")
// }


// let arr1 = [1, 2, 1, 3, 4, 5];
// let arr2 = [4, 5, 2, 1, 6, 7];

// let commonElement = [];
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             commonElement.push(arr1[i]);
//         }
//     }
// }
// console.log(commonElement);

//hw sorting bubble sort , quick sort


// [1, 3, 45, 5, 8] // 1,3,5,8,45 sorting.







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
// const arr = [4, 3, 4, 2, 6, 8, 3, 1, 7, 5];
// console.log("Original array:", arr);
// console.log("Sorted array:", quickSort(arr));





// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivot = arr[0];
//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return quickSort(left).concat(pivot, quickSort(right));
// }

// let arr = [1, 2, 3, 4, 5, 4, 3, 2]

//  console.log(quickSort(arr));


function quickSort(arr) {

    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))

}
let arr = [12, 3, 4, 44, 5, 6, 7]
console.log(quickSort(arr))






