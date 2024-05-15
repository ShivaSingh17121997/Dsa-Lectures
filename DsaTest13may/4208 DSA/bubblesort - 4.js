// Sort the array using any sorting algorithm  (bubble sort, quick sort, merge sort , selection sort ect)
// Let arr [4,43,44,54,21,43,83 ]
let arr = [4,43,44,54,21,43,83 ];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Original array:", arr);
const sortedArray = bubbleSort(arr);
console.log("Sorted array:", sortedArray);