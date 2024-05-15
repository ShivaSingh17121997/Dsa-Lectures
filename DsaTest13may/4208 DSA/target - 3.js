// Find the target value provided in the rotated array  with the help of binary search
// Let arr  = [5,6,7,8,1,2,3] target val = 8 

let arr = [5, 6, 7, 8, 1, 2, 3];
let target = 8

function searchRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

         Check if arr[mid] is equals to target
        if (arr[mid] === target) {
            return mid; // Found the target value
        }

        // Check if the left half is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // Target is in the left half
            } else {
                left = mid + 1; // Target is in the right half
            }
        } else { // Right half is sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1; // Target is in the// right half
            } else {
                right = mid - 1; // Target is in the left half
            }
        }
    }

    return -1; // Target not found
}

const a = searchRotatedArray(arr, target);
console.log("Your target is on ",a," position.");