// recursion

// //Counter

function Counter(num) {
    console.log(num)
    //base Condition
    if (num >= 1) {
        return Counter(num - 1)
    }
}
Counter(10);

// console.log(a)

// factorial 5! = 5*4*3*2*1  = 120
function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1) //120
    } else {
        return 1
    }
}

let ans = factorial(17);
console.log(ans)



// binary search with the help of recurion 
let arr = [1, 2, 4, 6, 8, 9, 10]
let k = 2

function binarySearch(arr, k, left = 0, right = arr.length - 1) {
    //base condition
    if (left > right) {
        return -1
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
        return [arr[mid], mid]

    } else if (arr[mid] > k) {
        return binarySearch(arr, k, left, mid - 1)
    } else {
        return binarySearch(arr, k, mid + 1, right)
    }
    return -1
}


let c = binarySearch(arr, k)
console.log(c)