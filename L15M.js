// kadane algorithm


let arr = [3, 5, 2, -4, 34, 664, 8767];

function maxSumSubArry(arr) {
    let currMax = arr[0];
    let currGlob = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currMax = Math.max(arr[i], currMax + arr[i])

        if (currMax > currGlob) {
            currGlob = currMax
        }
    }
    return currGlob
}


console.log(maxSumSubArry(arr))
