// binary search



let newArr = [2, 4, 3, 33, 2, 2, 3, 45, 43, 46, 544, 3]
let arr = newArr.sort((a, b) => a - b)
console.log(arr)

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // return the index if found

        } else if (arr[mid] < target) {
            left = mid + 1; // movet to the right half
        } else {
            right = mid - 1;
        }

    }

    return -1 // if not found

}

let bs = binarySearch(arr, 45);
console.log(bs)