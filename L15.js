
// let arr = [3, 2, 4, 5];

// let subArr = []
// for (let i = 0; i < arr.length; i++) {

//     for (let j = i; j < arr.length; j++) {
//         let subarr = [];
//         for (let k = i; k <= j; k++) {
//             subarr.push(arr[k])
//         }
//         subArr.push(subarr)
//     }
// }

// console.log(subArr)





// let arr = [1, 2, 3]

// for (let i = 0; i < arr.length; i++) {
//     for(let j=i; j<arr.length; j++){
//         for(let k=i; k<=j; k++){
//             console.log(arr[k])
//         }
//     }
// }







//

// finding subarrays


// let arr = [2, 3, 4, 6]


// for (i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         let arr1 = [];
//         for (let k = i; k <= j; k++) {
//             arr1.push(arr[k])
//         }
//         console.log(arr1)
//     }
// }




//   

// let arr1 = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = i; j < arr1.length; j++) {
//         let subArr = [];
//         for (let k = i; k <= j; k++) {
//             subArr.push(arr1[k])
//         }
//         console.log(subArr)
//     }
// }


// let nums = [3, 2, 1, -5, 3, 9]

// function kadanesAlgorithm(arr) {
//     let maxEndingHere = arr[0];
//     let maxSoFar = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }

//     return maxSoFar;
// }

// Example usage:
// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log("Maximum sum subarray:", kadanesAlgorithm(arr)); // Output: 6 (The subarray [4, -1, 2, 1] has the maximum sum of 6)

// function KadaneAlgo(arr) {
//     let maxEndingHere = arr[0];
//     let maxSoFar = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//         maxSoFar = Math.max(maxSoFar, max)
//     }

// }

// let nums = [2, 4, 5, 4, -1, 3]
// function maxSubArray(nums) {
//     let maxCurrent = nums[0];
//     let maxGlobal = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
//         if (maxCurrent > maxGlobal) {
//             maxGlobal = maxCurrent;
//         }
//     }
//     return maxGlobal
// }

// console.log(maxSubArray(nums))



let maxcurr = arr[0]
let maxglob = arr[0]
for (let i = 0; i < arr.length; i++) {
    maxcurr = Math.max(num[i], maxcurr + arr[i])

    if(maxcurr > maxglob){
        maxglob = maxcurr
    }
}


let nums = [3, 2, -3, 3, 4, 4, 4]

function max(nums) {
    // Initialize maxCurrent and maxGlobal with the first element of the array
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let sumEndingHere = maxCurrent + nums[i];
        let currentElement = nums[i];

        if (currentElement > sumEndingHere) {
            maxCurrent = currentElement;
        } else {
            maxCurrent = sumEndingHere;
        }

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    return [maxGlobal, "ans"]
}

console.log(max(nums))



// if (nums[i] > maxCurrent + nums[i]) {
//     maxCurrent = nums[i];
// } else {
//     maxCurrent = maxCurrent + nums[i];
// }

// let arr = [2, 1, 3, 4]
// function maxsubarr(arr) {

//     let maxCurr = arr[0];
//     let maxglob = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxCurr + arr[i]) {
//             maxCurr = arr[i]
//         } else {
//             maxCurr = maxCurr + arr[i]
//         }

//     }

//     if (maxCurr > maxglob) {
//         maxglob = maxCurr
//     }
//     console.log(arr)
// }

// maxsubarr()




// ///////////////////////////
// let arr = [3,22,43,-43,-22]

// function maxSum(arr) {
//     let maxcurr = arr[0];
//     let maxGlob = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         let sum = maxcurr + arr[i];
//         let currEle = arr[i];

//         if (currEle > sum) {
//             maxcurr = currEle
//         } else {
//             maxcurr = sum
//         }

//         // compare max curr with globamax
//         if (maxcurr > maxGlob) {
//             maxGlob = maxcurr
//         }
//     }
//     return [maxGlob, "uttar"]

// }

// console.log(maxSum(arr))





















