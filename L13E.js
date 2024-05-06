// linear search , Binary Search, two pointer method



// function linearSearch(arr, target) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             return console.log([i, arr[i]])
//         }
//     }
// }
// let target = 27;

// let jignesh = linearSearch(arr, target)
// console.log(jignesh)



let arr = [1, 2, 433, 2, 27, 87];
let target = 8765;

function binarysearch(arr, target) {


    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            return [arr[mid], mid]
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

let bhargavi = binarysearch(arr, target)
console.log(bhargavi)